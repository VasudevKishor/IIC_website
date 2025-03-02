import React from "react";
import Ignite from "../images/ignite.jpg";
import "../styles/AboutGenesis.css";

function AboutGenesis() {
  return (
    <div className="about-genesis-container">
      {/* Left Section */}
      <div className="left-section">
        <img src={Ignite} alt="Ignite Event" />
      </div>
      
      {/* Right Section */}
      <div className="right-section">
        <h1>About GENESIS</h1>
        <p>
          Genesis 2025 is a three-day event conducted by Institution’s
          Innovation Council, an initiative by the Ministry of Education to
          foster innovation and start-up culture in universities. This event
          serves as a celebration of ideas and innovation, giving students
          direct access to investors, mentors, and thought leaders. Participate
          in our flagship event, Exodus, a competition focused on pitching your
          best ideas and adapting to business scenarios. Expand your
          entrepreneurship knowledge by attending our workshops on
          Prototype/Process Development and Design, and Business Model Canvas.
          The ATAL Sarthi Project Showcase is also a part of Genesis’25, which
          will be a one-day exhibition designed to encourage young innovators
          to showcase their creative solutions in STEM, sustainability,
          entrepreneurship, and social impact.
        </p>
        <div className="genesis-buttons">
          <a href="#exodus"><button>EVENTS</button></a>
          <a href="#workshop"><button>WORKSHOPS</button></a>
        </div>
      </div>
    </div>
  );
}

export default AboutGenesis;
