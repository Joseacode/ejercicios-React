import React, { useState, Fragment } from 'react'



const Listas = () => {

    const estadoInicial = [
        { id: 1, tarea: 'Tarea 1' },
        { id: 2, tarea: 'Tarea 2' },
        { id: 3, tarea: 'Tarea 3' }
    ]
    const [lista, setLista] = useState(estadoInicial)

    const agregarElemento = () => {
        console.log('click')
        setLista([
            ...lista,
            { id: 4, tarea: "tarea 4" }
        ])
    }

    return (
        <Fragment>
            <h2>Listas</h2>
            {
                lista.map((item, index) => (
                    <h4 key={index}>{item.tarea}</h4>
                ))
            }

            <button onClick={() => agregarElemento()}>Click</button>
        </Fragment>
    )
}
export default Listas