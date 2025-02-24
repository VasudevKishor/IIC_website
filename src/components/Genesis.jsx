import Countdown from "./Countdown";
import back from "../images/arrow.svg";
import iicLogo from "../images/iic-logo-notext.png";
import genesisLogo from "../images/genesis-logo-removebg-notext.png";

function Genesis() {
    return (
        <>
            <header>
                <div className="back">
                    <img src={back} alt="back arrow"></img>
                    Back
                </div>
                <div className="genesis-title">
                    <img src={iicLogo} alt="" />
                    GENESIS
                </div>
            </header>
            <div className="left">
                <img src={genesisLogo} alt="" />
            </div>
            <div className="right">
                <div className="genesis">
                    <h1>GENESIS'25</h1>
                    <a>Register</a>
                    <div className="countdown">
                        <Countdown />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Genesis;
