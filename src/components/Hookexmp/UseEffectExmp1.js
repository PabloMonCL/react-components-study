import React, { useState, useEffect } from "react";
import "./css/estilos.css";

export default function UseEffectExamp1() {
  const [contador, setContador] = useState(0);
  // segundo estado que registra un string, e inicia vacio
  const [nombre, setNombre] = useState("");

  // useEffect tiene acceso a las variasbles y estados declarados fuera de el.
  // El segundo argumento es un array con los estados que se estan observando los cambios
  useEffect(() => {
    console.log("nombre", nombre);
    document.title = `Tu Clickeaste ${contador} veces el boton`;
    //eslint-disable-next-line
  }, [contador]);

  return (
    <div className='MiCuadro MiTema3'>
      <input
        className='MiInput1'
        type='text'
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />
      <button className='MiBoton1' onClick={() => setContador(contador + 1)}>
        Clickeame y mira el titulo de la pagina
      </button>
    </div>
  );
}
