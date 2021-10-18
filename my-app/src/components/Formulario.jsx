import React, { Fragment, useState } from 'react'

const Formulario = () => {

    const [fruta, setFruta] = useState("")
    const [descripcion, setDescripcion] = useState("")

    return (
        <Fragment>
            <p>Formulario</p>
            <form>
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
                <button className="btn btn-primary btn-block">Agregar</button>
            </form>
        </Fragment>
    )
}
export default Formulario