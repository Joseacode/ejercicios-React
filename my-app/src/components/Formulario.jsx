import React, { Fragment } from 'react'

const Formulario = () => {
    return (
        <Fragment>
            <p>Formulario</p>
            <form>
                <input
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="Ingrese descripcion"
                    className="form-control mb-2"
                />
                <button className="btn btn-primary btn-block">Agregar</button>
            </form>
        </Fragment>
    )
}
export default Formulario