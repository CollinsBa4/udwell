import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartBar} from '@fortawesome/free-solid-svg-icons'
import Bar from '../Chart/BarChart'
export  function ProgressItem({props}) {
    return (
    <div className="Item">
        <div className="Progress-top">
            <span className="p1">{props.topleft}</span>
            <span className="p2">{props.topRight}</span>
        </div>
        <div className="Progress-middle">
            <span className="p3">{props.bottomLeft}</span>
            <span className="p5">{props.bottomRight}</span>
        </div>
        <div className="Progress-bottom">
             <progress id="file" value="68" max="100"> 32% </progress>
        </div>
        <div className="Progress-bottom">
            <span className="p4">{props.extra}</span>
       </div>
    </div>
    )
}

export  function ProgressItem2({props}) {
    return (
    <div className="Item2">
        <div className="Progress-top">
            <span className="p1">{props.topleft}</span>
            <span className="p2">{props.topRight}</span>
        </div>
        <div className="Progress-middle">
            <span className="p3">{props.bottomLeft}</span>
            <span className="p6">{props.bottomRight}</span>
             
        </div>
        
         <div className="barImg">
            <Bar  />

         </div>
      
        
    </div>
    )
}
