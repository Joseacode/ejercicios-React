import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <NavLink to='/' className='btn btn-dark' activeClassName='active'>
                Inicio
            </NavLink>
            <NavLink to='/contacto' className='btn btn-dark' activeClassName='active'>
                Contacto
            </NavLink>
            <NavLink to='/nosotros' className='btn btn-dark' activeClassName='active'>
                Nosotros
            </NavLink>
        </>
    );
}

export default Nav;