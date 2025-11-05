import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Calculator from "../src/components/Calculator";

describe("Calculator component", () => {
  it("Error si los valores no son números.", () => {
    render(<Calculator />);
    const button = screen.getByText("Calcular");
    fireEvent.click(button);
    expect(screen.getByText(/números válidos/i)).toBeInTheDocument();
  });

  it("Suma correctamente.", () => {
    render(<Calculator />);
    const inputs = screen.getAllByRole("spinbutton");
    fireEvent.change(inputs[0], { target: { value: "5" } });
    fireEvent.change(inputs[1], { target: { value: "3" } });
    fireEvent.click(screen.getByText("Calcular"));
    expect(screen.getByText(/resultado/i)).toHaveTextContent("8");
  });

  it("Error al dividir por cero.", () => {
    render(<Calculator />);
    const inputs = screen.getAllByRole("spinbutton");
    const select = screen.getByRole("combobox");

    fireEvent.change(inputs[0], { target: { value: "10" } });
    fireEvent.change(inputs[1], { target: { value: "0" } });
    fireEvent.change(select, { target: { value: "division" } });

    fireEvent.click(screen.getByText("Calcular"));
    expect(screen.getByText(/dividir por cero/i)).toBeInTheDocument();
  });
});
