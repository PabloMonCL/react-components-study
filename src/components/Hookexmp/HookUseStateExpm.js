import React, { useState } from "react";

export default function HookUseStateExpm(props) {
  const mystyle = {
    backgroundColor: "black",
    color: "white",
    padding: "30px"
  };

  const [estado, setEstado] = useState(0); //valor de estado = 0
  return (
    <div style={mystyle}>
      <p>Hola Hook Component aqui y el estado tiene un valor de {estado}</p>
      <button onClick={() => setEstado(estado + 2)}>Aumentar estado</button>
    </div>
  );
}
