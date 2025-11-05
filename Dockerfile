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

# Cambiar configuración de NGINX para usar el puerto asignado por Render
RUN sed -i 's/listen 80;/listen ${PORT};/' /etc/nginx/conf.d/default.conf

# Exponer el puerto dinámico
EXPOSE 10000

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
