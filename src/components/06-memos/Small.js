import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('Me voli a llamar')

    return (
        <div>
            <small> { value } </small>
        </div>
    )
});
