
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import * as IoIcons from 'react-icons/io'
import './popupNotif.css'

export default () => (
  <Popup trigger={<button className="notif-button"><img className="icon-navbar" src="/Icons/notification.png" /></button>} position="bottom center">
    <ul className="list-notif">
        <li className="notif-content"><img className="img-notif" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png"/><p className="notif-text"> Popup content here !!</p><button className="notif-profile-button">Découvrir</button></li>
        <li className="notif-content"><img className="img-notif" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png"/><p className="notif-text"> Popup content here !!</p><button className="notif-profile-button">Découvrir</button></li>
        <li className="notif-content"><img className="img-notif" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png"/><p className="notif-text"> Popup content here !!</p><button className="notif-profile-button">Découvrir</button></li>
        <li className="notif-content"><img className="img-notif" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png"/><p className="notif-text"> Popup content here !!</p><button className="notif-profile-button">Découvrir</button></li>
        <li className="notif-content"><img className="img-notif" src="https://www.tesseract-solutions.fr/hubfs/website/img/florian.png"/><p className="notif-text"> Popup content here !!</p><button className="notif-profile-button">Découvrir</button></li>
    </ul>
  </Popup>
);