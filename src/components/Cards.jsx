import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/Cards.css";

const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // Start from below
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Cards = () => {
  return (
    <div className="card-container">
      <motion.div 
        className="info-card"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover animation
      >
        <div className="card-header">Institute Innovation Council (IIC)</div>
        <div className="card-content">
          In 2018, the Ministry of Education (MoE), through MoE’s Innovation Cell (MIC), launched the Institution’s Innovation Council (IIC) program in collaboration with AICTE. It fosters innovation and entrepreneurship in educational institutions by engaging faculty, students, and staff in activities like problem-solving, proof of concept development, design thinking, IPR, and pre-incubation management.
        </div>
      </motion.div>

      <motion.div 
        className="info-card"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover animation
      >
        <div className="card-header">Goals</div>
        <div className="card-content">
          <ul>
            <li>Encourage students and faculty to participate in innovation and entrepreneurship activities.</li>
            <li>Provide mentorship for transforming ideas into successful startups.</li>
            <li>Support institutions in achieving innovation-based rankings.</li>
            <li>Enhance students' technological awareness.</li>
            <li>Develop entrepreneurial skills among students through hands-on activities.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
