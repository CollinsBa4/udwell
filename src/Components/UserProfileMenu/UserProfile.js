import React  from 'react'
import './UserProfile.css'
import  {link,user} from './User'
import ProfileItem from './ProfileItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCamera} from '@fortawesome/free-solid-svg-icons'

export default function UserProfile() {
     
    return (
        <div className="Sidebar ">
            <div className="profile-container">
                <span className="sp">
                <img className="profile-icon" id="dp" src={link.img} alt="User"/>
                    <FontAwesomeIcon className="camIcon" icon = {faCamera}/>
                </span>
            </div>
            <div className="pcontainer2">
            <p className="name">{link.name}</p>
                <p className="type">Home Buyer</p>
            </div>    
            <button class="btn btn-primary btn-sm edit">Edit Profile</button>
            <div className= "profile-menu">           
                  {
                 user.map((u) => {
                    return <ProfileItem props={u}/>
                 })
              

            }
            </div>

            
            <div className="link-container">
                <span>Profile Link</span> 
               <div className="input-container">
                <input id="link" type="text" value={link.url}/>
                <button type="button" >
                <FontAwesomeIcon className="i" icon={link.icon} />
                </button>
               </div>
            </div>
        </div>
    )
}
