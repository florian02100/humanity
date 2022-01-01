import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './Subscriptions.css'

function Subscriptions() {


    const [name, setName] = useState('')
    const [firstname, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const [pass1,setPass1] = useState('')
    const [pass2,setPass2] = useState('')
    const [passOK, setpassOK] = useState(false)

    useEffect( () => {
        console.log('Je suis là')
        const queryParams = new URLSearchParams(window.location.search);
        const CompleteName = queryParams.get('name');
        const email = queryParams.get('mail');
        const image = queryParams.get('url');

        //const name = CompleteName.split(' ')[1];
        //const firstname = CompleteName.split(' ')[0];

        setName(name);
        setFirstName(firstname);
        setEmail(email);
        setImage(image);
        
    }, []);

    const setPass = (event) =>{

        setPass1(event.target.value)
    }
    const checkPassword =(event)=>{

        setPass2(event.target.value);

        console.log(pass1,pass2);
        if(pass1===pass2){
            setpassOK(true)
        }else{
            setpassOK(false)
        }
    }

    return (
        <div className="Subscriptions">
            <div className='subscription-content'>
                <div className="card-subscriptions">
                    <h3> Inscription </h3>
                    <p className="subtitle">Inscrivez-vous pour partager des moments avec vos amis et futurs amis.</p>
                    <form className="form-subscriptions" method="POST" action="/addUser">
                        <input className="humanity-input" type="text" name="name" placeholder="Nom" value={name}/> <br/>
                        <input className="humanity-input" type="text" name="firstname" placeholder="Prénom" value={firstname}/> <br/>
                        <input className="humanity-input" type="email" name="mail" placeholder="Mail" value={email}/> <br/>
                        <input className="humanity-input" type="password" name="pass1" placeholder="Mot de passe"/> <br/>
                        <input className="humanity-input" type="password" name="pass2" placeholder="Vérification mot de passe"/> <br/>
                        <div className={passOK ? 'check-sub' : 'check-sub-hidden'}> Correct </div>
                        <input className="humanity-input" type="tel" name="phone" placeholder="Téléphone"/> <br/>
                        <input className="humanity-button" type="submit" value="S'inscrire"/>
                    </form>
                    <hr className="hr-subscriptions"/>
                    <p>Vous avez un compte ? <a className="signup-link"> Connectez-vous </a> </p> 
                </div>
            </div>

        </div>
    )
}

export default Subscriptions
