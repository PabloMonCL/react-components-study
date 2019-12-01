import React, { Component } from "react";

class StateExampleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: "ESTADO"
    };
  }
  render() {
    const miEstilo = {
      backgroundColor: "#fe6845",
      color: "white",
      padding: "30px"
    };
    return (
      <div style={miEstilo}>
        <h3>Este es el estado interno del componente {this.state.estado}</h3>
      </div>
    );
  }
}

export default StateExampleClass;
