import React from "react";
import lista from "./personas.json";
import Persona from "./Persona";

export default function ListaPersonas() {
    const personas = lista;
    const personList = personas.map(person => (
        <Persona key={person.id} person={person} />
    ));
    return <div>{personList}</div>;
}
