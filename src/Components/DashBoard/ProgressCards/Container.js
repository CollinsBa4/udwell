import React from 'react'
import '../DashBoard.css'
import ProgressItem from './ProgressItem'
import {progress1,progress2,progress3} from  './ProgressData'
export default function Container() {
    return (
        <div className="progress-container">
           <ProgressItem props={progress1}/>
            <ProgressItem props={progress2}/>
            <ProgressItem props={progress3}/>
        </div>
    )
}
