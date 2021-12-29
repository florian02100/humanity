import React, {useState} from 'react'
import * as TiIcons from 'react-icons/ti'
import * as CgIcons from 'react-icons/cg'
import './TagSide.css'
import { Link } from 'react-router-dom';
import TagEditor from './../Thread/TagPost'
import * as FaIcons from 'react-icons/fa';

function TagSide() {

    const [sidetag,setSideTag] = useState(false);
    const showSideTag = () => setSideTag(!sidetag);

    return (
        <>
            <div className="sidebarTagPost"> 
                <Link to='#' className='menu-tag'>
                    <img className="icon-navbar" src="/Icons/hashtag.png" onClick={showSideTag}/>
                </Link>
            </div>
                <nav className={sidetag ? 'tag-container-active' : 'tag-container'}>
                    <ul className="tagSide">
                        <li className="element"><CgIcons.CgCloseR onClick={showSideTag}/></li>
                        <li className="element"><TagEditor /></li>
                    </ul>
                </nav>
            
        </>
    )
}

export default TagSide
