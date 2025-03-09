import { useState, useEffect } from "react";
import Amritalogo from "../images/amrita_logo_red.png";
import IIClogo from "../images/iic-logo.png";
import "../styles/Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const isMobile = screenWidth < 768;

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

            {/* Hamburger Menu */}
            {isMobile && (
                <div
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
            <nav className={`nav ${isMobile ? (menuOpen ? "visible" : "hidden") : ""}`}>
                <a href="/">Home</a>
                <a href="/genesis">Genesis'25</a>
                <a href="/team">Team</a>
                <a href="#footer-container">Contact Us</a>
            </nav>
        </header>
    );
}

export default Header;
