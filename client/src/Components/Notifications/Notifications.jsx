import React,{useState} from 'react'
import './Notifications.css'
import * as MdIcons from 'react-icons/md'

function Notifications() {
    //Condition ? true : false
    return (
        <div className="Notifications-content">
            <h3># Notifications</h3>
            <ul className="list-notif">
                <li className="notif-content">
                    <img className="img-notif" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png"/>
                    <p className="notif-text"> Popup content here !!</p>
                    <button className="notif-profile-button">Découvrir</button>
                </li>
            </ul>
        </div>
    )
}

export default Notifications
