import React from 'react'
import Cardsvote from './../Components/Cards/Cards_vote'

function Votes() {
    return (
        <div className="Votes">
            <div className="home-content-title">
                <h1> L'assemblée numérique  </h1>
            </div>
            <div className="home-content">
                <Cardsvote />
            </div>
            <div className="home-content">
                <Cardsvote />
            </div>
            <div className="home-content">
                <Cardsvote />
            </div>
        </div>
    )
}

export default Votes
