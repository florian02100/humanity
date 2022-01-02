import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom';

function welcome() {
    return (
        <div className='home'>
            <div className="home-content-title">
                <h1> Bienvenue </h1>
            </div>
            <div className="welcome-content">
                <img className='welcome-logo' src="/img/Humanity.png"/>
                <div className='welcome-paragraph'>
                <p>
                    Salut à toi, &#10024; <br /> <br />
                </p>
                <p>
                    Si tu as reçu ce lien c'est que tu souhaites participer à la construction de ce nouveau réseau. &#127757;
                     C'est que tu souhaites faire évoluer le monde, vers plus d'équité et de fraternité. &#10084;
                    <br /><br />
                    Pour rappel Humanity, réponds aux 3 règles suivantes :  &#128077; <br /><br />
                </p>
                <ul>
                    <li className='welcome-li'>L'algorithme ne met en avant que des posts bienveillants. Les critères standards des autres réseaux ne nous conviennent pas.</li>
                    <li className='welcome-li'>Tes données ne seront pas sauvegardées, ni utilisées à des fins publicitaires , ni revendues.</li>
                    <li className='welcome-li'>Pour éviter de te polluer avec des informations qui ne t'intéressent pas. Le fil d'actualité se paramètre grâce aux hastags qui t'intéressent. #</li>
                    <li className='welcome-li'>Les posts et discussions ne sont pas sauvegardées sur le long terme. Nous nous soucions de la santé de notre planète et nous trouvons inutile de consommer une énergie quelconque dans ce type de stockage. &#127757; </li>
                </ul>
                <br /><br />
                <p>
                    Si tu te reconnais dans nos valeurs alors rejoins notre communauté. &#128588; <br /> <br />
                </p>
                <Link to='/Subscriptions'>
                    <button className='humanity-button'>Continuer vers inscritption</button>
                </Link>

                <br/> <br/>
                </div>
            </div>
        </div>
    )
}

export default welcome
