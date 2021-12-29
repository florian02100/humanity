import React from 'react'
import Conv from './Conversation'
import Contact from './contacts'
import './tchat.css'

function tchat() {

    return (
        <div className="container-all">
            <Contact />
            <Conv />
        </div>
    )
}

export default tchat
