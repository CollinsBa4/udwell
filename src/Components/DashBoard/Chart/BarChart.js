
import { Chart, registerables } from 'chart.js'

import React from 'react'
import {Bar} from 'react-chartjs-2'
Chart.register(...registerables)
 
 
 
 

function BarChart() {
  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [3, 2, 1, 4,3,2,3],
        backgroundColor: "#FF8433",
        borderRadius: 2
         
      }
    ]
  };

  const options = {
    responsive: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
        display: false,
      },
        ticks: {
          display: false,
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
      <Bar  width="195" height="50" data={data} options={options} />
    </>
  );
}

export default BarChart