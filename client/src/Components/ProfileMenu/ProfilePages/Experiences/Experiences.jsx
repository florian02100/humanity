import React,{useState, useEffect} from 'react'
import './Experiences.css'
import * as MdIcons from 'react-icons/md'
import TextInputEditable from './../../InputEditable/InputEditable'
import { ExperiencesData } from './ExperiencesData';
import InputEditable from '../../InputEditable/InputEditable';
import TagInput from './../../../TagInput/TagInput'

function Experiences(props) {
    
    const [ItmExpe, setItmExpe] = useState([]);
    const UID = props.userid

    useEffect( () => {
        fetchItmExperiences();
    }, []);
    
    
    const fetchItmExperiences = async () => {
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
        
        const ItmExperiences = await data.json();
        setItmExpe([
            {
                question:'Quels message aimerais-tu partager avec la communauté ?',
                inputType: <InputEditable name='message_shared' value={ItmExperiences.message_shared} />,
                name:'biographie'
            },
            {
                question:'Quels moments de ta vie aimerais-tu nous partager ?',
                inputType: <InputEditable name='life_moment' value={ItmExperiences.life_moment}/>,
                name:'biographie'
            },{
                question:'Quels voyages as-tu fait ?',
                inputType: <InputEditable name='travels' value={ItmExperiences.travels}/>,
                name:'biographie'
            },{
                question:'Quelles ont été tes plus belles rencontres ?',
                inputType: <InputEditable name='life_moments' value={ItmExperiences.life_moments}/>,
                name:'biographie'
            },{
                question:'Quel est ta plus grande fierté ?',
                inputType: <InputEditable name='prud_moments' value={ItmExperiences.prud_moments}/>,
                name:'biographie'
            },{
                question:'Quel est ton prochain défi ?',
                inputType: <InputEditable name='challenge_futur' value={ItmExperiences.challenge_futur}/>,
                name:'biographie'
            }
        ]);
        sessionStorage.removeItem('FID')

    }

    return (
        <div className="Experiences-content">
            <h3># Experiences</h3>
            
            <form method="POST" action="/updateUserExpe" encType="multipart/form-data">
            {ItmExpe.map((item, index) => {
                            return (
                                <div className="field-Experiences">
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

export default Experiences
