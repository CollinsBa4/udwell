
import { Chart, registerables } from 'chart.js'

import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2'
Chart.register(...registerables)
 
 
 
 

function BarChart() {
  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: ".",
        data: [3, 2, 1, 4,3,2,3],
        backgroundColor: "#FF8433"
      }
    ]
  };

  const options = {
    responsive: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: false,
            borderDash: [2, 2],
            zeroLineColor: "blue"
          },
          categoryPercentage: 0.7,
          barPercentage: 0.9,
          ticks: {
            beginAtZero: false
          }
        }
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false,
            zeroLineColor: "transparent"
          },
          ticks: {
            beginAtZero: false
          }
        }
      ]
    }
  };
  return (
    <>    
      <Bar width="200" height="100" data={data} options={options} />
    </>
  );
}

export default BarChart