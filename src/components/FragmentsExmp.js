import React from 'react';

//Los Fragmentos Permiten agrupar unalista de Hijos sin agregar nodos Extra al DOM
export default function FragmentExmp() {
  const h2Estilo = {
    color: '#fa4252'
  };
  const pEstilo = {
    color: '#91bd3a'
  };
  return (
    <React.Fragment>
      <h2 style={h2Estilo}>Fragment</h2>
      <p style={pEstilo}>Parrafo del componente Fragment</p>
    </React.Fragment>
  );
}
