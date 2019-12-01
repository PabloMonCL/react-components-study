import React, { Component } from "react";

class PropsExampleClass extends Component {
  render() {
    const miEstilo = {
      backgroundColor: "#8b2f97",
      color: "white",
      padding: "30px"
    };
    const { nombre } = this.props;
    return <div style={miEstilo}>Componente Clase saludando a {nombre}</div>;
  }
}

export default PropsExampleClass;
