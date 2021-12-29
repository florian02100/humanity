import React,{useState} from 'react'
import './droparea.css'
import * as FaIcons from 'react-icons/fa'

function Droparea() {

    const [file,setFile]=useState('');

    const addFile = event => {
        console.log(event.target.value);
        setFile(event.target.value);

    }    
    return (
        <div className="droparea" >
            <span className="drop-text"> <FaIcons.FaPhotoVideo /> <br />Glisse tes photos et vidéos !</span>
            <input type='file' className="droparea__input" onChange={addFile}/>
        </div>
    )
}

export default Droparea
