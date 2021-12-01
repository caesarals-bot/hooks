import React from 'react'
import { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    
    const handleClick = () => {
        document.querySelector('input').select();
    } 

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Su Nombre"
            />

            <button
              className="btn btn-outline-primary mt-4"
              onClick={ handleClick }  
            >Focus</button>
        </div>
    )
}
