import React, {useState,useEffect} from 'react'

function ContactInfo(props) {

    const [first, setfirst] = useState('')
    const [name, setname] = useState('')
    const [Tags, setTags] = useState([])
    const [line, setline] = useState('')

    useEffect( () => {
        fetchItmCards();
    }, []);

    const setConversation = () =>{
        console.log('conv : '+props.friend_id);
        sessionStorage.setItem('Conv',props.friend_id);
        window.location.reload(false);
       // setclicked(true)

    }
    
    
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

    return (
        <button className="contact-info" onClick={setConversation}>
            <img className="contact-photo" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png"/>
            <div className="text-infos">
                <p className="contact-name">{first+ ' ' + name}</p>
                <p className="contact-punchline">{line}</p>
            </div>
        </button>
    )
}

export default ContactInfo
