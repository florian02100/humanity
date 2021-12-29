import React,{useState,useEffect} from 'react'
import ContactInfo from './ContactInfo';
import './contacts.css'


function Contacts() {

    const [ItmCercleFriend, setItmCercleFriend] = useState([]);
    const [clicked, setclicked] = useState(false)

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

        
    }


    return (
        <div>
            <div className="container-contacts">
                <ul className="list-contacts">

                    {
                        ItmCercleFriend.map((item, index) => {
                            
                            console.log('itm : '+item);

                            //Do something with friend data => post cards profile with information 
                            return(
                                    <ContactInfo friend_id={item} />
                            )
                        })
                    
                    }
                </ul>
            </div>
        </div>
    )
}

export default Contacts
