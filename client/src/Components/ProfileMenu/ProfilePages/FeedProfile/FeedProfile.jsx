import React,{useState} from 'react'
import './FeedProfile.css'
import * as MdIcons from 'react-icons/md'
import TextInputEditable from '../../InputEditable/InputEditable'
import { FeedProfileData } from './FeedProfileData';
import SwitchPrivacy from './../../../Profile/switchPrivacy'
import CardsPosted from './../../../Thread/CardsPosted'

function FeedProfile() {
    //Condition ? true : false
    return (
        <div className="FeedProfile-content">
            <h3># FeedProfile</h3>
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
    )
}

export default FeedProfile
