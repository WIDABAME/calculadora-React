# Etapa 1: Construcción
FROM node:22-alpine AS build

# Crear el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Compilar el proyecto
RUN npm run build

# Etapa 2: Servidor NGINX para producción
FROM nginx:stable-alpine

# Copiar los archivos estáticos generados
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
