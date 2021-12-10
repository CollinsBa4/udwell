import React from 'react'
import './UserProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export default function ProfileItem({props}) {

    return (
        <div className="profile-item">
            <hr />
            <span >{props.name}</span>
            <button className="profile-btn">
                {props.icon}
            </button>
        </div>
    )
}
