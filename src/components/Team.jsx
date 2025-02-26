import React from "react";
import TeamCard from "./TeamCard"
import "../styles/Team.css";
import "../styles/TeamCard.css"
import Header from "./Header";
import Footer from "./Footer";
import Prashant from "../images/PrashantSir.jpg";
import Arun from "../images/ArunKumar.jpg";
import ramaguru from "../images/ramaguru.jpg";
import adarsh from "../images/DrAdarshS.jpg";
const data = [
  {
    title: "Convenors",
    members: [
      { name: "Dr. Prashant R Nair", role: "Convenor", image: Prashant },
      { name: "Dr. Arun Kumar C", role: "Convenor", image: Arun },
      { name: "Dr. Adarsh S", role: "Convenor", image: adarsh },
      { name: "Mr. Ramaguru Radhakrishnan", role: "Convenor", image: ramaguru }
    ]
  },
  {
    title: "Chairs",
    members: [{ name: "Adithya Anish Nair", role: "Chair", image: "" }]
  },
  {
    title: "Vice Chairs",
    members: [
      { name: "Ramraj S", role: "Vice Chair", image: "" },
      { name: "Sanyam Bhardwaj", role: "Vice Chair", image: "" }
    ]
  }
];

const Team = () => {
  return (
    <div>
    <Header />
    <div className="team-container">
      <div className="team-header">
        <h1>Our Team</h1>
        <p>Meet the passionate individuals behind our team</p>
      </div>

      {data.map((section, idx) => (
        <div key={idx} className="team-section">
          <h2>{section.title}</h2>
          <div className={`team-grid ${section.members.length === 1 ? "grid-one" : section.members.length % 2 === 0 ? "grid-two" : "grid-three"}`}>
            {section.members.map((member, index) => (
              <TeamCard name={member.name} position={member.role} profile={member.image} />
            ))}
          </div>
        </div>
      ))}
      
    </div>
    <Footer />
    </div>
  );
};

export default Team;
