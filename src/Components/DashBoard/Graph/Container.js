import React from 'react'
import '../DashBoard.css'
import Doughnut from'./Graph'
import { data1,data2 } from   './ChartData'
import Line from '../Chart/Chart'
export default function Container() {
    return (
    <>
        <div className="chart-container">
        <span className="board-container">
                 <span className="head">
                    <button className="btn1"><i className="fa fa-money"></i></button>
                    <span className="title">
                        <span className="name">Total Sales</span>
                        <span className="value">+985.56</span>
                    </span>
                 </span>
            <span className="board">
                
                <Doughnut className="chart" props={data1}/>
                <span>
                    <p>$2595</p>
                    <p className="value">Invoiced</p>

                </span>
            </span>
        </span>
            <span className="line-graph">
             <Line className="linear"/>
            </span>
        </div>

        <div className="chart-container">
             <span className="line-graph">
                <Line className="linear"/>
             </span>
               <span className="board-container">

                 <span className="head">
                   <button className="btn2"><i className="fa fa-user"></i></button>
                  <span className="title">
                        <span className="name">User Boarding</span>
                        <span className="value">Q3 Goal:8,000 User</span>
                    </span>
                 </span>
                 <span className="board">
                     <Doughnut className="chart" props={data2}/>
                   <span>
                    <p>2452</p>
                    <p className="value">ONBOARDER</p>
                   </span>
                 </span>
              </span>
        </div>
    </>
    )
}
