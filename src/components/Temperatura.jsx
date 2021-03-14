// rafce
import React, { useState } from 'react'

const Temperatura = () => {

    const [ temperatura, setTemperatura ] = useState(19)
    const Subir = () => {
        setTemperatura( temperatura + 1)
    }

    const Bajar = () => {
        setTemperatura( temperatura - 1)
    }

    return (
        <div className="container">
            <h3> Temperatura Component </h3>
            <h5> La temperatura es: { temperatura }</h5>
            <p>
                {
                    temperatura > 21 ? 'Hace calor' : 'Hace frio'
                }
            </p>
            <div className="d-grid gap-2">
                <button className="btn btn-success btn-block" onClick={ Subir }> Aumentar temperatura </button>
                <button className="btn btn-success btn-block" onClick={ Bajar }> Reducir temperatura </button>
            </div>
        </div>
    )
}

export default Temperatura
