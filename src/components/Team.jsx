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
import ramraj from "../images/ramraj.jpg"
import adithya from "../images/aditya.jpg"
import sanyam from "../images/sanyam.jpeg"
import Thilagan from "../images/IIC/DSC_0031.jpg"
import Parvathy from "../images/IIC/DSC_0052.jpg"
import Dhamini from "../images/IIC/DSC_0134.jpg"
import Vasudev from "../images/IIC/DSC_0166.jpg"
import Neeraj from "../images/IIC/DSC_0185.jpg"
import Aakash from "../images/IIC/DSC_0576.jpg"
import Nair from "../images/IIC/DSC_0600.jpg"
import Ramu from "../images/IIC/DSC_0621.jpg"
import Subhashini from "../images/IIC/DSC_8734.jpg"
import shruthi from "/Users/vasudevkishor/Documents/IIC/WebIIC/IIC_website/src/images/PHOTO-2025-03-06-13-27-31.jpg"
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
    members: [{ name: "Adithya Anish Nair", role: "Chair", image: adithya }]
  },
  {
    title: "Vice Chairs",
    members: [
      { name: "Ramraj S", role: "Vice Chair", image: ramraj },
      { name: "Sanyam Bhardwaj", role: "Vice Chair", image: sanyam }
    ]
  },
  {
    title: "Tech and Design",
    members: [
      { name: "Neeraj Nair", role: "Head", image: Neeraj },
      { name: "Vasudev Kishor", role: "Co-Head", image: Vasudev }
    ]
  },
  {
    title: "PR and Outreach",
    members: [
      { name: "Subhashini Sudhakar", role: "Head", image: Subhashini },
      { name: "Thilagan Iniyavan", role: "Co-Head", image: Thilagan }
    ]
  },
  {
    title: "Fair",
    members: [
      { name: "Deepak Kumar S", role: "Head", image: ramraj }
    ]
  },
  {
    title: "Workshop",
    members: [
      { name: "Shruti Sivakumar", role: "Head", image: shruthi }
    ]
  },
  {
    title: "Exodus",
    members: [
      { name: "Akash Sriram", role: "Head", image: Aakash },
      { name: "Dhamini Manoj", role: "Co-Head", image: Dhamini }
    ]
  },
  {
    title: "Logistics",
    members: [
      { name: "Hemadhri P C", role: "Head", image: ramraj }
    ]
  },
  {
    title: "Hospitality",
    members: [
      { name: "Parvathi S", role: "Head", image: Parvathy }
    ]
  },
  {
    title: "Admin",
    members: [
      { name: "Theerth Krish", role: "Head", image: ramraj }
    ]
  },
  {
    title: "Finance",
    members: [
      { name: "Shaun Joseph Sunny", role: "Head", image: ramraj }
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
