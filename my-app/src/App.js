import React, { Fragment } from "react";
//import Contador from "./components/Contador.jsx";
//import Eventos from "./components/Eventos.jsx";
import Listas from "./components/Listas.jsx";
//import Parrafo from "./components/Parrafo.jsx"
//import Variables from "./components/Variables.jsx";


//La etiqueta <Fragment> Reemplaza la etiqueta <div>  y es equivalente a <></>
//Si se usa la útima forma no es necesario importar de React a Fragment


function App() {

    return (

        <Fragment>
            <h1>Hola Munndo React</h1>
            {/*<Parrafo />*/}
            {/*<Variables />*/}
            {/*<Eventos />*/}
            {/*<Contador />*/}
            <Listas />
        </Fragment>
  );
}

export default App;
