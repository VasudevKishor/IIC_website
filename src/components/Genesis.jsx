import Countdown from "./Countdown";
import back from "../images/arrow.svg";
import iicLogo from "../images/iic-logo-notext.png";
import genesisLogo from "../images/genesis-logo-removebg-notext.png";
import amritaEmblem from "../images/amrita-emblem.svg";
import "../styles/Genesis.css";

function Genesis() {
    return (
        <>
            <header className="gen-header">
                <div className="back">
                    <img
                        src={back}
                        alt="back arrow"
                        className="arrow"
                        width="auto"
                        height="15"
                    ></img>
                    Back
                </div>
                <center className="genesis-title">
                    <img src={iicLogo} alt="" width="auto" height="15" />
                    GENESIS
                </center>
                <div className="amrita-emblem-container">
                    <img src={amritaEmblem} alt="" className="amrita-emblem" />
                </div>
            </header>
            <div className="bottom">
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
            </div>
        </>
    );
}

export default Genesis;
