import Countdown from "./Countdown";
import arrow from "../images/arrow.svg";
import iicLogo from "../images/iic-logo-notext.png";
import genesisLogo from "../images/genesis-logo-truly-transparent-cropped.png";
import amritaEmblem from "../images/amrita-emblem.svg";
import "../styles/Genesis.css";

function Genesis() {
    return (
        <>
            <header className="gen-header">
                <div className="back">
                    <img
                        src={arrow}
                        alt="back arrow"
                        className="arrow"
                        width="auto"
                        height="15"
                    ></img>
                    Back
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


            {/* THE EXODUS PART */}

            <div className="parallax">
                <div className="container">
                    <div className="title">
                        <h1>EXODUS</h1>
                    </div>

                    <div className="description">
                        <p>
                            Exodus is the flagship entrepreneurial competition of campus aimed to provide aspiring founders with a prestigious platform to present their transformative business ideas. This event aims to connect early-stage startups and innovative thinkers with seasoned investors, business leaders, and industry experts. By offering direct access to funding, mentorship, and strategic business support, it enables participants to bring their ideas to fruition, validate their market potential, and accelerate their journey toward building successful ventures. As an Inter/Intra Institutional Business Plan Competition, the best innovators will be recognized and deposited in Amrita Vishwa Vidyapeetham's YURTI Innovation Repository, ensuring continued support and visibility.Additionally, participants will have opportunities for mentorship through Innovation Ambassadors and industry experts, creating long-term value beyond the event.
                        </p>



                    </div>
                </div>
            </div>

        </>
    );
}

export default Genesis;
