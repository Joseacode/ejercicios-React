import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Contacto from './components/Contacto'
import Inicio from './components/Inicio'
import Nav from './components/Nav'
import Nosotros from './components/Nosotros'

function App() {
    return (
        <Router>
            <div className="container">
                <Nav />
                <Switch>
                    <Route exact path='/'>
                        <Inicio />
                    </Route>
                    <Route path='/contacto'>
                        <Contacto />
                    </Route>
                        <Route path='/nosotros'>
                            <Nosotros />
                    </Route>
                    
                </Switch>
            </div>
        </Router>
  );
}

export default App;
