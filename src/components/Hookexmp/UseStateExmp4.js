import React, { useState } from "react";

export default function UseStateExmp4() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };

  const miEstilo = {
    backgroundColor: "#333",
    color: "white",
    padding: "30px"
  };
  return (
    <div style={miEstilo}>
      <h2>Componente Funcional utilizando hooks en un array</h2>
      <button onClick={addItem}>Agregar numero random al array</button>
      <ul>
        {/* aqui esta funcion flecha retorna el valor entre parentesis */}
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
