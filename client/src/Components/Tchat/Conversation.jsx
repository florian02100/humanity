import React,{useEffect,useState} from 'react'
import './Conversation.css'

function Conversation() {

    const [UserID, setUserID] = useState('')
    const [ConvID, setConvID] = useState('')
    const [ItmConv, setItmConv] = useState([])

    useEffect( () => {
        getUID();
    }, []);
    
    
    const getUID = async () => {

        const data = await fetch('/all-Tchat',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                uid: sessionStorage.getItem('UID')
            })
        })
        const Itm = await data.json()


            setItmConv(Itm)

            console.log('Itm conversation : '+Itm)
            setUserID(sessionStorage.getItem('UID'))
            setConvID(sessionStorage.getItem('Conv'))
        
    }

    return (
        <div className="Tchat-container">

            {
                ItmConv.map((item, index) => {

                    if(item.sent_by == sessionStorage.getItem('Conv')){
                        if(item.sent_by == UserID){
                            return(
                                <div className="container-user">
                                    <div className="content-user1">
                                        <img className="photo-user1" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png" />
                                        <p className="message-user1">
                                            {ConvID +' '+item.message}
                                        </p>
                                    </div>
                                    <i>{item.date_exp}</i>
                                </div>   
                            )
                        }else{
                            return(
                                <div className="container-user">
                                    <div className="content-user2">
                                        <img className="photo-user2" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png" />
                                        <p className="message-user2">
                                            {ConvID +' '+item.message}
                                        </p>
                                    </div>
                                    <i>{item.date_exp}</i>
                                </div>   
                            )
                        }
                    }
                })
            }
   
            <div className="conatiner-input">
                <form method="POST" action="/newMessage" encType="multipart/form-data">
                    <textarea name="message" className="text-input"></textarea>
                    <input name="linkid" value={UserID} type="hidden" />
                    <input name="convid" value={ConvID} type="hidden" />
                    <input className="buttonMessage" type="submit" value="Envoyer" />
                </form>
            </div>
        </div>
    )
}

export default Conversation
