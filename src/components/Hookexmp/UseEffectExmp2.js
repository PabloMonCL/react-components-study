import React, { useState, useEffect } from "react";
import "./css/estilos.css";

export default function UseEffectExmp2() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect Llamado");
    window.addEventListener("mousemove", logMousePosition);
    // Al retornar esta funcion hace se hace un clean Up imitando la funcion de componenWillUnmount
    return () => {
      console.log("Componente desmontado");
      window.removeEventListener("mousemove", logMousePosition);
    };
    // Al colocar el array de observacion vacio hace que el llamado a useEffect solo se realice una vez
  }, []);

  return (
    <div className='MiCuadro MiTema2'>
      <h3>Posicion del Mouse en</h3>
      <p>
        {" "}
        X:{x} en Y:{y}
      </p>
    </div>
  );
}
