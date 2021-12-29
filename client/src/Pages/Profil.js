import React from 'react'
import ProfilUser from './../Components/Profile/profile'

function Profil(props) {
    return (
        <div className="Profil">
            <div className="home-content">
                <ProfilUser UserId={props.userId}/>
            </div>
        </div>
    )
}

export default Profil
