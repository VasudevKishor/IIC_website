import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Amritalogo from "../images/amrita-emblem.svg";
import IIClogo from "../images/iic-logo.png";
import "../styles/GenesisNavbar.css";

export default function GenesisNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="genesis-navbar">
            <div id="logo">
                <img
                    src={IIClogo}
                    alt="Institute Innovation Council"
                    id="IIClogoGen"
                />
            </div>

            {/* Hamburger Button */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </div>

            {/* Navigation Links */}
            <div className={`genesis-navlinks ${isOpen ? "open" : ""}`}>
                <Link to={"/"} onClick={() => setIsOpen(false)}>Home</Link>
                <Link to={"/genesis"} onClick={() => setIsOpen(false)}>Genesis'25</Link>
                <a href={"#exodus"} onClick={() => setIsOpen(false)}>Events(Exodus)</a>
                <a href={"#fair"} onClick={() => setIsOpen(false)}>Fair</a>
                <a href={"#workshop"} onClick={() => setIsOpen(false)}>Workshops</a>
            </div>

            <div id="logo">
                <img
                    src={Amritalogo}
                    alt="Amrita Vishwa Vidyapeetham"
                    id="AmritalogoGen"
                />
            </div>
        </nav>
    );
}
