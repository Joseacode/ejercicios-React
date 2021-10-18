import React, { useState, Fragment } from 'react'



const Listas = () => {

    const estadoInicial = [
        { id: 1, tarea: 'Tarea 1' },
        { id: 2, tarea: 'Tarea 2' },
        { id: 3, tarea: 'Tarea 3' }
    ]
    const [lista, setLista] = useState(estadoInicial)

    return (
        <Fragment>
            <h2>Listas</h2>
            {
                lista.map((item, index) => (
                    <h4 key={item.id}>{item.tarea}</h4>
                ))
            }
        </Fragment>
    )
}
export default Listas