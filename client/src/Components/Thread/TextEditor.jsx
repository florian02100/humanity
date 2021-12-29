import React, { useRef, useState } from 'react';
import * as BsIcons from 'react-icons/bs'
import './TextEditor.css'
import Switch from './switch'
import DropArea from './../DropArea/droparea';
import * as FaIcons from 'react-icons/fa'


function TextEditor() {
    const editorRef = useRef(null);
    const profileName = 'Florian';
    const profileLink = 'Florian02100';
    const fileInputRef = useRef(null);
    const [ContentText, setContentText] = useState('')
    var media = '';
    let newDate = new Date()
    let date = newDate.getDate();

    //+1 car commence à 0 et +1 encore car on expire le post  un mois plus tard
    let month = newDate.getMonth() + 2;

    const [fileDrop,setFile]=useState('');

    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
    
    const onTargetClick = () => {
      console.log('target click');
      fileInputRef.current.click()
    }

    const onFileInputChange = (event) => {
      console.log('file change')
      const { files } = event.target;
      // do something with your files...
    }

    const addFile = event => {
        console.log(event.target.files[0].name);
        setFile(event.target.files[0].name);

    }    

    const addLink = event =>{
      ContentText = setContentText(event.target.value);

      var n = ContentText.split(" ");
      let urlString = n[n.length - 1];

      try {
        let url = new URL(urlString);
        console.log('link : '+url);
      } catch (_) {
        
      }
    }

    return (
      <div className="TextEditorContainer">
        {/*Commentaire JSX */}
        {/*<Editor
          name="post_content"
          apiKey='zh8x4poyoyozk1q0l0tyc9oqw35nlraga7ielethlobk0que'
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | media | image |' +
            'bold italic forecolor backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            add_form_submit_trigger : true
          }}
        />*/}
        <div className="input-container">
          <div name="drag_drop_area" className="drag_drop_area">
            <div className="dropContainer">
                <div className="droparea" >
                <span className="drop-text"> <FaIcons.FaPhotoVideo /> <br />Glisse tes photos et vidéos !</span>
                <input type='file' className="droparea__input" onClick={onTargetClick}/>
            </div>
           {/*} <FileDrop
             onTargetClick={onTargetClick}
              >
              <BsIcons.BsImages /> <br /> <p className="titleDropZone">Fais glisser tes photos et vidéo</p>
      </FileDrop>*/}
            </div>
          </div>
          <div className="text-post-info">
            <div className="profil-info">
              <img src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png"  className="photo-profil"/>
              <div className="profil-text">
                <p>{profileName} <br />
                Punchline du profil ....</p>
              </div>
            </div>

            <form method="POST" action="/addPost" encType="multipart/form-data">
              <input type="text" name="post_content" placeholder="Partage nous quelque chose ... " onChange={addLink} value={ContentText} className="post-text"/>
              <input type="text" name="post_hashtag" placeholder="# theme" className="hashtag-input" />
              <input type="hidden" name="profile" value={profileName} />
              <input type="hidden" name="profile_link" value={profileLink} />
              <input type="hidden" name="comment" value=''/>
              <input onChange={onFileInputChange} ref={fileInputRef} className="hidden" type="file" name="media" />
              <label className="datepost">Date d'expiration : {date +"/"+ month}</label>< br/>
              <div className="label-post">Activer les commentaires <div className="switchPosted"><Switch/></div></div><br />
              <div className="label-post">Visible par tous <div className="switchPosted"><Switch/></div></div>
              <input type="submit" value="Poster" className="button-post-2" />
            </form> 

          </div>
        </div>

      </div>
    );
}

export default TextEditor
