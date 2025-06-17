// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Scripts.css";

// const attackOptions = [
//   { name: "SQL Injection", route: "/scripts/sql-injection" },
//   { name: "XSS", route: "/scripts/xss" },
//   { name: "Local File Inclusion (LFI)", route: "/scripts/lfi" },
//   { name: "Broken Access Control", route: "/scripts/bac" },
//   { name: "Common Injection", route: "/scripts/common-injection" },
//   { name: "Open Redirect", route: "/scripts/open-redirect" },
//   { name: "Clickjacking", route: "/scripts/clickjacking" },
//   { name: "Security Misconfiguration", route: "/scripts/security-misconfiguration" },
// ];

// const Scripts = () => {
//   const navigate = useNavigate();

//   const handleCardClick = (route) => {
//     navigate(route);
//   };

//   return (
//     <div className="scripts-page">
//       <h1>Select a Vulnerability to Test</h1>
//       <p>Choose a category to scan your web application against specific attacks.</p>
//       <div className="card-grid">
//         {attackOptions.map((option, index) => (
//           <div key={index} className="attack-card" onClick={() => handleCardClick(option.route)}>
//             {option.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Scripts;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ScriptsIntro.css';

const ScriptCard = ({ title, description, color, onClick }) => {
  return (
    <div className="script-card" onClick={onClick} style={{ '--card-accent': color }}>
      <div className="card-content">
        <div className="card-icon-container" style={{ backgroundColor: color }}>
          <div className="card-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white"/>
            </svg>
          </div>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const ScriptsPage = () => {
  const navigate = useNavigate();

  const vulnerabilities = [
    {
      title: "SQL Injection",
      description: "Detect and exploit unsafe database queries",
      color: "#6e45e2",
      path: "/scripts/sql-injection"
    },
    {
      title: "XSS",
      description: "Identify and test client-side script injection",
      color: "#ff5f56",
      path: "/scripts/xss"
    },
    {
      title: "LFI",
      description: "Find and exploit local file inclusion vulnerabilities",
      color: "#27c93f",
      path: "/scripts/lfi"
    },
    {
      title: "Broken Access Control",
      description: "Test for improper authorization checks",
      color: "#9f7aea",
      path: "/scripts/bac"
    },
    {
      title: "Common Injection",
      description: "Identify various injection flaws beyond SQL",
      color: "#ffbd2e",
      path: "/scripts/common-injection"
    },
    {
      title: "Open Redirect",
      description: "Test for unsafe URL redirections",
      color: "#38b2ac",
      path: "/scripts/open-redirect"
    },
    {
      title: "Click Jacking",
      description: "Discover UI redressing vulnerabilities",
      color: "#667eea",
      path: "/scripts/click-jacking"
    },
    {
      title: "Security Misconfiguration",
      description: "Identify insecure default configurations",
      color: "#f687b3",
      path: "/scripts/security-misconfig"
    }
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="scripts-container">
      {/* Header Section */}
      <header className="scripts-header">
        <h1>Vulnerability Testing <span>Scripts</span></h1>
        <p>Select a vulnerability type to explore testing methodologies and scripts</p>
      </header>

      {/* Main Content */}
      <main className="scripts-main">
        <div className="scripts-grid">
          {vulnerabilities.map((vuln, index) => (
            <ScriptCard
              key={index}
              title={vuln.title}
              description={vuln.description}
              color={vuln.color}
              onClick={() => handleCardClick(vuln.path)}
            />
          ))}
        </div>
      </main>

      {/* Info Section */}
      <section className="scripts-info">
        <h2>How to Use These Scripts</h2>
        <div className="info-steps">
          <div className="step">
            <div className="step-number">1</div>
            <p>Select a vulnerability type from the grid above</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>Review the testing methodology and requirements</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>Download or copy the testing scripts</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScriptsPage;