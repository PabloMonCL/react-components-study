import React, { useState } from "react";

export default function UseStateExmp3() {
  const [persona, setPersona] = useState({
    nombre: "camila",
    apellido: "morales",
    edad: 32
  });
  //Este handler utiliza el spread operator ... sirve para copiar el contenido que ya existe en la variable
  const buenHandler = e => {
    setPersona({ ...persona, [e.target.name]: e.target.value });
  };
  const malHandler = e => {
    setPersona({ [e.target.name]: e.target.value });
  };

  const miEstilo = {
    padding: "30px"
  };
  return (
    <div style={miEstilo}>
      <h2>Componente funcional que utiliza Hooks</h2>
      <h3>El estado es un objeto json</h3>
      <p>{JSON.stringify(persona)}</p>
      <form>
        <div>
          <label>Cambia el nombre </label>
          <input
            type='text'
            name='nombre'
            value={persona.nombre}
            onChange={buenHandler}
          />
          <label>Cambia el estado bien</label>
        </div>
        <div>
          <label>Cambia la edad </label>
          <input
            type='text'
            name='edad'
            value={persona.edad}
            onChange={malHandler}
          />
          <label>Cambia el estado mal</label>
        </div>
      </form>
    </div>
  );
}
