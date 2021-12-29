import React from 'react'
import * as TiIcons from 'react-icons/ti'
import * as IoIcons from 'react-icons/io'
import './CardsTchat.css'
import { Link } from 'react-router-dom';

function CardsTchat() {
    return (
        <div className="cards-tchat-container">
            <div className="Cards-tchat">
                    <div className="iconCards">
                        <div className="icon-messages"><TiIcons.TiMessages /> <p className="nb-messages">100</p></div>
                        <div className="icon-notif"><IoIcons.IoMdNotifications /><p className="nb-notif">100</p></div>
                    </div>
                    <h3 className="title-tchat"> Parler avec mes amis</h3>
                    <hr className="hr-cards"/>
                    <ul className="nav-friends">
                        <li className="line-friends">
                            <img className="picture-friends" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png"/>
                            <div className="info-friends">
                                <p>Florian</p>
                                <p>Connecté le 10/10/21</p>
                            </div>
                            <button className="button-friends"><TiIcons.TiMessages /></button>
                        </li>

                        <li className="line-friends">
                            <img className="picture-friends" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png"/>
                            <div className="info-friends">
                                <p>Florian</p>
                                <p>Connecté le 10/10/21</p>
                            </div>
                            <button className="button-friends"><TiIcons.TiMessages /></button>
                        </li>

                        <li className="line-friends">
                            <img className="picture-friends" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png"/>
                            <div className="info-friends">
                                <p>Florian</p>
                                <p>Connecté le 10/10/21</p>
                            </div>
                            <Link to="/tchat"> <button className="button-friends"><TiIcons.TiMessages /></button></Link>
                        </li>

                    </ul>
            </div>
        </div>

    )
}

export default CardsTchat
