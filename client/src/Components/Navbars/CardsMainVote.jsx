import React from 'react'
import * as GiIcons from 'react-icons/gi'
import './CardsMainVote.css'

function CardsMainVote() {
    return (
        <div className="cards-container">
            <div className="Cards"><div className="iconCards"><GiIcons.GiGreekTemple /></div> <hr className="hr-cards"/> <div className="cards-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div><button className="button-main-vote">Publicité</button><button className="button-main-vote">Abonnement</button><button className="button-main-vote">Forfait</button> </div>
        </div>
    )
}

export default CardsMainVote
