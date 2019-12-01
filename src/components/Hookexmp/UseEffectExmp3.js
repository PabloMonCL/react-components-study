import React, { useState, useEffect } from "react";
import "./css/estilos.css";
import UseEffectExmp2 from "./UseEffectExmp2";

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
      <button onClick={() => setMostrar(!mostrar)}>
        {etiqueta} el componente
      </button>
      {mostrar && <UseEffectExmp2 />}
    </div>
  );
}
