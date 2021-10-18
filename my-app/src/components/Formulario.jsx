import React, { Fragment, useState } from 'react'

const Formulario = () => {

    const [fruta, setFruta] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const guardarDatos = (e) => {
        e.preventDefault()

        if (!fruta.trim()) {
            console.log("Fruta esta vacio")
            return
        }

        if (!descripcion.trim()) {
            console.log("Descripcion esta vacio")
            return
        }
       
        console.log("procesando datos...")

        e.target.reset()
        setFruta("")
        setDescripcion("")
    }



    return (
        <Fragment>
            <p>Formulario</p>
            <form onSubmit={ guardarDatos }>
                <input
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange={(e) => (setFruta(e.target.value))}
                />
                <input
                    type="text"
                    placeholder="Ingrese descripcion"
                    className="form-control mb-2"
                    onChange={(e) => (setDescripcion(e.target.value))}
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
        </Fragment>
    )
}
export default Formulario