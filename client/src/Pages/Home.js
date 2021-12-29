import React, {useState, useEffect} from 'react'
import Post from './../Components/Thread/Post'
import Feed from './../Components/Thread/Feed'
import Cards from './../Components/Cards/Cards'
import GoogleLogin from './../Components/GoogleLogin/GoogleLogin'
import FacebookLogin from '../Components/FacebookLogin/FacebookLogin'
import SnapLogin from '../Components/SnapLogin/SnapLogin'
function Home() {

    useEffect( () => {
        fetchUserItems();
    }, []);
    
    const [UserItems, setUserItems] = useState([]);
    
    const fetchUserItems = async () => {

        if(window.sessionStorage.getItem('UID') == ""){

            document.location.href="/Login"; 

        }else{

            const data = await fetch('/activeUser');
            const items = await data.json();
            setUserItems(items);

        }
    };

    return (

        <div className="Home">
            <div className="home-content-title">
                <h1> A la une </h1>
            </div>
            <div className="home-content">
                <iframe className="animation-home" src="https://embed.lottiefiles.com/animation/38964"></iframe>
            </div>
            <div className="home-content">
                <Post />
            </div>
            <div className="home-content">
                <Feed />
            </div>
        </div>
    )
}

export default Home
