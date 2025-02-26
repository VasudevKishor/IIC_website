import Countdown from "./Countdown";
import arrow from "../images/arrow.svg";
import iicLogo from "../images/iic-logo-notext.png";
import genesisLogo from "../images/genesis-logo-truly-transparent-cropped.png";
import amritaEmblem from "../images/amrita-emblem.svg";
import AboutGenesis from "./AboutGenesis";
import "../styles/Genesis.css";
import "../styles/Workshops.css";
import "../styles/Exodus.css";
import "../styles/Fair.css";
import Convenors from "./Convenors";
import Exodus from "./Exodus"
import Fair from "./Fair"
import Workshops from "./Workshops"
import Footer from "./Footer";

function Genesis() {
    return (
        <div className="genesis-bg">
            <title>Genesis</title>
            <div className="genesis-bg">
            <header className="gen-header">
                <div className="back">
                    <img
                        src={arrow}
                        alt="back arrow"
                        className="arrow"
                        width="auto"
                        height="15"
                    ></img>
                    <a href="/" className="back-link">
                        Back
                    </a>
                </div>
                <center className="genesis-title">
                    <img
                        src={iicLogo}
                        alt=""
                        className="iic-logo"
                    />
                    GENESIS
                </center>
                <div className="amrita-emblem-container">
                    <img src={amritaEmblem} alt="" className="amrita-emblem" />
                </div>
            </header>
            <div className="bottom">
                <div className="left">
                    <img src={genesisLogo} className="genesis-logo" />
                </div>
                <div className="right">
                    <div className="gen-reg-container">
                        <div className="genesis">Genesis '25</div>
                        <div className="register">
                            <a>Register Now</a>
                            <img src={arrow} className="reg-arrow" />
                        </div>
                    </div>
                    <div className="countdown">
                        <Countdown />
                    </div>
                </div>
            </div>
            </div>
            <AboutGenesis />
            <Convenors />
            {/* THE EXODUS PART */}
            <div className="parallaxbg">
            <Exodus/>
            <Fair/>
            <Workshops/>
            </div>
            <Footer />
            
        </div>
    );
}

export default Genesis;
