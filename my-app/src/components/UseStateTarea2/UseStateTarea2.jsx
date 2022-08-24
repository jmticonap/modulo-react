import { React, useState} from 'react';
import './UseStateTarea2.css'

const UseStateTarea2 = ({isOn}) => {
    console.log(isOn);
    const [encendido, setEncendido] = useState(isOn?isOn:false)
    let styleFoco = encendido?'foco':'foco foco-on'

    const encendidoToggle = () => {
        setEncendido(!encendido)
        isOn = encendido
        styleFoco = encendido?'foco':'foco foco-on'
    }

    return (
        <div className='usestatetarea2'>
            
            <div className={styleFoco}></div>
            <button onClick={ encendidoToggle }>{ encendido?"ON":"OFF" }</button>
            
        </div>
    );
};

export default UseStateTarea2;