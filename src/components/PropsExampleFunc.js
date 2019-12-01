import React from "react";

function PropsExampleFunc(props) {
  const miEstilo = {
    backgroundColor: "#561f55",
    color: "white",
    padding: "30px"
  };
  const { nombre } = props;
  return (
    <div style={miEstilo}>
      <h1>Este es un componente Funcional {nombre} </h1>
      <h3>y tu nombre ha pasado como un props del componente</h3>
    </div>
  );
}

export default PropsExampleFunc;
