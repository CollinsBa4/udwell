import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import './assets/fonts/AirbnbCereal-Black.ttf';
import './assets/fonts/AirbnbCereal-ExtraBold.ttf';
import './assets/fonts/AirbnbCereal-Bold.ttf';
import './assets/fonts/AirbnbCereal-Book.ttf';
import './assets/fonts/AirbnbCereal-Light.ttf';
import './assets/fonts/AirbnbCereal-Medium.ttf';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';



 

ReactDOM.render(
  <>
  <Router>
      <Routes>
        <Route path='/' component={App}/>
        <Route path='/' component={App}/>
      </Routes>

    </Router>
    <App />
  </>,
  document.getElementById('root')
);

 