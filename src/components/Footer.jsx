import React from "react";
import '../styles/Footer.css';
import Amritalogo from "../images/amrita-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer >
        <div id="footer-container">
            <div id="footer-left">
                <img src={Amritalogo} alt="Amrita Vishwa Vidyapeetham" id="iic-footer-Amrita-logo"/>
            </div>
    
            <div id="footer-middle">
                
                <h3>REACH OUT TO US!</h3>
                <p>Feel free to reach out to us if any queries</p>
                <a href="mailto:outreach.iic@cb.amrita.edu">outreach.iic@cb.amrita.edu</a>
            </div>
    
            <div id="footer-right">
                <h3>OUR ADDRESS</h3>
                <p>Amrita Vishwa Vidyapeetham, Amritanagar</p>
                <p>Coimbatore - 641 112, Tamil Nadu, India</p>
            </div>
        </div>
    
        <div id="footer-bottom">
            <div id="social-icons">
                <a href="https://www.instagram.com/iic.amrita"><FontAwesomeIcon icon={faInstagram} className="icon"  /></a>
                <a href="https://www.linkedin.com/in/iic-amrita-463913351/"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
            </div>
        </div>
    </footer>
    );
  }
  
  export default Footer;
