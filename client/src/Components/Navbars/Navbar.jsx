import React, {useState,useEffect} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css'
import { IconContext } from 'react-icons'
import { IoIosConstruct } from 'react-icons/io';
import TagInput from './../TagInput/TagInput';
import Notifications from './../Notifications/Notifications';
//import PopupNotif from './popupNotif'

function Navbar(props) {

    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [sideNotif,setSideNotif] = useState(false);
    const showNotif = () => setSideNotif(!sideNotif);

    const [sideTag,setSideTag] = useState(false);
    const showTag = () => setSideTag(!sideTag);

    return (
        <>
          <div className="navbar">
                <div className="navbar-header">
                    <div className="company-info">
                        <img className="company-logo" src="/img/humanity.png" />
                        <h1 className="company-name">umanity</h1>
                    </div>
                    {SidebarData.map((item, index) => {
                            return (
                                < li title={item.title} key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>

                            )
                        })}
                     <li onClick={showNotif} className='nav-text-single'> <a><img className="icon-navbar" src="/Icons/notification.png" /> </a></li>   
                     <li onClick={showTag} className='nav-text-single'> <a><img className="icon-navbar" src="/Icons/hashtag.png" /></a></li>   
                </div>
           </div>  
           <div className={sideNotif ? 'navNotif' : 'navNotif-hidden'}>
                <Notifications />
           </div>
           <div className={sideTag ? 'navTag' : 'navTag-hidden'}>
                <TagInput />
           </div>

          
            <Link to='/Tchat'>
               <div className="buttonTchat">
                   <div className="buttonIcon">
                       <MdIcons.MdMessage />
                   </div>
                </div>
            </Link>
           
        </>
    )
}

export default Navbar
