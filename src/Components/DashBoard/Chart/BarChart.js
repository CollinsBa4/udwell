import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const data = {
   
  datasets: [
    {
      
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
     
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
function App() {
  return (
    <>
  
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
    </>
  );
}
export default App;