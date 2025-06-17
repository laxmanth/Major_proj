import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Meet the Team</h1>
      <div className="team-grid">
        <div className="team-member">
          <h2>Laxmanth Reddy</h2>
          <p>Cybersecurity Lead</p>
        </div>
        <div className="team-member">
          <h2>Satvik Reddy</h2>
          <p>Risk Analyst & OWASP Researcher</p>
        </div>
        <div className="team-member">
          <h2>Ruthvik</h2>
          <p>Vulnerability Engineer</p>
        </div>
      </div>
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To provide a simple, educational, and practical platform that enables users to assess and understand common web vulnerabilities through OWASP-based calculations and script-based detection. We strive to spread cybersecurity awareness among students and early developers.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
