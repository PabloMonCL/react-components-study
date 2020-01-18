import React from 'react';

//WrappedComponent es un componente al cual se le agregara codigo mediante el withCounter que tiene como parametros el mismo componente y un argumento extra
const withCounter = (WrappedComponent, incrementNumber) => {
  //withCounter crea una clase
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      //Lo que hara el HOC es agregar un contador, que guarda en el estado count
      this.state = {
        count: 0
      };
    }

    incrementCount = () => {
      this.setState({ count: this.state.count + incrementNumber });
    };

    render() {
      //En el Render retorna el mismo WrappedComponent pero le agrega un props que son el codigo que se quiere agregar
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  //withCounter retorna finalmente la Clase entera
  return WithCounter;
};
//Se exporta la constante que almacena la funcion creadora de la clase y acepta los nuevos argumentos
export default withCounter;
