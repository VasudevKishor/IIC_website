import React from "react";
import '../styles/Footer.css';
import Amritalogo from "../images/amrita-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer id="footer">
        <div id="footer-container">
            <div id="footer-left">
                <img src={Amritalogo} alt="Amrita Vishwa Vidyapeetham" id="iic-footer-Amrita-logo"/>
            </div>
    
            <div id="footer-middle">
                
                <h3>REACH OUT TO US!</h3>
                <p>Feel free to reach out to us if any queries</p>
                <a href="mailto:chair.iic@cb.amrita.edu">chair.iic@cb.amrita.edu</a>
            </div>
    
            <div id="footer-right">
                <h3>Our Address</h3>
                <p>Amrita Vishwa Vidyapeetham, Amritanagar</p>
                <p>Coimbatore - 641 112, Tamil Nadu, India</p>
            </div>
        </div>
    
        <div id="footer-bottom">
            <div id="social-icons">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <FontAwesomeIcon icon={faInstagram} className="icon" />
                <FontAwesomeIcon icon={faTwitter} className="icon" />
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                <FontAwesomeIcon icon={faYoutube} className="icon" />
            </div>
        </div>
    </footer>
    );
  }
  
  export default Footer;
