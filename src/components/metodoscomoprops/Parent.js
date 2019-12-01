import React, {Component} from 'react'
import Children from './Children'

export default class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            nombre: 'Padre'
        }
        this.metodo = this.metodo.bind(this)
    }
    
    metodo(params){
        alert(`Saludos a ${this.state.nombre} de tu ${params}`)
    }
    render(){
        return(
            <Children saludar={this.metodo}/>
        )
    }
}
