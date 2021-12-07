 import React from "react";
import "./Header.css"
import InputSearch from './TagInput'
export default function Header() {
 
  return (
    <header className="Header">
        <nav className="Nav">
         <div className="div-1">
            {/* <input type= "text" placeholder="Add more" /> */}
            
             <InputSearch placeholder="Add more"/>
            <button id="button1" type="submit"><i className="fa fa-search"></i></button>
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
        