 import React from "react";
import "./Header.css"
import InputSearch from './TagInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'
import {Link,BrowserRouter as Router} from 'react-router-dom'

export default function Header() {
 
  return (
    <header className="Header">
        <nav className="Nav">
         <div className="div-1">  
             <InputSearch placeholder="Add more"/>
            <button id="button1" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
         </div>
         <div className="div-2">
      <Router>
          <Link to="/udwell"><a>Udwell Now</a></Link>
          <Link to="/sellaproperty"><a>Sell a property</a></Link>

          
        </Router>
      
         </div>
         <button id="button2"><FontAwesomeIcon icon={faBars} /></button>

        </nav>
    </header>
  );
}
        