import React from 'react'
import './Cards.css'
import * as RiIcons from 'react-icons/ri'
import * as VscIcons from 'react-icons/vsc'
import * as FaIcons from 'react-icons/fa'
import * as GoIcons from 'react-icons/go'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'

function Cards() {
    return (
        <div className="cards-line">
            <div className="Cards"><div className="iconCards"> <FaIcons.FaNewspaper /></div> <hr className="hr-cards"/> <div className="cards-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div><button className="button-cards">Discover</button> </div>
            <div className="Cards"><div className="iconCards"> <FaIcons.FaNodeJs /></div>  <hr className="hr-cards"/> <div className="cards-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div><button className="button-cards">Discover</button> </div>
            <div className="Cards"><div className="iconCards"> <FaIcons.FaHeart /></div>  <hr className="hr-cards"/> <div className="cards-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div><button className="button-cards">Discover</button> </div>
            <div className="Cards"><div className="iconCards"> <FaIcons.FaNewspaper /></div>  <hr className="hr-cards"/> <div className="cards-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div><button className="button-cards">Discover</button> </div>
        </div>
    )
}

export default Cards
