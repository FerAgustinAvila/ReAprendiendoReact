import React, { useState } from 'react'

const Formulario = () => {

    const [ nombre, setNombre ] = useState('');
    const [ edad, setEdad ] = useState('');

    const Validar = ( event ) => {
        event.preventDefault();
        if (!nombre.trim()) {
            console.log('El nombre esta vacío');
            return
        }  

        if (!edad.trim()) {
            console.log('La edad esta vacía');
            return
        }  
    }
    

    return (
        <div className="container">
            <form onSubmit={ Validar } className="form-group">
                <input 
                    placeholder="Introduce el nombre" 
                    className="form-control mb-3 mt-3" 
                    type="text"
                    onChange={ (e) => { setNombre(e.target.value);} } />
                <input 
                    placeholder="Introduce tu edad" 
                    className="form-control mb-3" 
                    type="text"
                    onChange={ (e) => { setEdad(e.target.value);} } />
                <div className="d-grid gap-2">
                    <input className="btn btn-info btn-block" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Formulario
