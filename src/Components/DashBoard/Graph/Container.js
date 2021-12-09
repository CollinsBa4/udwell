import React from 'react'
import '../DashBoard.css'
import Doughnut from'./Graph'
import { data1,data2 } from   './ChartData'
import {LineChart} from '../Chart/Chart'
import {faMoneyBill,faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {dataA,dataB} from '../Chart/Chart'
export default function Container() {
    return (
    <>
        <div className="chart-container">
        <span className="board-container">
                 <span className="head">
                    <button className="btn1">
                        <FontAwesomeIcon icon={faMoneyBill} />
                    </button>
                    <span className="title">
                        <span className="name">Total Sales</span>
                        <span className="value">+985.56</span>
                    </span>
                    <FontAwesomeIcon className="myLine1" icon={faEllipsisH} />

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
                <span>

                        <> Daily profit</>
                        <FontAwesomeIcon className="myLine1" icon={faEllipsisH} />
                     
                 </span>
             <LineChart id="myLine1" props={dataA} className="linear"/>
            </span>
        </div>

        <div className="chart-container">
             <span className="line-graph">
                 <span>
                     
                        <> Daily acive clients</>
                        <FontAwesomeIcon className="myLine1" icon={faEllipsisH} />
                 </span>
                <LineChart  props={dataB} className="linear"/>
             </span>

               <span className="board-container">

                 <span className="head">
                   <button className="btn2">
                   <FontAwesomeIcon id ="userIcon" icon={faUser} />
                   </button>
                  <span className="title">
                        <span className="name">User OnBoarding</span>
                        <span className="value">Q3 Goal:8,000 User</span>
                    </span>
                    <FontAwesomeIcon className="myLine1" icon={faEllipsisH} />

                 </span>
                 <span className="board">
                     <Doughnut className="chart" props={data2}/>
                   <span>
                    <p>2452</p>
                    <p className="value">ONBOARDED</p>
                   </span>
                 </span>
              </span>
        </div>
    </>
    )
}
