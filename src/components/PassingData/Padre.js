import React, { useState } from 'react';
import '../Hookexmp/css/estilos.css';
import Hijo from './Hijo';

//En este componente se reciben datos desde un componente hijo
export default function Padre() {
  const [datoPadre, setDatoPadre] = useState(null);
  //Se crea una funcion que tiene la logica de guardar los datos
  const handleDato = dato => {
    setDatoPadre(dato);
  };
  return (
    <div className='MiCuadro MiTema4'>
      <h2>Este es el dato mandado desde el componente Hijo</h2>
      <h1>{datoPadre}</h1>
      {/* Se pasa como prop la funcion, esto hace que en el hijo solo tenga que pasarse como parametro de la funcion el dato a guardar */}
      <Hijo handleDato={handleDato} />
    </div>
  );
}
