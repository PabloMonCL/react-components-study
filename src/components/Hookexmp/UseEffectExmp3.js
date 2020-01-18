import React, { useState, useEffect } from "react";
import "./css/estilos.css";
import UseEffectExmp4 from "./UseEffectExmp4";

export default function UseEffectExmp3() {
  const [mostrar, setMostrar] = useState(true);
  const [etiqueta, setEtiqueta] = useState("esconder");

  useEffect(() => {
    console.log("useEffect llamado");
    if (mostrar) {
      setEtiqueta("esconder");
    } else {
      setEtiqueta("mostrar");
    }
    //eslint-disable-next-line
  }, [mostrar]);

  return (
    <div className='MiCuadro MiTema3'>
      <h2>useEffect() con CleanUp</h2>
      <p>El valor del estado es {mostrar}</p>
      <button className='MiBoton1' onClick={() => setMostrar(!mostrar)}>
        {etiqueta} el Reloj
      </button>
      <div>{mostrar && <UseEffectExmp4 />}</div>
    </div>
  );
}
