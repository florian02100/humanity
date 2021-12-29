import React, {useState, useEffect} from 'react'
import './CardsProfile.css'
import { Link } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri'
import * as VscIcons from 'react-icons/vsc'
import * as FaIcons from 'react-icons/fa'
import * as GoIcons from 'react-icons/go'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'

function CardsProfile(props) {

    const [first, setfirst] = useState('')
    const [name, setname] = useState('')
    const [Tags, setTags] = useState([])
    const [line, setline] = useState('')

    useEffect( () => {
        fetchItmCards();
    }, []);
    
    
    const fetchItmCards = async () => {

        const FriendViewID = props.friend_id
        var tokenFetched = '';
        var owner = false;


        const data = await fetch('/activeUser',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                uid:FriendViewID
            })
        })

        const Itm = await data.json()

        setfirst(Itm.firstname)
        setname(Itm.name)
        setTags(Itm.interets)
        setline(Itm.punchline)

        console.log("itm from cercle : "+Itm.firstname)
    }

    const getFriendProfil = () => {
        console.log('FID from cards : '+FID)
        sessionStorage.setItem('FID',FID);
        document.location.href = '/Profil/General'
    }

    const FID = props.friend_id
    const UID = props.userid

    return (
            <div className="Cards-search-nopattern">
                <div className="iconCards-search"> 
                    <img className="Cards-search-picture" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png" />
                </div> 
                <div className="Cards-content">
                    <hr className="hr-cards"/>
                    <div className="cards-text">
                        {first+' '+name} <br/>
                        {line}
                    </div>
                    <div className="listTag">
                        <ul className="tags-serach">
                        {
                            Tags
                        }
                        </ul>
                    </div>
                </div>
                    <button className="button-cards" onClick={getFriendProfil}>Discover</button> 
            </div>
    )
}

export default CardsProfile
