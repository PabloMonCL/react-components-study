import React, { Component } from 'react';
// HOC
import withCounter from './withCounter';

//Esta clase solo se encarga de la parte Visual y el HOC se encarga de la logica del estado
class HoverCounter extends Component {
  render() {
    const myStyle = {
      backgroundColor: 'steelblue',
      color: 'white',
      padding: '20px'
    };
    const { count, incrementCount } = this.props;
    return (
      <div style={myStyle}>
        <h2 onMouseOver={incrementCount}>
          Has pasado por encima {count} veces
        </h2>
      </div>
    );
  }
}
//Para utilizar el HOC se exporta la llamada a la funcion que utiliza el componente como parametro
export default withCounter(HoverCounter, 1);
