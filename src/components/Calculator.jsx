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
      <h2>Calculadora React</h2>

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
    gap: "10px",
    marginTop: "30px",
  },
  input: {
    width: "200px",
    padding: "5px",
  },
  select: {
    width: "210px",
    padding: "5px",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Calculator;