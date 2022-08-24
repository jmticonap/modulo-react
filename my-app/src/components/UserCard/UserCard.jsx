import {React, useState} from 'react'
import './UserCard.css'
import 'boxicons'
import DbUsers from '../DbUsers.js'

const UserCard = () => {

    const [idx, setIdx] = useState(0)

    const shuffleIdx = () => {
        const new_idx = Math.round(Math.random()* DbUsers.length-1 )
        setIdx( new_idx ) 
    }

    const colors = [
        "blue",
        "blueviolet",
        "brow",
        "cadetblue",
        "chocolate",
        "blue",
        "blueviolet",
        "brow",
        "cadetblue",
        "chocolate"
    ]

    return (
        <div className='user-card' style={{backgroundColor: colors[idx]}}>
            <h2>{ `${DbUsers.at(idx).name.title } ${DbUsers.at(idx).name.first} ${DbUsers.at(idx).name.last}` }</h2>
            <img src={DbUsers.at(idx).picture.large} alt={`${DbUsers.at(idx).title} ${DbUsers.at(idx).first} ${DbUsers.at(idx).last}`} />
            <div>
                <i className='bx bx-envelope' ></i>
                <span> {DbUsers.at(idx).email} </span>
            </div>
            <div>
                <i className='bx bx-phone' ></i>
                <span> {DbUsers.at(idx).phone}</span>
            </div>
            <div>
                <i className='bx bx-location-plus' ></i>
                <span> {`${DbUsers.at(idx).location.street.name} ${DbUsers.at(idx).location.city} ${DbUsers.at(idx).location.state}`}</span>
            </div>
            <button onClick={shuffleIdx}>
                <i className='bx bx-shuffle'></i>
            </button>
            
        </div>
    );
};

export default UserCard;