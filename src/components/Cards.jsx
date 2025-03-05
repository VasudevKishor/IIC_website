import React from "react";
import "../styles/Cards.css";

const Cards = () => {
  return (
    <div className="card-container">
      <div className="info-card">
        <div className="card-header">Institute Innovation Council (IIC)</div>
        <div className="card-content">&nbsp; &nbsp; In the year 2018, the Ministry of Education (MoE) through MoE’s Innovation Cell (MIC) launched the Institution’s Innovation Council (IIC) program in collaboration with AICTE for Higher Educational Institutions (HEIs) to systematically foster the culture of innovation and start-up ecosystem in education institutions. Primarily, IICs’ role is to engage large number of faculty, students and staff in various innovation and entrepreneurship related activities such as ideation, Problem solving, Proof of Concept development, Design Thinking, IPR, project handling and management at Pre-incubation/Incubation stage, etc., so that innovation and entrepreneurship ecosystem gets established and stabilized in HEIs. The IIC model is designed to address the existing challenges/issues in HEIs such as less numbers, occasional and unplanned</div>
      </div>
      <div className="info-card">
        <div className="card-header">Goals</div>
        <div className="card-content">
        <ul>
        <li>The IIC encourages staff, instructors, and students to get involved in initiatives that support entrepreneurship and innovation.</li>
        <li>By offering guidance and assistance, we assist instructors and students in creating profitable enterprises.</li>
        <li>We aid organisations in getting ready for rankings determined by their accomplishments in innovation.</li>
        <li>We aid pupils in improving their technological cognition.</li>
        <li>Students are encouraged to engage in activities that foster the development of their entrepreneurial skills.</li>
    </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
