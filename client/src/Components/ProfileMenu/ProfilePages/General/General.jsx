import React,{useState, useEffect} from 'react'
import './General.css'
import * as MdIcons from 'react-icons/md'
import InputEditable from '../../InputEditable/InputEditable';
import TagInput from './../../../TagInput/TagInput'
import Droparea from '../../../DropArea/droparea';

function General(props) {

    const [ItmGen, setItmGen] = useState([]);
    const [OwnerShip, setOwnerShip] = useState()
    const data = ''

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
            console.log('ownership : true ')
            tokenFetched = token;
            owner = true;

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

        const ItmGeneral = await data.json()
        console.log("itm from general : "+ItmGeneral)

        setItmGen([
            {
                question:'Biographie',
                inputType: <InputEditable name={'bio'} editable={owner} value={ItmGeneral.bio} />,
                name:'biographie'
            },
            {
                question:'Où habites-tu ?',
                inputType: <InputEditable name={'city'} editable={owner} value={ItmGeneral.city} />,
                name:'emploi'
            },
            {
                question:'Que voulais-tu faire en étant petit ?',
                inputType: <InputEditable name={'travail_petit'} editable={owner} value={ItmGeneral.travail_petit} />,
                name:'emploi'
            },
            {
                question:"Que veux-tu faire dans l'avenir ?",
                inputType: <InputEditable name={'travail_futur'} editable={owner} value={ItmGeneral.travail_futur} />,
                name:'emploi'
            },
            {
                question:'Genre',
                inputType: <TagInput name={'genre'} editable={owner} value={ItmGeneral.genre} />,
                name:'emploi'
            },
            {
                question:'Situation amoureuse',
                inputType: <TagInput name={'love'} editable={owner} value={ItmGeneral.love} />,
                name:'emploi'
            },{
                question:"Quelles sont tes passions / centres d'intérêts ?",
                inputType: <TagInput name={'passion'} editable={owner} value={ItmGeneral.passion} />,
                name:'emploi'
            },{
                question:"Partage nous tes réalisations",
                inputType: <InputEditable name={''} editable={owner} value={ItmGeneral.passion_image} />,
                name:'emploi'
            },{
                question:"Pourquoi as-tu choisi cet art ?",
                inputType: <InputEditable name={'art'} editable={owner} value={ItmGeneral.art} />,
                name:'emploi'
            },{
                question:"Raconte-nous quelque chose de plus !?",
                inputType: <InputEditable name={'qqch_plus'} editable={owner} value={ItmGeneral.qqch_plus}/>,
                name:'emploi'
            }
            
    ]);

   // sessionStorage.removeItem('FID')

    };




    //Condition ? true : false
    return (
        <div className="general-content">
            <h3># General</h3>
            
            <form className="formGeneral" method="POST" action="/updateUserGen" encType="multipart/form-data">
            {ItmGen.map((item, index) => {
                            return (
                                <div>
                                    <div className="question">{item.question}</div> <br />
                                    <div className="response">{item.inputType}</div>
                                </div>
                            )
                        })}
                <input type="submit" className="submit-button" placeholder="Appliquer" />
            </form>
        </div>
    )
}

export default General
