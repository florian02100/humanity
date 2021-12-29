import React,{useState,useEffect} from 'react'
import './TagInput.css'
import * as MdIcons from 'react-icons/md'

function TagInput(props) {

    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");

    useEffect( () => {
        addItemInit();
    }, []);

    const [itemTag, setItemTag] = useState([]);
    
    const fetchTag = async () => {
        const data = await fetch('/all-tag');
        const items = await data.json();
        setItemTag(items);
        console.log('items : ',items);
    };
  
    const addItemInit = event => {
        console.log(props.value);
        //To update tag when it's init
        let data = [];

        if(props.value){

            props.value.map(item => (
                data = [...data,
                    {
                    id: items.length,
                    name: item
                }]
            ))

            setItems(data)
        }
            
        };
    
    const addItem = event => {
        if(event.key === 'Enter'){
            event.preventDefault();
            console.log(items);
           setItems([
                ...items,
                {
                id: items.length,
                name: itemName
                }
            ]);
            setItemName("");
        }
    };
    const tagChange = event => {

        setItemName(event.target.value);
        resSearch(event);

    }

    const resSearch = async(event) => {

        const data = await fetch('/searchTag', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                in:event.target.value
            })
        })


        const ItmGeneral = await data.json();
        console.log('itm general : '+ItmGeneral);

        setItemTag(ItmGeneral);

    }
    const remItem = event =>{
        //Permet de supprimer un item 
    }

    return (
        <div>
            <ul className="tag-area" >
                {items.map(item => (
                <li className="tag" key={item.id}> { <input type="hidden" name={props.name} value={item.name} />  } {item.name} <button className="close"><MdIcons.MdClose /></button></li>
                ))}
            </ul>
            <input
            className='tag-input-text'
            name="item"
            type="text"
            value={itemName}
            onChange={tagChange} 
            onKeyPress={addItem} />

            <ul className="tag-area" >
                {
                itemTag.map(item => (
                    <li className="tag" style={{backgroundColor: item.color }}><img className="tagIconImg" src={item.icon}/>{item.tag}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default TagInput
