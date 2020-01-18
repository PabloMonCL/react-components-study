import React, { useState } from 'react';

//El componente hijo se encarga de retener el dato en su estado y mardarlo al padre
export default function Hijo(props) {
  const [dato, setDato] = useState(null);
  // Se usa un deconstruct de los props para poder utilizar la funcion del padre
  const { handleDato } = props;

  const handleSetDato = e => {
    setDato(e.target.value);
  };
  // aqui se maneja la interaccion
  const handleClick = e => {
    e.preventDefault();
    //Aqui se usa la funcion del props y se manda el dato al padre
    handleDato(dato);
  };

  return (
    <div>
      <form>
        <input
          placeholder='Ingresar Dato'
          value={dato}
          onChange={handleSetDato}
          type='text'
        />
        <button onClick={handleClick}>Pasar Dato</button>
      </form>
    </div>
  );
}
