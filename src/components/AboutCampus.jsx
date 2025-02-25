import React from "react";
import "../styles/AboutCampus.css";

function AboutCampus() {
  return (
    <div className="about-campus">
      <div className="about-content">
        <h1>ABOUT AMRITA VISHWA VIDYAPEETHAM</h1>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className="yellow-line"
          viewBox="0 0 100 4"
          preserveAspectRatio="none"
        >
          <rect width="40" height="0.5" fill="#FFC107" />
        </svg>
        <div className="about-text">
        <p>
        Amrita Vishwa Vidyapeetham is a multi-disciplinary, research-intensive, private university, educating a vibrant student population of over 24,000 by 1700+ strong faculty. Accredited with the highest possible ‘A++’ grade by NAAC, 
        Amrita offers more than 250 UG, PG, and Ph.D. programs in Engineering, Management, and Medical Sciences including Ayurveda, Life Sciences, Physical Sciences, Agriculture Sciences, Arts & Humanities, and Social & Behavioral Sciences. </p><p>
        With its extensive network of nine campuses spread across Amaravati, Amritapuri, Bengaluru, Chennai, Coimbatore, Kochi, Mysuru and NCR Delhi (Faridabad), Amrita Vishwa Vidyapeetham stands as one of India’s preeminent private educational institutions.
         Encompassing an expansive area of over 1200 acres, these campuses offer an impressive built-up space of more than 100 lakh square feet. Renowned for its commitment to academic excellence, Amrita University consistently ranks among the top-tier private universities in the nation, solidifying its reputation as a beacon of quality education.
        </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCampus;
