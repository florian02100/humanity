import React,{useState,useEffect} from 'react'
import './Explorer.css'

function Explorer() {

    const [itmTag, setitmTag] = useState([])

    useEffect( () => {
        fetchTag();
    }, []);

    const fetchTag = async () => {
        const data = await fetch('/all-tag');
        const items = await data.json();
        setitmTag(items);
    };

    return (
        <div className="Home">
            <div className="home-search-title">
                <h1> Explorer </h1>
            </div>

            <ul className="explorer-content">
            {
                itmTag.map(item => (
                    <li className="title-tag"><h3><img className="tagIconImg" src={item.icon}/>{item.tag}</h3></li>
                ))
            }
            </ul>

        </div>
    )
}

export default Explorer
