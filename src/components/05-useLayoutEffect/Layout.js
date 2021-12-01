import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCouter } from '../../hooks/useCouter'

import './layout.css'
import { useLayoutEffect, useRef, useState } from 'react/cjs/react.development'

export const Layout = () => {

    const { counter, increment } = useCouter(1)

    const {  data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    const [boxSize, setBoxSize] = useState({});

    const { quote } = !!data && data[0];
    
    const pTag = useRef();

    useLayoutEffect(() => {
        
        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [quote])

    

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

                        <blockquote className="blockquote text-end">
                            <p className=""
                                ref={pTag}
                            > { quote } </p>
                          
                        </blockquote>

                        <pre>
                            { JSON.stringify( boxSize, null, 3)}
                        </pre>

            <button
              className="btn btn-primary"
              onClick={increment}>
                Siguiente Frase
            </button>

            


        </div>
    )
}
