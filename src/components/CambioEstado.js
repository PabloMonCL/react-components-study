import React, { Component } from "react";

export default class CambioEstado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atributo1: "cadena",
            atributo2: 2,
            atributo3: false,
            atributo4: [3, 5]
        };
        this.click3handler = this.click3handler.bind(this)
    }
    /** esta forma de cambiar el estado tiene un problema de performance
     * <button onClick={this.click1handler.bind(this)}>
     * ya que llama cada vez que se haga click al bind(this)
     */
    click1handler() {
        this.setState({
            atributo1: "otra cadena"
        });
    }

    /** esta forma de cambiar el estado tambien tiene un problema de performance
     * <button onClick={()=> this.click2handler()}>
     * pero es una manera simple de pasar parametros a los componentes hijos
     */
    click2handler() {
        this.setState({
            atributo2: 9
        });
    }

    /** esta forma de cambiar el estado es recomendada por la documentacion
     * this.click3handler.bind(this) en el constructor
     */
    click3handler() {
        this.setState({
            atributo3: true
        });
    }

    /** esta es otra forma de cambiar el estado recomendada
     * utilizando una propiedad de clase como funcion flecha
     */
    click4handler = () => {
        this.setState({
            atributo4: [9,8]
        });
    };

    render() {
        return (
            <div>
                <p>El estado cuenta con 3 atributos</p>
                <p>
                    Atributo 1 : {this.state.atributo1}{" "}
                    <button onClick={this.click1handler.bind(this)}>
                        Cambiar Estado 1
                    </button>
                </p>
                <p>
                    Atributo 2 : {this.state.atributo2}{" "}
                    <button onClick={() => this.click2handler()}>
                        Cambiar Estado 2
                    </button>
                </p>
                <p>
                    Atributo 3 : {this.state.atributo3.toString()}{" "}
                    <button onClick={this.click3handler}>
                        Cambiar Estado 3
                    </button>
                </p>
                <p>
                    Atributo 4 : [{this.state.atributo4.toString()}]{" "}
                    <button onClick={this.click4handler}>
                        Cambiar Estado 4
                    </button>
                </p>
            </div>
        );
    }
}
