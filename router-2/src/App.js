import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
 
} from 'react-router-dom'

import Contacto from './components/Contacto'
import Inicio from './components/Inicio'
import Nav from './components/Nav'
import Nosotros from './components/Nosotros'
import User from './components/User'

function App() {
    return (
        <Router>
            <div className="container">
                <Nav />
                <Switch>
                    <Route path='/nosotros/:id'>
                        <User />
                    </Route>
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
