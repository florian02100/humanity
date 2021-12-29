
import './Feed.css'
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


function Feed() {

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
        <div className="content-nav-feed">
        {
        items.map(item => (
            <div className="map-container">
                    <div className="nav-feed">
                        
                        <div className="header-feed">
                                <img className="photo-profile" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png" />
                                <div className="title-feed">{item.post_profile}</div>
                                <button className="editPost"><BsIcons.BsThreeDots /></button>
                        </div>  
                        <hr />
                        <div className="content-text">
                            <p>
                                {item.post_content}
                            </p>
                        </div>
                        <div className="content-feed"><img className="post-img" src={item.post_media}/></div>
                        <hr />
                        <div className="button-menu-feed">
                            <button className="button-feed"> <GiIcons.GiFist /> Soutenir</button>
                            <button className="button-feed"> <BiIcons.BiCommentDetail /> Commenter</button>
                            <button className="button-feed"> <FaIcons.FaShareAltSquare /> Partager</button>
                        </div>
                        <hr />
                        <div className="Commentary-content">
                            <div className="feed-menu-commentary">
                                <img className="commentary-picture" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png"></img>
                                <div className="commentary">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta justo massa, et laoreet sem dapibus non. Donec mattis maximus magna ultricies eleifend. Quisque cursus dolor eget facilisis dictum. Nullam mauris lacus, ultrices sit amet lacus at, interdum tempus ex. Nullam porta nulla diam, ut consequat magna eleifend at. Sed imperdiet dui at nunc volutpat, a porta libero auctor. Mauris varius purus vitae magna eleifend, vel ullamcorper neque iaculis. Mauris ligula ligula, varius et laoreet at, consequat sit amet nisi. Integer ut sagittis nunc, iaculis egestas orci. Suspendisse eleifend laoreet enim. Nam ullamcorper metus eget arcu pretium, id dignissim justo fringilla. Quisque vitae porta odio.
                                    Aliquam scelerisque porttitor sem, id varius velit luctus a. Vestibulum tincidunt lectus vel consectetur varius. Fusce a laoreet velit. Integer tempus sit amet orci et luctus. Suspendisse consequat et ligula quis vulputate. Maecenas dignissim ipsum vel nulla tristique luctus. In hac habitasse platea dictumst. </p>
                                </div>
                            </div>
                            <div className="button-menu-commentary">
                                    <button className="button-commentary"> <GiIcons.GiFist /> Soutenir</button>
                                    <button className="button-commentary"> <FaIcons.FaReply /> Répondre</button>
                            </div>
                        </div> 
                    </div> 
                </div>
        ))
        }
        </div>
    )
}


export default Feed
