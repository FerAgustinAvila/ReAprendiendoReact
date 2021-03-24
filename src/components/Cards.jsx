import React from 'react'

const Cards = ( props ) => {

    const { image, title, text } = props

    return (
        <div className='card' style={{ width: "18rem", margin: "auto" }}>
            <img 
                src={ image } 
                className='card-img-top img-thumbnail'/>
            <div className='card-body'>
                <h5 className='card-title'> { title } </h5>
                <p className='card-text'> { text } </p>
                <a href="#" className='btn btn-primary'>
                    Ver más
                </a>
            </div>
        </div>
    )
}

export default Cards
