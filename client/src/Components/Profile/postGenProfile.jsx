
import './postGenProfile.css'
import * as RiIcons from 'react-icons/ri'
import * as VscIcons from 'react-icons/vsc'
import * as FaIcons from 'react-icons/fa'
import * as GoIcons from 'react-icons/go'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as HiIcons from 'react-icons/hi'
import * as MdIcons from 'react-icons/md'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'
import * as CgIcons from 'react-icons/cg'
import * as IoIcons from 'react-icons/io'
import React, {useEffect, useState} from 'react';


function PostGenProfile() {

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
        <div className="content-nav-genfeed">
            <div className="map-container">
                    <div className="nav-feed">
                        <div className="content-text">
                            <h3 className='title-gen'>bio</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu vehicula mi, eu vestibulum orci. Phasellus non metus interdum erat cursus euismod at bibendum justo. Etiam porttitor dui lectus, sed ornare lacus condimentum vitae. Sed ultricies mauris mi, in varius libero tincidunt et. Integer id tellus magna. Curabitur nec nulla vel sapien commodo finibus. Phasellus elementum tellus in ante tincidunt sagittis. Aenean sed velit vestibulum, efficitur diam at, tempor neque. Nulla at ultrices dui. Integer tempor ante id felis commodo accumsan.</p>
                            
                            {/*Pack d'icônes à faire, créer le components Icônes + texte + un state select or not */}
                            <h3 className='title-gen'>Genre</h3>
                            <div className='icon-div'>
                            </div>
                            <h3 className='title-gen' >Métier</h3>
                            <div className='icon-div'>
                                <div className='icon-elm'>
                                    <img className='icon-gen-active' src="/Icons/portable.png" />
                                    <p className='icon-label'>Developpeur</p>
                                </div>
                                <div className='icon-elm'>
                                    <img className='icon-gen' src="/Icons/portable.png" />
                                    <p className='icon-label'>Developpeur</p>
                                </div>
                            </div>
                            <div className='icon-div'>
                                <div className='icon-elm'>
                                    <img className='icon-gen-active' src="/Icons/portable.png" />
                                    <p className='icon-label'>Developpeur</p>
                                </div>
                                <div className='icon-elm'>
                                    <img className='icon-gen' src="/Icons/portable.png" />
                                    <p className='icon-label'>Developpeur</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
        </div>
    )
}


export default PostGenProfile
