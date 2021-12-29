import React from 'react'
import './Dashboard.css'
function Dashboard() {
    return (
        <div className="Home">
            <div className="home-content-title">
            </div>
            <div className="home-content">
                <div className="Content-tag">
                    <h3> Ajouter un tag </h3>
                    <form className="fromTag" method='POST' action='/add-tag' encType="multipart/form-data">
                        <input name="tagName" type="text" placeholder='hashtag'/>
                        <input name="tagIcon" type="file"/>
                        <input name="tagColor" type="color" placeholder='couleur de fond '/>
                        <input type='submit' value='Ajouter' />
                    </form>

                    <form className="fromEmail" method='POST' action='/sendEmail' encType="multipart/form-data">
                        <input name="emailSended" type="text" placeholder='email'/>
                        <input type='submit' value='Envoyer' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
