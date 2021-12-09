
import { Chart, registerables } from 'chart.js'

import React from 'react'
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
      y: {
        ticks: {
          display: false,
        },x: {
          grid: {
            display: false,
          },
        }
      },
      xAxes: [
        {
        
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
         
          ticks: {
            beginAtZero: false
          }
        }
      ]
    }
    ,plugins: {
      legend: {
        display: false
      }
    }
  };
  return (
    <>    
      <Bar  width="190" height="80" data={data} options={options} />
    </>
  );
}

export default BarChart