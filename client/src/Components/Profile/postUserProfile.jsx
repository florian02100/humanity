
import './postUserProfile.css'
import * as RiIcons from 'react-icons/ri'
import * as VscIcons from 'react-icons/vsc'
import * as FaIcons from 'react-icons/fa'
import * as GoIcons from 'react-icons/go'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'
import React, {useEffect, useState} from 'react';


function PostUserProfile() {

    useEffect( () => {
        fetchItems();
    }, []);
    
    const [items, setItems] = useState([]);
    
    const fetchItems = async () => {
        const data = await fetch('/all-post');
        const items = await data.json();
        setItems(items);
    };

    return (
        <div className="content-nav-userfeed">
            <div className="map-container">
                    <div className="nav-feed">
                        <div className="header-feed">
                                <img className="photo-profile" src="/profil/florian_profile.jpg" />
                                <div className="title-feed">Post 1 </div>
                        </div>  
                        <hr />
                        <div className="content-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu vehicula mi, eu vestibulum orci. Phasellus non metus interdum erat cursus euismod at bibendum justo. Etiam porttitor dui lectus, sed ornare lacus condimentum vitae. Sed ultricies mauris mi, in varius libero tincidunt et. Integer id tellus magna. Curabitur nec nulla vel sapien commodo finibus. Phasellus elementum tellus in ante tincidunt sagittis. Aenean sed velit vestibulum, efficitur diam at, tempor neque. Nulla at ultrices dui. Integer tempor ante id felis commodo accumsan.</p>
                        </div>
                        <div className="content-feed"><img className="post-img-friends" src="/banner/banner_profile_florian.png"/></div>
                        <hr />
                        <ul className='tag-div-post'>
                            <li className='tagExp'>#Florian</li>
                            <li className='tagStyle'>#Programming</li>
                            <li className='tagConv'>#Programming</li>
                        </ul>
                    </div> 
                </div>
        </div>
    )
}


export default PostUserProfile
