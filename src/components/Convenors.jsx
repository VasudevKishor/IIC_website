import React from "react";
import "../styles/Convenors.css";
import PrashantSir from "../images/PrashantSir.jpg";
import SasanganSir from "../images/SasanganSir.jpg";

const Convenors = () => {
    return (
        <div className="convenors-container">
            <h1 className="convenors-title">OUR CONVENORS</h1>

            <div className="convenors-wrapper">
                <div className="convenor-section">
                    <div className="convenor-image">
                        <img src={PrashantSir} alt="prashant sir" />
                    </div>

                    <div className="convenor-content">
                        <h1 className="ph1">PRASHANT S NAIR</h1>
                    </div>
                </div>
                <hr className="divide" />
                <div className="convenor-section right">
                    <div className="convenor-image">
                        <img src={SasanganSir} alt="sasangan sir" />
                    </div>
                    <div className="convenor-content">
                        <h1 className="ph2">Dr. Sasangan Ramanathan</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Convenors;
