import Amritalogo from "../images/Amrita-logo.svg";
import IIClogo from "../images/iic-logo.png";
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
                <a href="#">Home</a>
                <a href="#">Genesis'25</a>
                <a href="#">Team</a>
                <a href="#">Contact Us</a>
            </div>
        </header>
    );
}

export default Header;
