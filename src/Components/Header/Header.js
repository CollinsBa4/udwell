 import React from "react";
import "./Header.css"
import InputSearch from './TagInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

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
          <a href="/">Udwell Now</a>
          <a href="/">Sell a property</a>
          <button id="button2"><i className="fa fa-bars"></i></button>
         </div>
        </nav>
    </header>
  );
}
        