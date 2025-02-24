import Amritalogo from "../images/Amrita-logo.svg";
import IIClogo from "../images/iic-logo.png";
import { Link } from "react-router";
import "../styles/Header.css";

function Header() {
    return (
        <header>
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
                <Link to={"/"}>Home</Link>
                <Link to={"#"}>Genesis'25</Link>
                <Link to={"/team"}>Team</Link>
                <Link to={"#"}>Contact Us</Link>
            </div>
        </header>
    );
}

export default Header;
