import Countdown from "./Countdown";
import arrow from "../images/arrow.svg";
import genesisLogo from "../images/genesis-logo-truly-transparent-cropped.png";
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
import GenesisNavbar from "./GenesisNavbar";

function Genesis() {
    return (
        <div className="genesis-bg">
            <GenesisNavbar/>
            <title>Genesis</title>
            <div className="genesis-bg">
            <div className="bottom">
                <div className="left">
                    <img src={genesisLogo} className="genesis-logo" />
                </div>
                <div className="right">
                    <div className="gen-reg-container">
                        <div className="genesis">Genesis '25</div>
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
