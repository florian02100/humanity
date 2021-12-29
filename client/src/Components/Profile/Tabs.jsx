import { useState } from "react";
import * as RiIcons from 'react-icons/ri'
import * as VscIcons from 'react-icons/vsc'
import * as FaIcons from 'react-icons/fa'
import * as GoIcons from 'react-icons/go'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'
import SwitchPrivacy from './switchPrivacy'
import CitySelector from './CitySelector'
import TextEditor from './../Thread/TextEditor'
import CardsProfile from './../Cards/CardsProfile'
import CardsPosted from './../Thread/CardsPosted'

import "./profile.css";

function Tabs() {

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  
  return (
    <div className="container">
      <div className="bloc-tabs">
      <button
          className={toggleState === 0 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(0)}
        >
         <FaIcons.FaNewspaper /> Feed
        </button>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         # Général
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         <FaIcons.FaUserFriends /> Mon cercle
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
         <MdIcons.MdStyle /> Style
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
         <GiIcons.GiFist /> Convictions
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          <AiIcons.AiFillHeart /> La vie
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          <GoIcons.GoSettings /> Paramètres
        </button>
      </div>

      <div className="content-tabs">
      <div
          className={toggleState === 0 ? "content  active-content" : "content"}
        >
          <SwitchPrivacy />
          <h2 className="title-highlight">Les posts</h2>
          <p>Les posts du mois</p>
          <div className="tagSearch-feed-profile">
            
          </div>
          <br />
          <div className="best-line">
            <CardsPosted />
          </div>
          <br />
        </div>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <SwitchPrivacy />
          <h2 className="title-highlight">Biographie</h2>
          <div className="text-edition"><textarea className="textarea-profile"></textarea></div>
          <br />
          <h2 className="title-highlight">Où habites-tu ? </h2>
          <CitySelector />
          <br />
          <h2 className="title-highlight">Emploi</h2>
          <h3>Que voulais-tu faire en étant petit ?</h3>
          <div className="text-edition"><textarea className="textarea-profile"></textarea></div>
          <br />
          <h3>Que voudrais tu faire dans l'avenir ?</h3>
          <div className="text-edition"><textarea className="textarea-profile"></textarea></div>
          <br />
          <h2 className="title-highlight">Genre</h2>
          
          <br />
          <h2 className="title-highlight">Situation amoureuse</h2>
          <div className="text-edition"><textarea className="textarea-profile"></textarea></div>
          <br />
          <h2 className="title-highlight">Tes passions</h2>
          <h3>Quels sont tes passions ? </h3>

          <br />
          <h3>Partage nous tes réalisations </h3>
          <p>
            Image
          </p>
          <input type="file" />
          <p>
            Audio
          </p>
          <input type="file" />
          <p>
            Vidéo
          </p>
          <input type="file" />
          <br /> 
          <h3>Pourquoi avoir choisi cet art ?</h3>
            <div className="text-edition"></div>
          <br />
          <h3>Quels sont tes centres d'intérêts ?</h3>

          <br />
          <h3>Veux-tu nous raconter quelque chose de plus ?  </h3>
          <div className="text-edition"></div>  
          <br />
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <SwitchPrivacy />
          <h2 className="title-highlight">Les bests</h2>
          <p>Ils ont accès à la totalité du profil</p>
          <div className="best-line">
            <CardsProfile />
            <CardsProfile />
            <CardsProfile />
          </div>
          <br />
          <h2 className="title-highlight">Les connaissances</h2>
          <p>Ils ont accès aux informations générales,aux photos et vidéos et à la rubrique styles et cultures.</p>
          <div className="connaissances-line">
            <CardsProfile />
            <CardsProfile />
            <CardsProfile />
          </div>
          <br />
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <SwitchPrivacy />
          <h2 className="title-highlight">Quels vêtements aimes-tu porter ?</h2>
            
          <br />
          <h2 className="title-highlight">As-tu des tatouages ?</h2>
            <div className="text-edition"><textarea className="textarea-profile"></textarea></div>  
          <br />
          <h2 className="title-highlight">As-tu des piercings ?</h2>
              
          <br />
          <h2 className="title-highlight">Aimerais-tu changer de style dans l'avenir ?</h2>
          <div className="text-edition"><textarea className="textarea-profile"></textarea></div>  
          <br />
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <SwitchPrivacy />
          <h2 className="title-highlight">Politique</h2>
            
            <div className="text-edition"><textarea className="textarea-profile"></textarea></div>  
          <br />
          <h2 className="title-highlight">Religieuse</h2>
            
            <div className="text-edition"><textarea className="textarea-profile"></textarea></div>  
          <br />
          <h2 className="title-highlight">Morale</h2>
            
            <div className="text-edition"><textarea className="textarea-profile"></textarea></div>  
          <br />
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <SwitchPrivacy />
          <h2 className="title-highlight">Quels message aimerais-tu partager avec la communauté ?</h2>
            <div className="text-edition"><textarea className="textarea-profile"></textarea></div>  
          <br />
          <h2 className="title-highlight">Quels moments de ta vie aimerais-tu nous partager ?</h2>
            <div className="text-edition"><textarea className="textarea-profile"></textarea></div>  
          <br />
          <h2 className="title-highlight">Quels voyages as-tu fait ?</h2>
             
          <h2 className="title-highlight">Quelles ont été tes plus belles rencontres ?</h2>
            <div className="text-edition"><textarea className="textarea-profile"></textarea></div>  
          <br />
          <h2 className="title-highlight">Quel est ta plus grande fierté ?</h2>
            <div className="text-edition"><textarea className="textarea-profile"></textarea></div>  
          <br />
          <h2 className="title-highlight">Quel est ton prochain défi ?</h2>
            <div className="text-edition"><textarea className="textarea-profile"></textarea></div>  
          <br />
        </div>
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <SwitchPrivacy />
          <h2 className="title-highlight">Couleur de fond</h2>
          <input type="color" id="colorWell" /> Couleur de fond
          <br />
          <h2 className="title-highlight">Photo de profil</h2>
          <input type="file" />
          <br />
          <h2 className="title-highlight">Adresse mail</h2>
          <input type="text" id="colorWell" placeholder='john.doe@identity.io' />
          <br />
          <h2 className="title-highlight">Téléphone</h2>
          <input type="text" id="colorWell" placeholder='06.xx.xx.xx.xx' />
          <br />
          <h2 className="title-highlight">Website</h2>
          <input type="text" id="colorWell" placeholder='http://' />
          <br />
          <h2 className="title-highlight">Protection des données</h2>
          <SwitchPrivacy />
          <br />
          <h2 className="title-highlight"> <FaIcons.FaFacebookSquare /> Facebook</h2>
          <input type="text" id="colorWell" placeholder='' />
          <br />
          <h2 className="title-highlight"> <FaIcons.FaYoutubeSquare /> Youtube</h2>
          <input type="text" id="colorWell" placeholder='' />
          <br />
          <h2 className="title-highlight"> <FaIcons.FaInstagramSquare /> Instagram</h2>
          <input type="text" id="colorWell" placeholder='' />
          <br />
          <h2 className="title-highlight"> <FaIcons.FaLinkedin /> Linkedin</h2>
          <input type="text" id="colorWell" placeholder='' />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Tabs;