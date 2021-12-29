import React from 'react'
import './CardsPosted.css'
import * as RiIcons from 'react-icons/ri'
import * as VscIcons from 'react-icons/vsc'
import * as FaIcons from 'react-icons/fa'
import * as GoIcons from 'react-icons/go'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'

function CardsProfile() {
    return (
            <div className="Cards-posted-nopattern">
                <div className="iconCards-posted"> 
                    <img className="Cards-posted-picture" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png" />
                </div> 
                <div className="Cards-content">
                    <hr className="hr-cards"/>
                    <div className="cards-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="listTag">
                        <ul className="tags-posted">
                            <li className="tag-posted"> Informatique</li>
                            <li className="tag-posted"> ReactJS</li>
                        </ul>
                    </div>
                    <p className="deleteDate">Le post sera supprimé le 10/10/21</p>
                </div>
                <button className="button-cards">Lire</button> 
            </div>
    )
}

export default CardsProfile
