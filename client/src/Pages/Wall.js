import React from 'react'
import Cards from './../Components/Cards/Cards'

function Wall() {
    return (
        <div className="Wall">
            <div className="home-content-title">
                <h1> Un mot pour l'humanité ...</h1>
            </div>
            <div className="home-content">
                <Cards />
            </div>
            <div className="home-content">
                <Cards />
            </div>
            <div className="home-content">
                <Cards />
            </div>
            <div className="home-content">
                <Cards />
            </div>
        </div>
    )
}

export default Wall
