import React,{useState, useEffect} from 'react'
import './Cercle.css'
import * as MdIcons from 'react-icons/md'
import TextInputEditable from './../../InputEditable/InputEditable'
import SwitchPrivacy from './../../../Profile/switchPrivacy'
import CardsProfile from './../../../Cards/CardsProfile'

function Cercle() {

    const [ItmCercle, setItmCercle] = useState([]);
    const [ItmCercleFriend, setItmCercleFriend] = useState([]);

    useEffect( () => {
        fetchItmGeneral();
    }, []);
    
    
    const fetchItmGeneral = async () => {

        const token = sessionStorage.getItem('UID')
        const FriendViewID = sessionStorage.getItem('FID')
        var tokenFetched = '';
        var owner = false;

        if(FriendViewID){
            console.log('friend view asked : '+FriendViewID)
            tokenFetched = FriendViewID;
            owner = false;
        }else{
            console.log('ownership : true ' + token)
            tokenFetched = token;
            owner = true;

        }

        const data = await fetch('/activeUserFriend',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                uid:token
            })
        })

        const Itm = await data.json()
        console.log("itm from cercle : "+Itm.friends)

        //Array of ID friend
        setItmCercleFriend(
            Itm.friends
        )

        
    };

    //Condition ? true : false
    return (
        <div className="Cercle-content">
            <h3># Cercle</h3>
            <SwitchPrivacy />
            <h2 className="title-highlight">Les bests</h2>
            <p>Ils ont accès à la totalité du profil</p><br/>
            <div className="best-line">
                
                <p>Cette fonctionnalité sera bientôt disponible.</p>
            </div>
            <br />
            <h2 className="title-highlight">Les connaissances</h2>
            <p>Ils ont accès aux informations générales,aux photos et vidéos et à la rubrique styles et cultures.</p>
            <div className="connaissances-line">
            {
                    ItmCercleFriend.map((item, index) => {
                        
                        console.log('itm : '+item);

                        //Do something with friend data => post cards profile with information 
                        return(
                            <CardsProfile friend_id={item} />
                        )
                    })
                
                }
            </div>
            <br />
        </div>
    )
}

export default Cercle
