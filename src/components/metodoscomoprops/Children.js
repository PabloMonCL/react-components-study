import React from 'react'

function Children(props){
    return(
        <div>
            <button onClick={()=>props.saludar('Children')}>Saludar</button>
        </div>
    )
}

export default Children