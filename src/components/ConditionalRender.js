import React, { Component } from "react";

export default class ConditionalRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar1: true,
      mostrar2: false,
      mostrar3: true,
      mostrar4: true
    };
  }
  //Hay 3 formas de hacer renderizar condicionalmente
  render() {
    let mensaje;
    //Mediante un if else
    if (!this.state.mostrar2) {
      mensaje = (
        <div>
          <p>
            Mostrar 1 y 3 es true y Mostrar 2 es :{" "}
            {this.state.mostrar2.toString()}
          </p>
        </div>
      );
    } else {
      mensaje = (
        <div>
          <p>Mostrar 2 es : {this.state.mostrar2.toString()}</p>
        </div>
      );
    }

    if (this.state.mostrar1) {
      //Mediante una operacion ternaria
      return this.state.mostrar3 ? mensaje : <div>Nada que Mostrar</div>;
    } else {
      return (
        //Mediante un operador logico &&
        this.state.mostrar4 && (
          <div>
            <p>Mostrar 4 es : {this.state.mostrar4.toString()}</p>
          </div>
        )
      );
    }
  }
}
