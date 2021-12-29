import React from 'react'
import './Cards_vote.css'
import * as GiIcons from 'react-icons/gi'

function Cards() {
    return (
        <div className="cards-line">
            <div className="Cards"><div className="iconCards"><GiIcons.GiGreekTemple /></div> <hr className="hr-cards"/> <div className="cards-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div><button className="button-cards-yes">OUI</button><button className="button-cards-no">NON</button> </div>
            <div className="Cards"><div className="iconCards"><GiIcons.GiGreekTemple /></div>  <hr className="hr-cards"/> <div className="cards-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div><button className="button-cards-yes">OUI</button><button className="button-cards-no">NON</button> </div>
            <div className="Cards"><div className="iconCards"><GiIcons.GiGreekTemple /></div>  <hr className="hr-cards"/> <div className="cards-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div><button className="button-cards-yes">OUI</button><button className="button-cards-no">NON</button> </div>
            <div className="Cards"><div className="iconCards"><GiIcons.GiGreekTemple /></div>  <hr className="hr-cards"/> <div className="cards-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div><button className="button-cards-yes">OUI</button><button className="button-cards-no">NON</button> </div>
        </div>
    )
}

export default Cards
