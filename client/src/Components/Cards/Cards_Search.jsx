import React, {useState, useEffect} from 'react'
import './Cards_Search.css'
import { Link } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri'
import * as VscIcons from 'react-icons/vsc'
import * as FaIcons from 'react-icons/fa'
import * as GoIcons from 'react-icons/go'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'

function CardsSearch(props) {

    const FID = props.friend_id
    const UID = props.userid

    console.log('FID from head : ', props.friendid);

    const getFriendProfil = () => {
        console.log('FID from cards : '+props.friendid)
        sessionStorage.setItem('FID',props.friendid);
        document.location.href = '/UserProfile'
    }

    return (
            <div className="Cards-search-nopattern">
                <div className="iconCards-search"> 
                    <img className="Cards-search-picture" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png" />
                </div> 
                <div className="Cards-content">
                    <hr className="hr-cards"/>
                    <div className="cards-text">
                        {props.firstname+' '+props.name} <br/>
                        {props.line}
                    </div>
                    <div className="listTag">
                        <ul className="tags-serach">
                        {
                            props.Tags
                        }
                        </ul>
                    </div>
                </div>
                    <button className="button-cards" onClick={getFriendProfil}>Discover</button> 
            </div>
    )
}

export default CardsSearch
