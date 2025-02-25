import Amritalogo from "../images/Amrita-logo.svg";
import IIClogo from "../images/iic-logo.png";
import { Link } from "react-router";
import "../styles/Header.css";

function Header() {
    return (
        <header className="header">
            <div id="logo">
                <img
                    src={IIClogo}
                    alt="Institute Innovation Council"
                    id="IIClogo"
                />
                <span id="logo-line"></span>
                <img
                    src={Amritalogo}
                    alt="Amrita Vishwa Vidyapeetham"
                    id="Amritalogo"
                />
            </div>
            <div className="nav">
                <a href="/">Home</a>
                <a href="/genesis">Genesis'25</a>
                <a href="/team">Team</a>
                <a href="#footer">Contact Us</a>
            </div>
        </header>
    );
}

export default Header;
