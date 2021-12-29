import React, { useState } from 'react';
import Popup from './../Popup/Popup';
import TagInput from './../TagInput/TagInput';
import TextEdit from './../Thread/TextEditor';
import './Post.css'
import * as RiIcons from 'react-icons/ri'
import * as VscIcons from 'react-icons/vsc'

function Post() {

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    return (
        <div className="nav-post">
                <h5>Poster</h5>
                <hr className="hr-cards"/>
                <div className="menu-item-post">
                <input type="button" className="button-post-popup" value="Partage quelque chose ..." onClick={togglePopup} />
                    {isOpen && <Popup className="popup-window"
                    content={<>
                    <TextEdit />
                    </>}
                    handleClose={togglePopup}
                    />}
                </div>
        </div>
    )
}


export default Post
