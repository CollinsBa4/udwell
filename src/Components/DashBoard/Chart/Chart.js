import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
export const dataA = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: '.',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#FF8433',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [6,4,5,8,7,4,6]
    }
  ],
  options :{
    
    chartArea: {
      backgroundColor: 'rgba(255, 242, 234, 0.4)'
  },
    plugins: {
      legend: {
        display: false
      }
    }
    ,
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
      }
    }
  }
  
};

export const dataB = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: '.',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#348373',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [6,4,5,8,7,4,6],
      options :{
        chartArea: {
          backgroundColor: 'rgba(255, 242, 234, 0.4)'
      },
        plugins: {
          legend: {
            display: false
          }
        }
        ,
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
              autoSkip: false,
              maxRotation: 90,
              minRotation: 90
            }
          }
        }
      }
    }
  ],
 
  
};




export function LineChart({props}) {
  return (
    <div>
        <Line height= "100" data = {props} />
    </div>
  );
}
 