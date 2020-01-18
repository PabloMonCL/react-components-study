import React, { useState, useEffect } from "react";
//se esta utilizando una notacion de modulos para agregar estilos
import miscomponentes from "./css/miscomponents.module.css";

export default function UseEffectExmp4() {
  const [segundos, setSegundos] = useState(0);

  const ticktack = () => setSegundos(prevSegundo => prevSegundo + 1);

  useEffect(() => {
    //setInterval es una funcion de javascript
    const intervalo = setInterval(ticktack, 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    // por utilizar esta notacion no se pueden tener dos tipos de estilos en el className. Para poder utilzar mas estilos utilizando esta notacion se debe instalar en node el modulo classname
    <div className={miscomponentes.aspectRatioBox}>
      <div className={miscomponentes.aspectRatioBoxInside}>
        <div className={miscomponentes.flexboxCentering}>
          <div className={miscomponentes.reloj}>
            <h3>Has estado en esta página</h3>
            <h1>{segundos}</h1>
            <h3>segundos</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
