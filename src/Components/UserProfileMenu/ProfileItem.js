import React from 'react'
import './UserProfile.css'
 
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
