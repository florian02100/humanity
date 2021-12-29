import React,{useState, useEffect} from 'react'
import './Parametres.css'
import * as MdIcons from 'react-icons/md'
import { ParametresData } from './ParametresData';
import InputEditable  from '../../InputEditable/InputEditable';
import TagInput from './../../../TagInput/TagInput'

function Parametres(props) {
    
    const [ItmSet, setItmSet] = useState([]);
    const UID = props.userid
    useEffect( () => {
        fetchItmParametres();
    }, []);
    
    
    const fetchItmParametres = async () => {
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
        
        const ItmParametres = await data.json();
        setItmSet([
            {
                question:'Couleur de fond',
                inputType: <InputEditable name='color' value={ItmParametres.color} />,
                name:'biographie' 
            },{
                question:'Photo de profil',
                inputType: <InputEditable name='profile_photo' value={ItmParametres.profile_photo}/>,
                name:'biographie' 
            },{
                question:'Mail',
                inputType: <InputEditable name='email' value={ItmParametres.email}/>,
                name:'biographie' 
            },{
                question:'Téléphone',
                inputType: <InputEditable name='phone' value={ItmParametres.phone}/>,
                name:'biographie' 
            },{
                question:'Website',
                inputType: <InputEditable name='website' value={ItmParametres.website}/>,
                name:'biographie' 
            },{
                question:'Protection des données',
                inputType: <InputEditable name='data_protect' value={ItmParametres.data_protect}/>,
                name:'biographie' 
            },{
                question:'Facebook',
                inputType: <InputEditable name='facebook' value={ItmParametres.facebook}/>,
                name:'biographie' 
            },{
                question:'Youtube',
                inputType: <InputEditable name='youtube' value={ItmParametres.youtube}/>,
                name:'biographie' 
            },{
                question:'Instagram',
                inputType: <InputEditable name='instagram' value={ItmParametres.instagram}/>,
                name:'biographie' 
            },{
                question:'Linkedin',
                inputType: <InputEditable name='linkedin' value={ItmParametres.linkedin}/>,
                name:'biographie' 
            }
        ])
        sessionStorage.removeItem('FID')

    }

    return (
        <div className="Parametres-content">
            <h3># Parametres</h3>
            
            <form method="POST" action="/updateUserParam" encType="multipart/form-data">
            {ItmSet.map((item, index) => {
                            return (
                                <div className="field-Parametres">
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

export default Parametres
