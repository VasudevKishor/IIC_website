import { useState } from "react";
import Amritalogo from "../images/amrita_logo_red.png";
import IIClogo from "../images/iic-logo.png";
import "../styles/Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div id="logo">
                <a href="https://iic.mic.gov.in/">
                    <img src={IIClogo} alt="Institute Innovation Council" id="IIClogo" />
                </a>
                <span id="logo-line"></span>
                <a href="https://www.amrita.edu/">
                    <img src={Amritalogo} alt="Amrita Vishwa Vidyapeetham" id="Amritalogo" />
                </a>
            </div>

            <div className={`nav ${menuOpen ? "active" : ""}`}>
                <a href="/">Home</a>
                <a href="/genesis">Genesis'25</a>
                <a href="/team">Team</a>
                <a href="#footer-container">Contact Us</a>
            </div>

            {/* Hamburger Menu */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    );
}

export default Header;
