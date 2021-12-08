import React from 'react';

import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

function App({props}) {
  return (
    <div >
        
        <Doughnut className="graph" data={props} />
    </div>
  );
}
export default App;