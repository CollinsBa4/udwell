import React from 'react'
import './Footer.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'
export default function Footer() {
    return (
        
<Router>
<footer class="footer">
  	 <div class="container">
  	 	<div class="row">
           <div class="footer-col">
  	 			 <p className="pmedia">Counter Delivery, Carters Beach<br/>
                   PostCentre, Westport
                    </p>

                
  	 		</div>
           <div class="footer-col">
  	 			<h4>About</h4>
  	 			<ul> 
				   <Link to="/company" ><li><a href="/">Company</a></li></Link>
				   <Link to="/team" ><li><a href="/">Team</a></li></Link>
				   <Link to="/careers" ><li><a href="/">Careers</a></li></Link>
				   <Link to="/blog" ><li><a href="/">Blog</a></li></Link>
  	 			</ul>
  	 		</div>
  	 		 
  	 		<div class="footer-col">
  	 			<h4>Support</h4>
  	 			<ul>
  	 				<Link to="/help" ><li><a href="/">Help Center</a></li></Link>
  	 				<Link to="/cancel" ><li><a href="/">Cancellation Options</a></li></Link>
  	 				<Link to="/support" ><li><a href="/">Neighbourhood Support</a></li></Link>
  	 				<Link to="/trust" ><li><a href="/">Trust and Safety</a></li></Link>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Address</h4>
  	 			 <p>
                    Counter Delivery, Carters Beach<br/>
                   PostCentre, Westport
                </p>
                   <div class="social">
  	 				<a className="f" href="http://www.facebook.com"><i class="fa fa-facebook icon"></i></a>
  	 				<a className="ig" href="http://www.instagram.com"><i class=" fab fa-instagram"></i></a>
  	 				<a className="f" href="http://www.twitter.com"><i class="fa fa-twitter icon"></i></a>
  	 			</div>
  	 		</div>
  	 	 
  	 	</div>
        <div className="allrights">
            Udwell, LLC. All rights reserved. 
            <ul className="priv">
         		 <Link to="/terms"> <li><a href="/">Terms and Conditions</a> </li></Link>
            </ul>
            <ul className="priv">
          		 <Link to="/privacy"><li><a href="/">Privacy Policy</a> </li></Link>
            </ul>

        </div>
  	 </div>
  </footer>
 </Router>

)
}
