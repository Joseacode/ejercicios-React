import React, { Fragment } from "react";
import Eventos from "./components/Eventos.jsx";
import Parrafo from "./components/Parrafo.jsx"
import Variables from "./components/Variables.jsx";
import { Fragment } from "react";

//La etiqueta <Fragment> Reemplaza la etiqueta <div>  y es equivalente a <></>
//Si se usa la útima forma no es necesario importar de React a Fragment


function App() {

    return (

        <Fragment>
            <h1>Hola Munndo React</h1>
            <Parrafo />
            <Variables />
            <Eventos />
        </Fragment>
  );
}

export default App;
