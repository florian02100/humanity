import React from 'react'
import FriendProfile from '../Components/Profile/friendProfile'

function Profil(props) {
    return (
        <div className="Profil">
            <div className="home-content-title">
                <h1> Dans l'univers de ... </h1>
            </div>
            <div className="home-content">
                <FriendProfile UserId={props.userId}/>
            </div>
        </div>
    )
}

export default Profil
