import React, { Fragment } from 'react'



const Contador = () => {

    const [contador, setContador] = React.useState(0)

    //const aumentar = () => {
    //    console.log('click')
    //    setContador(contador + 1)
    //}

    return (
        <Fragment>
            <h2>Contador</h2>
            <h2>Numero aumentando { contador }</h2>
            {/*<button onClick={() => aumentar()}>Click</button>*/}
            <button onClick={() => setContador(contador + 1)}>Click</button>
        </Fragment>
    )
}

export default Contador