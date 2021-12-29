import React,{useState, useEffect} from 'react'
import './Convictions.css'
import * as MdIcons from 'react-icons/md'
import TextInputEditable from './../../InputEditable/InputEditable'
import { ConvictionsData } from './ConvictionsData';
import TagInput from './../../../TagInput/TagInput';


function Convictions(props) {

    const [ItmCon, setItmCon] = useState([]);
    const UID = props.userid

    useEffect( () => {
        fetchItmConvictions();
    }, []);
    
    
    const fetchItmConvictions = async () => {
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
        const ItmConvictions = await data.json();
        setItmCon([
            {
                question:'Politique',
                inputType: <TagInput name='politics' value={ItmConvictions.politics} />,
                name:'biographie'
            },{
                question:'Religieuse',
                inputType: <TagInput name='religion' value={ItmConvictions.religion} />,
                name:'biographie'
            },{
                question:'Morale',
                inputType: <TagInput name='morale' value={ItmConvictions.morale} />,
                name:'biographie'
            }
        ])

        sessionStorage.removeItem('FID')

    }

    //Condition ? true : false
    return (
        <div className="Convictions-content">
            <h3># Convictions</h3>
            
            <form method="POST" action="/updateUserConv" encType="multipart/form-data">
            {ItmCon.map((item, index) => {
                            return (
                                <div className="field-Convictions">
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

export default Convictions
