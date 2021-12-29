import React,{useEffect, useState} from 'react'
import Post from './../Components/Thread/Post'
import Feed from './../Components/Thread/Feed'
import CardsSearch from './../Components/Cards/Cards_Search'


function Search(props) {

    const [ItmSea, setItmSearch] = useState([]);
    const [UID, setUID] = useState('')
    const data = ''

    useEffect( () => {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');
        console.log('app load');
        console.log(id);
        
        fetchItmSearch();
    }, []);
    
    
    const fetchItmSearch = async () => {

        const data = await fetch('/allUser');
        const ItmSearch = await data.json();       
        console.log('User name from : '+ItmSearch[0]._id)
        setItmSearch(ItmSearch)
        

    };

    return (
        <div className="Home">
            <div className="home-search-title">
                <iframe className="animation-search" src="https://embed.lottiefiles.com/animation/27506"></iframe>
                <h1> Recherche </h1>
            </div>
            <div className="home-content">
                <input className="search-bar" type="text" />
            </div>
            <div className="home-content">
                {
                   ItmSea.map((item, index) => {
                    console.log('UID from search : '+item._id+' '+item.name)
                    return (
                        <CardsSearch friendid={item._id} name={item.name} firstname={item.firstname} line={item.punchline} tag={item.passion} />
                    )
                })
                }
            </div>
            <div className="home-content">
            </div>
        </div>
    )
}

export default Search
