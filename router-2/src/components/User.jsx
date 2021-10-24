import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const { id } = useParams()

    const [pueblo, setPueblo] = React.useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        const user = await data.json()
        setPueblo(user)
    }
    return (
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.army_type }</p>
            
        </div>
    );
}

export default User;