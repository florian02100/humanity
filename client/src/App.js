import React, {useState , useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
//import { Router } from 'express';
import Navbar from './Components/Navbars/Navbar';
//import { Route, Switch } from 'react-router';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' 
import Home from './Pages/Home'
import Wall from './Pages/Wall'
import Profil from './Pages/Profil'
import Votes from './Pages/Votes'
import Search from './Pages/Search'
import About from './Pages/About'
import Tchat from './Pages/Tchat'
import Login from './Pages/Login'
import Explorer from './Pages/Explorer'
import Subscriptions from './Pages/Subscriptions';
import Welcome from './Pages/Welcome'
import CardMain from './Components/Navbars/CardsMainVote'
import UserProfile from './Pages/UserProfile'
import Dashboard from './Pages/Dashboard'
//import CardsTchat from './Components/Navbars/CardsTchat';
//import SidebarTag from './Components/Navbars/TagSide';

function App() {

  const [UserId, setUserId] = useState('')
  
  useEffect( () => {
    console.log('sessionStorage token app: ',window.sessionStorage.getItem('UID'))
    setUserId(window.sessionStorage.getItem('UID'));
    sessionStorage.removeItem('FID');
}, []);

  return (
    <>
      <Router>
        <Navbar uid={UserId}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Login' exact component={Login} />
          <Route path='/Profil'><Profil/></Route>
          <Route path='/UserProfile'><UserProfile/></Route>
          <Route path='/Wall'> <Wall /></Route>
          <Route path='/Votes' component={Votes} />
          <Route path='/Search' component={Search} />
          <Route path='/About' component={About} />
          <Route path='/Tchat' component={Tchat} />
          <Route path='/Explorer' component={Explorer} />
          <Route path='/Dashboard' component={Dashboard} />
          <Route path="/Subscriptions" component={Subscriptions}/>
          <Route path="/Welcome" component={Welcome}/>
        </Switch>
       {/* <SidebarTag />*/}
      </Router>
    </>
  );
}

export default App;
