import React from "react";
import "../styles/Convenors.css";
import PrashantSir from "../images/PrashantSir.jpg";
import ArunKumar from "../images/ArunKumar.jpg";
import DrAdarshS from "../images/DrAdarshS.jpg";
import ramaguru from "../images/ramaguru.jpg";

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
                        <h1 className="ph1">Prashant S Nair</h1>
                        <h2 className="conh2">President - IIC &nbsp; | &nbsp; Vice-Chairman - IQAC</h2>
                    </div>
                </div>
                <hr className="divide" />
                <div className="convenor-section right">
                    <div className="convenor-image">
                        <img src={ArunKumar} alt="arunkumar sir" />
                    </div>
                    <div className="convenor-content">
                        <h1 className="ph1">Dr. Arun Kumar C.</h1>
                        <h2 className="conh2">Convenor - IIC &nbsp; | &nbsp; Assistant Professor - CSE</h2>
                    </div>
                </div>
                <hr className="divide" />
                <div className="convenor-section">
                    <div className="convenor-image">
                        <img src={DrAdarshS} alt="adarsh sir" />
                    </div>

                    <div className="convenor-content">
                        <h1 className="ph1">Dr. Adarsh S.</h1>
                        <h2 className="conh2">Faculty of Students Welfare &nbsp;</h2>
                    </div>
                </div>
                <hr className="divide" />
                <div className="convenor-section right">
                    <div className="convenor-image">
                        <img src={ramaguru} alt="ramaguru sir" />
                    </div>
                    <div className="convenor-content">
                        <h1 className="ph1">Ramaguru Radhakrishnan</h1>
                        <h2 className="conh2">Convenor - ATL Sarthi Project Showcase
                            &nbsp; | &nbsp; Assistant Professor - TIFAC-CORE in Cyber Security
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Convenors;


