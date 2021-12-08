import React from 'react'
import '../DashBoard.css'
import {ProgressItem,ProgressItem2} from './ProgressItem'
import {progress1,progress2,progress3} from  './ProgressData'
export default function Container() {
    return (
        <div className="progress-container">
           <ProgressItem props={progress1}/>
            <ProgressItem2 props={progress2}/>
            <ProgressItem props={progress3}/>
        </div>
    )
}
