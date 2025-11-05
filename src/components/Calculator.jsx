import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("suma");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setError("Por favor ingrese números válidos");
      setResult(null);
      return;
    }

    let res = 0;

    switch (operation) {
      case "suma":
        res = a + b;
        break;
      case "resta":
        res = a - b;
        break;
      case "multiplicacion":
        res = a * b;
        break;
      case "division":
        if (b === 0) {
          setError("No se puede dividir por cero");
          setResult(null);
          return;
        }
        res = a / b;
        break;
      default:
        setError("Operación no válida");
        return;
    }

    setResult(res);
    setError("");
  };

  return (
    <div style={styles.container}>

      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        style={styles.select}
      >
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>

      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />

      <button onClick={calculate} style={styles.button}>
        Calcular
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {result !== null && (
        <p style={{ color: "green" }}>Resultado: {result}</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
    marginTop: "50px",
    padding: "28px",
    backgroundColor: "#f3f4f6", 
    borderRadius: "14px",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
    width: "360px",
    marginInline: "auto",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    fontSize: "15px",
    color: "#111827",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  },
  select: {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    fontSize: "15px",
    color: "#111827",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  },
  button: {
    width: "100%",
    padding: "12px 14px",
    backgroundColor: "#10b981", 
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "600",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.2s, transform 0.1s, box-shadow 0.2s",
    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.3)",
  },
};

export default Calculator;