import React,{useState,useEffect} from 'react'
import PostUserProfile from './postUserProfile'
import PostGenProfile from './postGenProfile'
import './friendProfile.css'

function FriendProfile() {
    const [Name, setName] = useState('')
    const [Firstname, setFirstname] = useState('')
    const [Punchline, setPunchline] = useState('')
    const [UID, setUID] = useState('')
    const [Owner, setOwner] = useState(false)
    var id = ''
    var fid = ''
    
    useEffect( () => {    
        fetchItmGeneral();
    }, []);
    
    
    const fetchItmGeneral = async () => {

        const token = sessionStorage.getItem('UID')
        const FriendViewID = sessionStorage.getItem('FID')
        var tokenFetched = '';

        if(FriendViewID){
            console.log('friend view asked : '+FriendViewID)
            tokenFetched = FriendViewID;
            setOwner(false);
        }else{
            tokenFetched = token;
            setOwner(true)
        }


        const data = await fetch('/activeUser', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                uid : tokenFetched,
            })
        })


        const ItmGeneral = await data.json();
        console.log('itm general : '+ItmGeneral);
        setName(ItmGeneral.name);
        setFirstname(ItmGeneral.firstname);
        setPunchline(ItmGeneral.punchline);
        
        //Remove when page change !!!!
        //sessionStorage.removeItem('FID')

       
    };

    const addNewFriend = async() =>{


        const UID_friend = sessionStorage.getItem('UID')
        const NewFriendID = sessionStorage.getItem('FID')

        console.log('add new friend from profile ! ' +NewFriendID)


        const data = await fetch('/addFriend', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                uid : UID_friend,
                fid : NewFriendID
            })
        })


    }

   // 


    return (
        <div className="nav-userprofile">
        <div className="ProfileHeader">
                <img className="ProfileBanner" src="/banner/banner_profile_florian.png"/>
                <img className="ProfileImgFriends" src="/profil/florian_profile.jpg"/>
                <div className="ProfileName">
                    <p>{Firstname +' '+Name}</p>
                </div>
                <div className="ProfilePucnhline">
                    <p>{Punchline}</p>
                </div>
 
            <ul className='tag-div'>
                <li className='tagUser'>Florian</li>
                <li className='tagUser'>Programming</li>
            </ul>

            <div className="connect">
                <iframe className="buttonFriends" src="https://embed.lottiefiles.com/animation/76112"></iframe>
                <p>Devenir amis</p>
            </div>




        </div>
            <div className='Content-div'>
                <PostGenProfile />
                <PostUserProfile />
            </div>
    </div>
    )
}

export default FriendProfile
