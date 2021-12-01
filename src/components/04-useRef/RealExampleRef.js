import React from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import { useState } from 'react/cjs/react.development'

import '../02-useEffect/effects.css'

export const RealExampleRef = () => {


    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks />}

            <button className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow( !show )
                } }
            >Show/hide</button>

        </div>
    )
}
