import Amritalogo from "../images/Amrita-logo.svg";
import IIClogo from "../images/iic-logo.png";
import { Link } from "react-router";
import "../styles/GenesisNavbar.css";

export default function GenesisNavbar() {
    return (
        <nav className="genesis-navbar">
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
            <div className="genesis-navlinks">
                <Link to={"/"}>Home</Link>
                <a href={"#genesis"}>Genesis'25</a>
                <a href={"#exodus"}>Events(Exodus)</a>
                <a href={"#fair"}>Fair</a>
                <a href={"#workshop"}>Workshops</a>
            </div>
        </nav>
    );
}