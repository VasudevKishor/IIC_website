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
import Subhashini from "../images/IIC/DSC_8734.jpg"
import shruthi from "/Users/vasudevkishor/Documents/IIC/WebIIC/IIC_website/src/images/PHOTO-2025-03-06-13-27-31.jpg"
import shaun from "../images/IIC/DSC_8853.jpg"
import deepak from "../images/IIC/PHOTO-2025-02-26-22-39-01.jpg"
import hemu from "../images/IIC/profile (2).jpg"
import roshni from "../images/IIC/IMG-20250306-WA0038.jpg"
import shakthi from "../images/IIC/IMG_20250306_143415.jpg"
import preethi from "../images/IIC/IMG_20250306_143440.jpg"
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
      { name: "Deepak Kumar S", role: "Head", image: deepak }
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
      { name: "Aakash Sriram", role: "Head", image: Aakash },
      { name: "Dhamini Manoj", role: "Co-Head", image: Dhamini }
    ]
  },
  {
    title: "Logistics",
    members: [
      { name: "Hemadhri P C", role: "Head", image: hemu },
      { name: "Mokitha Sakthi Rajapandiyan", role: "Co-Head", image: shakthi },
      { name: "Preethi Kannan", role: "Co-Head", image: preethi },
      { name: "Roshini A", role: "Co-Head", image: roshni }
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
      { name: "Shaun Joseph Sunny", role: "Head", image: shaun }
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
