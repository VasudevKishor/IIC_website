import React from "react";
import {TeamCard} from "../components/TeamCard"
import "./Team.css";

const data = [
  {
    title: "Convenors",
    members: [
      { name: "Dr. Prashant R Nair", role: "Convenor", image: "" },
      { name: "Dr. Arun Kumar C", role: "Convenor", image: "" },
      { name: "Dr. Adarsh S", role: "Convenor", image: "" },
      { name: "Mr. Ramaguru Radhakrishnan", role: "Convenor", image: "" }
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
    <div className="team-container">
      <div className="team-header">
        <h1>Our Team</h1>
        <p>Meet the passionate individuals behind our team</p>
      </div>

      {data.map((section, idx) => (
        <div key={idx} className="team-section">
          <h2>{section.title}</h2>
          <div className={`team-grid ${section.members.length > 2 ? "grid-three" : "grid-two"}`}>
            {section.members.map((member, index) => (
              <TeamCard name={member.name} position={member.role} profile={member.image} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
