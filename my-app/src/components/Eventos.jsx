import React, { useState } from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState('Texto desde Estado')

    const eventoClick = () => {
        console.log("me diste un click")
        setTexto('Cambiando el texto....')
    }

    return (

        <div>
            <hr />
            <h2>{texto}</h2>
            <button onClick={eventoClick}>Click</button>
        </div>
        )
}

export default Eventos