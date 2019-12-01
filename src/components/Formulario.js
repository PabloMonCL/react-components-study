import React, { Component } from "react";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      edad: 0
    };
  }

  handleName = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => console.log(this.state.nombre)
    );
  };

  render() {
    const miEstilo = {
      backgroundColor: "#357376",
      color: "white",
      padding: "30px"
    };
    const respEstilo = {
      backgroundColor: "#6ba8a9"
    };
    return (
      <div style={miEstilo}>
        <form>
          <div>
            <label> Nombre </label>
            <input
              type='text'
              name='nombre'
              value={this.state.nombre}
              onChange={this.handleName}
            />
          </div>
          <div>
            <label> Apellido</label>
            <input
              type='text'
              name='apellido'
              value={this.state.apellido}
              onChange={this.handleName}
            />
          </div>
        </form>
        <div>
          <h4 style={respEstilo}>
            tu nombre es {this.state.nombre} {this.state.apellido}
          </h4>
        </div>
      </div>
    );
  }
}
