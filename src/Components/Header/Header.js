 import React from "react";
import "./Header.css"
import InputSearch from './TagInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
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
         <button id="button2">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="none" viewBox="0 0 24 18">
  <path fill="#1A1A1A" fill-rule="evenodd" d="M13.5 18a1.5 1.5 0 010-3h9a1.5 1.5 0 010 3h-9zm-12-7.5a1.5 1.5 0 010-3h21a1.5 1.5 0 010 3h-21zm6-7.5a1.5 1.5 0 010-3h15a1.5 1.5 0 010 3h-15z" clip-rule="evenodd"/>
</svg>

         </button>

        </nav>
    </header>
  );
}
        