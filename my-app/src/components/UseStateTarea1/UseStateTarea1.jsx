//rsc
import {React, useState} from 'react';

const UseStateTarea1 = () => {

    const [title, setTitle] = useState("Estado inicial")

    const cambiarEstado = () => {
        setTitle("El estado cambió!!!")
    }

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={cambiarEstado}>Cambiar mensaje</button>
        </div>
    );
};

export default UseStateTarea1;