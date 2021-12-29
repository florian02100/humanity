import React,{useState,useEffect} from 'react'
import * as MdIcons from 'react-icons/md'
import './InputEditable.css'

function InputEditable(props) {
    
    const [EditRead,setEditRead] = useState(false)
    const [TextValue,setTextValue] = useState(props.value)


    useEffect( () => {    
        setEditRead(props.editable);
    }, []);

    console.log('profil editable : '+props.editable)

    const changeMode = event =>{
        console.log('change mode')
        if(props.editable){
            document.getElementById(props.name).readOnly = true;
        }else{
            document.getElementById(props.name).readOnly = false;
        }
    }

    const changeText = event => {
        if(props.editable === true){
            setTextValue(event.target.value)
        }else{
            console.log('text non editable !')
        }
    }

    return (
        <div className="content-input">
            <textarea name={props.name} onChange={changeText} className='textarea-bio' placeholder={props.placeholder} value={TextValue} />
            {/*<div className="edit" onClick={changeMode}><MdIcons.MdModeEdit /></div>*/}
        </div>
    )
}

export default InputEditable
