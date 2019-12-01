// se debe inportar useState para utilizar este Hook
import React, { useState } from "react";

export default function UseStateExpm2() {
  //   Agregando un estilo in-line basico
  const style = {
    backgroundColor: "#999",
    padding: "30px"
  };

  //   Iniciando el valor de un estado
  const edadInicial = 0;

  // Usando la deconstruccion de arrays para definir el estado y el setter o sea una funcion del mismo
  const [edad, setEdad] = useState(edadInicial);

  //declarando el setter del estado
  const cumpleHandler = () => {
    // cuando el argumento es una funcion, se hace referencia al estado previo del estado
    setEdad(prevEdad => prevEdad + 1);
  };

  return (
    <div style={style}>
      <h2>UseState Ejemplo 2</h2>
      <p>La edad de la persona es {edad}</p>
      <button onClick={cumpleHandler}>Cumpleaños</button>
      <button onClick={() => setEdad(edadInicial)}>Renacer</button>
    </div>
  );
}
