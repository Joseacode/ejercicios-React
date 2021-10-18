import React from 'react'

const Variables = () => {

    const saludo = "Hola desde constante"
    const imagen = "https://i.pinimg.com/564x/b9/cc/4e/b9cc4eabf9513065426eaa05a7520e96.jpg"
    return (
        <div>
            <h2>Nuevo Componente {saludo}</h2>
            <img src={ imagen } alt=""></img>
        </div>
    )
}
export default Variables