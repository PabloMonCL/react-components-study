import React from 'react'

export default function Person({person}){
    return(
        <div>
            <h2>
                Soy {person.name} y tengo {person.age} años
            </h2>
        </div>
    )
}