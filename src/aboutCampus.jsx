import React from "react";
import "./AboutCampus.css";
import YellowLine from "./CampusImages/YellowLine.png";

function AboutCampus() {
  return (
    <div className="about-campus">
      <div className="about-content">
        <h1>AMRITA VISHWA VIDYAPEETHAM</h1>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className="yellow-line"
          viewBox="0 0 100 4"
          preserveAspectRatio="none"
        >
          <rect width="40" height="0.5" fill="#FFC107" />
        </svg>
      </div>
    </div>
  );
}

export default AboutCampus;
