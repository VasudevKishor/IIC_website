import { useState } from "react";
import { motion } from "framer-motion";
import Amritalogo from "../images/amrita_logo_red.png";
import IIClogo from "../images/iic-logo.png";
import "../styles/Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="header"
        >
            <div id="logo">
                <a href="https://iic.mic.gov.in/">
                    <motion.img
                        src={IIClogo}
                        alt="Institute Innovation Council"
                        id="IIClogo"
                        whileHover={{ scale: 1.1 }}
                    />
                </a>
                <span id="logo-line"></span>
                <a href="https://www.amrita.edu/">
                    <motion.img
                        src={Amritalogo}
                        alt="Amrita Vishwa Vidyapeetham"
                        id="Amritalogo"
                        whileHover={{ scale: 1.1 }}
                    />
                </a>
            </div>

            {/* Navigation Bar (Always Visible) */}
            <motion.div
                className={`nav ${menuOpen ? "active" : ""}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <a href="/">Home</a>
                <a href="/genesis">Genesis'25</a>
                <a href="/team">Team</a>
                <a href="#footer-container">Contact Us</a>
            </motion.div>

            {/* Animated Hamburger Menu */}
            <motion.div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                whileTap={{ scale: 0.9 }}
            >
                <motion.div animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} />
                <motion.div animate={{ opacity: menuOpen ? 0 : 1 }} />
                <motion.div animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} />
            </motion.div>
        </motion.header>
    );
}

export default Header;
