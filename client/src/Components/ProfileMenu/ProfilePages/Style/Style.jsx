import React,{useState, useEffect} from 'react'
import './Style.css'
import * as MdIcons from 'react-icons/md'
import TextInputEditable from './../../InputEditable/InputEditable'
import { StyleData } from './StyleData';
import InputEditable from '../../InputEditable/InputEditable';
import TagInput from './../../../TagInput/TagInput'

function Style(props) {
    
    const [ItmStl, setItmStl] = useState([]);
    const UID = props.userid
    useEffect( () => {
        fetchItmStyle();
    }, []);
    
    
    const fetchItmStyle = async () => {
        
        const token = sessionStorage.getItem('UID')
        const FriendViewID = sessionStorage.getItem('FID')
        var tokenFetched = '';

        if(FriendViewID){
            console.log('friend view asked : '+FriendViewID)
            tokenFetched = FriendViewID;
        }else{
            tokenFetched = token;
        }

        const data = await fetch('/activeUser', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                uid : tokenFetched
            })
        })
        
        const ItmStyle = await data.json();
        console.log(ItmStyle);

        setItmStl([
            {
                question:'As-tu des piercings ?',
                inputType: <InputEditable name={'piercing'} value={ItmStyle.piercing}/>,
                name:'biographie'
            },
            {
                question:'As-tu des tatouages ?',
                inputType: <InputEditable name={'tattoo'} value={ItmStyle.tattoo}/>,
                name:'biographie'
            },{
                question:'Quels vêtements aimes-tu proter ?',
                inputType: <InputEditable name={'vetements'} value={ItmStyle.vetements} />,
                name:'biographie'
            },{
                question:"Aimerais-tu changer de style dans l'avenir ?",
                inputType: <InputEditable name={'style_futur'} value={ItmStyle.style_futur}/>,
                name:'biographie'
            },
        ])

        sessionStorage.removeItem('FID')

    }

    return (
        <div className="Style-content">
            <h3># Style</h3>
            
            <form method="POST" action="/updateUserStyle" encType="multipart/form-data">
            {ItmStl.map((item, index) => {
                            return (
                                <div className="field-Style">
                                    <span className="question">{item.question}</span>
                                    {item.inputType}
                                </div>
                            )
                        })}
                <input type="submit" className="submit-button" placeholder="Appliquer" />
            </form>
        </div>
    )
}

export default Style
