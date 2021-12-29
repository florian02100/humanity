import React, {useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' 
import { SidebarData } from './ProfileSidebarData';
import { Link } from 'react-router-dom';
import './ProfileMenu.css'
import './ProfileNavbar.css'
import General from './ProfilePages/General/General'
import Style from './ProfilePages/Style/Style'
import Convictions from './ProfilePages/Convictions/Convictions'
import Experiences from './ProfilePages/Experiences/Experiences'
import Parametres from './ProfilePages/Parametres/Parametres'
import FeedProfile from './ProfilePages/FeedProfile/FeedProfile';
import Cercle from './ProfilePages/Cercle/Cercle';

function ProfileMenu(props) {

    console.log('props owner : '+props.OwnerEdit)

    return (
        <div className="profile-navbar">
            <div className="profile-navbar-content">
             {SidebarData.map((item, index) => {
                            if(props.OwnerEdit == true || item.title != 'Paramètres'){
                                return (
                                    < li title={item.title} key={index} className={item.cName}>
                                        
                                            <Link to={item.path}>
                                                {item.icon}  {item.title}
                                            </Link>
                                    </li>

                                )
                            }
                        })}
            </div>
            <div className="profile-content">
                <Switch>
                    <Route path='/profil/General' exact> <General userid={props.UserId}/> </Route>
                    <Route path='/profil/Parametres' exact> <Parametres userid={props.UserId}/> </Route>
                </Switch>
            </div>
        </div>
    )
}

export default ProfileMenu
