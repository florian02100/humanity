import React,{useState,useEffect} from 'react'
import Tabs from './Tabs'
import './profile.css'
import ProfileMenu from './../ProfileMenu/ProfileMenu'

//Icons
import * as BiIcons from 'react-icons/bi'

const Profile = (props) => {

    const [Name, setName] = useState('')
    const [Firstname, setFirstname] = useState('')
    const [FirstLastName, setFirstLastName] = useState('')
    const [Punchline, setPunchline] = useState('')
    const [Photo, setPhoto] = useState('')
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
        setFirstLastName(ItmGeneral.firstname+ ' '+ItmGeneral.name)
        setPunchline(ItmGeneral.punchline);
        setPhoto(ItmGeneral.photo);
        
        //Remove when page change !!!!
        //sessionStorage.removeItem('FID')

       
    };

    const changeFirstname = (event) =>{
        setFirstname(event.target.value)
    }
    const changeName = (event) =>{
        setName(event.target.value)
    }

    const changePunchline = (event) =>{
        setPunchline(event.target.value)
    }

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
        <div className="nav-profile">
            <div className="ProfileHeaderSet">
                <img className="ProfileImgSet" src={Photo}/>

                <form className="ProfileNamediv" method='POST' action='/updateMainProfile' encType="multipart/form-data">
                    <div className='buttonEdit'>
                        <label for="file-input">
                            <BiIcons.BiEdit/>
                        </label>

                        <input id="file-input" name="ProfilePhoto" type="file" />
                    </div>
                    <input type="hidden" value={sessionStorage.getItem('UID')} name="UserProfileID"/>
                    <div className="ProfileLineEdit"><input name="ProfileName" className="ProfileNameInput" type='text' onChange={changeFirstname} value={Firstname}/></div>
                    <div className="ProfileLineEdit"><input name="ProfileFirstname" className="ProfileNameInput" type='text' onChange={changeName} value={Name}/></div>
                    <div className="ProfileLineEdit"><input name="ProfilePunchline" className="ProfileNameInput" type='text' onChange={changePunchline} value={Punchline}/></div>
                    <input className="humanity-button" type="submit" value="Modifier" />
                </form>
            </div>
            {() =>{
                if(Owner == true){
                    console.log('owner true')
                }else{
                    console.log('owner false')
                    return (
                        <div className="connect">
                            <button className="humanity-button" onClick={addNewFriend} >Se connecter</button>
                        </div>
                    )
                }
            }}

            <hr className="highlight-bar"/>
            <div className="TabProfile">
                <ProfileMenu UserId={UID} OwnerEdit={Owner}/>
            </div>
        </div>
    )
}

export default Profile
