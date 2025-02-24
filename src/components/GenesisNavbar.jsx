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
                <Link to={"#"}>Genesis'25</Link>
                <Link to={"#"}>Events(Exodus)</Link>
                <Link to={"#"}>Fair</Link>
                <Link to={"#"}>Workshops</Link>
            </div>
        </nav>
    );
}