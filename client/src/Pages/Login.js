import React, {useState, useRef,useEffect, createRef} from 'react'
import Post from './../Components/Thread/Post'
import Feed from './../Components/Thread/Feed'
import Cards from './../Components/Cards/Cards'
import  GoogleLogin  from './../Components/GoogleLogin/GoogleLogin'
import FacebookLogin from '../Components/FacebookLogin/FacebookLogin'
import SnapLogin from '../Components/SnapLogin/SnapLogin'
import { Link } from 'react-router-dom';

import './Login.css'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

function Login() {



    const [isGoogleLogged, setIsGoogleLogged] = useState(false)
    const [isFacebookLogged, setIsFacebookLogged] = useState(false)
    const [Login, setLogin] = useState([]);
    const [LoginFb, setLoginFb] = useState([]);
    const GoogleRef = React.createRef();
    const FacebookRef = React.createRef();
    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')
    const [result, setresult] = useState('')



    //Le logOut doit déconnecter google et facebook.

    useEffect( () => {    
        sessionStorage.removeItem('UID')
        sessionStorage.removeItem('FID')

        fetchUserID();
    }, []);
    
    
    const fetchUserID= async () => {

        const data = await fetch('/user/login',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email:Email,
            password : Pass
        })
        })

        const content = await data.json();

        sessionStorage.setItem('UID',content._id);
        document.location.href = '/'

        /*.then(res => res.json())
        .then((res2) =>{
           // document.location.href = '/'
            setresult(res2);
            console.log('result from fetch : '+res2)   
            window.sessionStorage.setItem('UID',result._id)

        })
*/
        
        /*.then(res => res.json())
        .then((res)=> {
            console.log("result"+res)
            window.sessionStorage.setItem('UID',res._id)
        })*/
        /*setName(ItmGeneral.name);
        setFirstname(ItmGeneral.firstname)
        setPunchline(ItmGeneral.punchline)*/
    };

    const sessionConnexion = () =>{

        //form onSubmit => sessionConnexion OK
        //Faire des state email + password OK
        // fetch userLogin si ok send result => user data OK
        // sessionStorage userID 

        console.log('send fetch')
        fetchUserID();
        
    }

    const changeEmail = (event) =>{
        setEmail(event.target.value)
    }

    const changePass = (event) =>{
        setPass(event.target.value)
    }

    return (
        <div className="Login">
            <div className={isGoogleLogged || isFacebookLogged ? 'login-content-hidden' : 'login-content'}>
                    <div className="card-login">
                        <img src="/img/Humanity.png"/>
                        <h3> Connexion </h3>
                        <div className="humanity-login">
                            <div className="form-login">
                                <input className="humanity-input" name="email" type="text" placeholder="Email" onChange={changeEmail} value={Email}/><br />
                                <input className="humanity-input" name="password" type="password" placeholder="Mot de passe" onChange={changePass} value={Pass} />
                                <button className="humanity-button" name="submit-login" onClick={sessionConnexion}>Connexion</button>
                            </div>
                            <p>Vous n'avez pas de compte ? <Link to='/Subscriptions'className="signup-link"> S'inscrire </Link> </p>
                        </div>
                        
                        <hr className="hr-login"/>
                        <div className="social-login">
                            <GoogleLogin ref={GoogleRef} getLogin={Login => setLogin(Login)} getIsLogged={isGoogleLogged => setIsGoogleLogged(isGoogleLogged)}/>
                        </div>
                        <div className="social-login">
                            <FacebookLogin ref={FacebookRef} getLogin={LoginFb => setLoginFb(LoginFb)} getIsLogged={isFacebookLogged  => setIsFacebookLogged(isFacebookLogged)}/>
                        </div>
                    </div>
            </div>

            <div className={isGoogleLogged ? 'login-google-content' : 'login-google-content-hidden'}>
                <div className="card-login">
                    <AiIcons.AiFillGoogleSquare />
                    <h3> Connexion </h3>
                    {Login.map(item => (
                        <div className="social-login-container">
                            <img className="humanity-profil-image" src={item.image}/>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                            <form method="POST" action="/user/search" encType="multipart/form-data">
                                <input name="name" type="hidden" value={item.name}/>
                                <input name="email" type="hidden" value={item.email}/>
                                <input name="image" type="hidden" value={item.image}/>
                                <input type="submit" className="humanity-button" value={"Se connecter en tant que "+ item.name } />
                            </form>
                            <button className="humanity-button" onClick={() => GoogleRef.current.logOut()}>Changer de compte</button>
                            
                        </div>
                    ))}
                        
                </div>
            </div>

            <div className={isFacebookLogged ? 'login-fb-content' : 'login-fb-content-hidden'}>
                <div className="card-login">
                <FaIcons.FaFacebookSquare />    
                    <h3> Connexion </h3>
                    {LoginFb.map(item => (
                        <div className="social-login-container">
                            <img className="humanity-profil-image" src={item.image}/>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                            <form method="POST" action="/user/search" encType="multipart/form-data">
                                <input name="name" type="hidden" value={item.name}/>
                                <input name="email" type="hidden" value={item.email}/>
                                <input name="image" type="hidden" value={item.image}/>
                                <input type="submit" className="humanity-button" value={"Se connecter en tant que "+ item.name } />
                            </form>
                            <button className="humanity-button" onClick={() => FacebookRef.current.logOut()}>Changer de compte</button>
                        </div>
                    ))}
                        
                </div>
            </div>
            <div className='quote'>
                <h3>Thankfulness</h3>
                <p>I am because we are</p>
            </div>
        </div>
    )
}

export default Login
