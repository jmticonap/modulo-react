import React from 'react';
import '../UseStateTarea2/UseStateTarea2.css'

const UseStateTarea3 = ({encendido, setEncendido}) => {
    const encendidoToggle = () => {
        setEncendido(!encendido)
    }
    let styleFoco = encendido?'foco':'foco foco-on'

    return (
        <div className='usestatetarea2'>
            
            <div className={styleFoco}></div>
            <button onClick={ encendidoToggle }>{ encendido?"ON":"OFF" }</button>
            
        </div>
    );
};

export default UseStateTarea3;