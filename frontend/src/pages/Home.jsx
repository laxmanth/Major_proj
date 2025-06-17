// import React from "react";
// import "./Home.css";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <section className="hero">
//         <h1 className="home-title">Welcome to Risk Detector</h1>
//         <p className="home-description">
//           A cybersecurity tool that helps you identify potential web vulnerabilities and assess risks using OWASP standards.
//         </p>
//         <Link to="/calculator" className="cta-button">Try the Risk Calculator</Link>
//       </section>

//       <section className="features">
//         <h2>🔐 Key Features</h2>
//         <div className="feature-grid">
//           <div className="feature-box">
//             <h3>OWASP Risk Calculator</h3>
//             <p>Score risks based on Threat Agent, Vulnerability, and Impact metrics using OWASP methodology.</p>
//           </div>
//           <div className="feature-box">
//             <h3>Vulnerability Scripts</h3>
//             <p>Run real-time detection scripts for SQL Injection, XSS, and more from the frontend interface.</p>
//           </div>
//           <div className="feature-box">
//             <h3>Educational Content</h3>
//             <p>Learn about web threats, OWASP Top 10, and how to secure your applications.</p>
//           </div>
//         </div>
//       </section>

//       <section className="project-goal">
//         <h2>🎯 Our Goal</h2>
//         <p>
//           Risk Detector is built with the mission to promote cybersecurity awareness through hands-on tools and educational material. Designed especially for students, researchers, and developers.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import SplashCursor from './SplashCursor';
// import './Home.css';

// const VulnerabilityCard = ({ title, description, icon, color }) => {
//   return (
//     <div className="vulnerability-card" style={{ '--card-accent': color }}>
//       <div className="card-header">
//         <div className="card-icon" style={{ backgroundColor: color }}>
//           {icon}
//         </div>
//         <h3>{title}</h3>
//       </div>
//       <div className="card-body">
//         <p>{description}</p>
//       </div>
//       <div className="card-footer">
//         <button className="card-button">Scan for {title}</button>
//       </div>
//       <div className="card-corner" style={{ backgroundColor: color }}></div>
//     </div>
//   );
// };

// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       <SplashCursor 
//         BACK_COLOR={{ r: 0.05, g: 0.02, b: 0.1 }}
//         COLOR_UPDATE_SPEED={15}
//         SPLAT_FORCE={8000}
//       />
      
//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <div className="navbar-brand">VulnScan</div>
//         <div className="navbar-links">
//           <button className="nav-link active" onClick={() => navigate('/')}>Home</button>
//           <button className="nav-link" onClick={() => navigate('/about')}>About</button>
//           <button className="nav-link" onClick={() => navigate('/risk-calculator')}>Risk Calculator</button>
//           <button className="nav-link" onClick={() => navigate('/scripts')}>Scripts</button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Advanced <span className="text-gradient">Vulnerability</span> Detection</h1>
//           <p className="hero-subtitle">
//             Identify and mitigate critical security threats with our comprehensive scanning suite
//           </p>
//           <div className="hero-buttons">
//             <button className="primary-button" onClick={() => navigate('/scripts')}>
//               Explore Scanners
//             </button>
//             <button className="secondary-button" onClick={() => navigate('/risk-calculator')}>
//               Calculate Risk
//             </button>
//           </div>
//         </div>
//         <div className="hero-image">
//           <div className="terminal-window">
//             <div className="terminal-header">
//               <div className="terminal-buttons">
//                 <span className="terminal-btn red"></span>
//                 <span className="terminal-btn yellow"></span>
//                 <span className="terminal-btn green"></span>
//               </div>
//               <div className="terminal-title">vulnscan --detect</div>
//             </div>
//             <div className="terminal-body">
//               <pre>
//                 <code>
//                   <span className="terminal-line">$ Scanning target...</span>
//                   <span className="terminal-line success">✓ SQLi detected (CVE-2023-1234)</span>
//                   <span className="terminal-line warning">! XSS vulnerability found</span>
//                   <span className="terminal-line error">✗ Broken Access Control</span>
//                   <span className="terminal-line">$ Generating report...</span>
//                   <span className="terminal-line">$ Scan complete. 8 vulnerabilities found</span>
//                 </code>
//               </pre>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vulnerability Types Section */}
//       <section className="vulnerabilities-section">
//         <h2>8 Core <span className="text-gradient">Vulnerability</span> Types</h2>
//         <div className="vulnerability-grid">
//           {/* SQL Injection */}
//           <div className="vulnerability-card">
//             <div className="card-icon sql">
//               <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
//             </div>
//             <h3>SQL Injection</h3>
//             <p>Detect unsafe database queries exposing sensitive data</p>
//           </div>
          
//           {/* XSS */}
//           <div className="vulnerability-card">
//             <div className="card-icon xss">
//               <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
//             </div>
//             <h3>Cross-Site Scripting</h3>
//             <p>Identify client-side script injection vulnerabilities</p>
//           </div>
          
//           {/* LFI */}
//           <div className="vulnerability-card">
//             <div className="card-icon lfi">
//               <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
//             </div>
//             <h3>Local File Inclusion</h3>
//             <p>Find insecure file handling exposing server files</p>
//           </div>
          
//           {/* Broken Access Control */}
//           <div className="vulnerability-card">
//             <div className="card-icon bac">
//               <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
//             </div>
//             <h3>Broken Access Control</h3>
//             <p>Detect improper authorization checks</p>
//           </div>
          
//           {/* Common Injection */}
//           <div className="vulnerability-card">
//             <div className="card-icon injection">
//               <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
//             </div>
//             <h3>Common Injection</h3>
//             <p>Identify various injection flaws beyond SQL</p>
//           </div>
          
//           {/* Open Redirect */}
//           <div className="vulnerability-card">
//             <div className="card-icon redirect">
//               <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
//             </div>
//             <h3>Open Redirect</h3>
//             <p>Detect unsafe URL redirections</p>
//           </div>
          
//           {/* Click Jacking */}
//           <div className="vulnerability-card">
//             <div className="card-icon clickjacking">
//               <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
//             </div>
//             <h3>Click Jacking</h3>
//             <p>Find UI redressing vulnerabilities</p>
//           </div>
          
//           {/* Security Misconfiguration */}
//           <div className="vulnerability-card">
//             <div className="card-icon misconfig">
//               <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
//             </div>
//             <h3>Security Misconfiguration</h3>
//             <p>Identify insecure default configurations</p>
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="process-section">
//         <h2>Our <span className="text-gradient">Detection</span> Process</h2>
//         <div className="process-steps">
//           <div className="process-step">
//             <div className="step-number">1</div>
//             <div className="step-content">
//               <h3>Target Analysis</h3>
//               <p>Select specific vulnerability scanner based on target system</p>
//             </div>
//           </div>
//           <div className="process-step">
//             <div className="step-number">2</div>
//             <div className="step-content">
//               <h3>Deep Scanning</h3>
//               <p>Execute comprehensive tests for selected vulnerability types</p>
//             </div>
//           </div>
//           <div className="process-step">
//             <div className="step-number">3</div>
//             <div className="step-content">
//               <h3>Detailed Reporting</h3>
//               <p>Receive prioritized findings with remediation guidance</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="cta-content">
//           <h2>Ready to <span className="text-gradient">Secure</span> Your Systems?</h2>
//           <p>Start scanning for vulnerabilities with our specialized tools today</p>
//           <button className="cta-button" onClick={() => navigate('/scripts')}>
//             Explore Scanners
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-brand">
//             <div className="navbar-brand">VulnScan</div>
//             <p>Comprehensive vulnerability detection for modern web applications</p>
//           </div>
//           <div className="footer-links">
//             <div className="link-group">
//               <h4>Navigation</h4>
//               <button onClick={() => navigate('/')}>Home</button>
//               <button onClick={() => navigate('/about')}>About</button>
//               <button onClick={() => navigate('/risk-calculator')}>Risk Calculator</button>
//               <button onClick={() => navigate('/scripts')}>Scripts</button>
//             </div>
//             <div className="link-group">
//               <h4>Vulnerabilities</h4>
//               <button>SQL Injection</button>
//               <button>XSS</button>
//               <button>LFI</button>
//               <button>Access Control</button>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© 2025 VulnScan. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import SplashCursor from './SplashCursor';
// import './Home.css';

// const VulnerabilityCard = ({ title, description, icon, color }) => {
//   return (
//     <div className="vulnerability-card" style={{ '--card-accent': color }}>
//       <div className="card-header">
//         <div className="card-icon" style={{ backgroundColor: color }}>
//           {icon}
//         </div>
//         <h3>{title}</h3>
//       </div>
//       <div className="card-body">
//         <p>{description}</p>
//       </div>
//       <div className="card-footer">
//         <button className="card-button">Scan for {title}</button>
//       </div>
//       <div className="card-corner" style={{ backgroundColor: color }}></div>
//     </div>
//   );
// };

// const HomePage = () => {
//   const navigate = useNavigate();

//   const vulnerabilities = [
//     {
//       title: "SQL Injection",
//       description: "Detect unsafe database queries exposing sensitive data",
//       icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
//       color: "#6e45e2"
//     },
//     {
//       title: "XSS",
//       description: "Identify client-side script injection vulnerabilities",
//       icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
//       color: "#ff5f56"
//     },
//     {
//       title: "LFI",
//       description: "Find insecure file handling exposing server files",
//       icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
//       color: "#27c93f"
//     },
//     {
//       title: "Broken Access Control",
//       description: "Detect improper authorization checks",
//       icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
//       color: "#9f7aea"
//     },
//     {
//       title: "Common Injection",
//       description: "Identify various injection flaws beyond SQL",
//       icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
//       color: "#ffbd2e"
//     },
//     {
//       title: "Open Redirect",
//       description: "Detect unsafe URL redirections",
//       icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
//       color: "#38b2ac"
//     },
//     {
//       title: "Click Jacking",
//       description: "Find UI redressing vulnerabilities",
//       icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
//       color: "#667eea"
//     },
//     {
//       title: "Security Misconfiguration",
//       description: "Identify insecure default configurations",
//       icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
//       color: "#f687b3"
//     }
//   ];

//   return (
//     <div className="home-container">
//       <SplashCursor 
//         BACK_COLOR={{ r: 0.05, g: 0.02, b: 0.1 }}
//         COLOR_UPDATE_SPEED={15}
//         SPLAT_FORCE={8000}
//       />
      
//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <div className="navbar-brand">VulnScan</div>
//         <div className="navbar-links">
//           <button className="nav-link active" onClick={() => navigate('/')}>Home</button>
//           <button className="nav-link" onClick={() => navigate('/about')}>About</button>
//           <button className="nav-link" onClick={() => navigate('/risk-calculator')}>Risk Calculator</button>
//           <button className="nav-link" onClick={() => navigate('/scripts')}>Scripts</button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Advanced <span className="text-gradient">Vulnerability</span> Detection</h1>
//           <p className="hero-subtitle">
//             Identify and mitigate critical security threats with our comprehensive scanning suite
//           </p>
//           <div className="hero-buttons">
//             <button className="primary-button" onClick={() => navigate('/scripts')}>
//               Explore Scanners
//             </button>
//             <button className="secondary-button" onClick={() => navigate('/risk-calculator')}>
//               Calculate Risk
//             </button>
//           </div>
//         </div>
//         <div className="hero-image">
//           <div className="terminal-window">
//             <div className="terminal-header">
//               <div className="terminal-buttons">
//                 <span className="terminal-btn red"></span>
//                 <span className="terminal-btn yellow"></span>
//                 <span className="terminal-btn green"></span>
//               </div>
//               <div className="terminal-title">vulnscan --detect</div>
//             </div>
//             <div className="terminal-body">
//               <pre>
//                 <code>
//                   <span className="terminal-line">$ Scanning target...</span>
//                   <span className="terminal-line success">✓ SQLi detected (CVE-2023-1234)</span>
//                   <span className="terminal-line warning">! XSS vulnerability found</span>
//                   <span className="terminal-line error">✗ Broken Access Control</span>
//                   <span className="terminal-line">$ Generating report...</span>
//                   <span className="terminal-line">$ Scan complete. 8 vulnerabilities found</span>
//                 </code>
//               </pre>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vulnerability Types Section */}
//       <section className="vulnerabilities-section">
//         <h2>8 Core <span className="text-gradient">Vulnerability</span> Types</h2>
//         <div className="vulnerability-grid">
//           {vulnerabilities.map((vuln, index) => (
//             <VulnerabilityCard
//               key={index}
//               title={vuln.title}
//               description={vuln.description}
//               icon={vuln.icon}
//               color={vuln.color}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="process-section">
//         <h2>Our <span className="text-gradient">Detection</span> Process</h2>
//         <div className="process-steps">
//           <div className="process-step">
//             <div className="step-number">1</div>
//             <div className="step-content">
//               <h3>Target Analysis</h3>
//               <p>Select specific vulnerability scanner based on target system</p>
//             </div>
//           </div>
//           <div className="process-step">
//             <div className="step-number">2</div>
//             <div className="step-content">
//               <h3>Deep Scanning</h3>
//               <p>Execute comprehensive tests for selected vulnerability types</p>
//             </div>
//           </div>
//           <div className="process-step">
//             <div className="step-number">3</div>
//             <div className="step-content">
//               <h3>Detailed Reporting</h3>
//               <p>Receive prioritized findings with remediation guidance</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="cta-content">
//           <h2>Ready to <span className="text-gradient">Secure</span> Your Systems?</h2>
//           <p>Start scanning for vulnerabilities with our specialized tools today</p>
//           <button className="cta-button" onClick={() => navigate('/scripts')}>
//             Explore Scanners
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-brand">
//             <div className="navbar-brand">VulnScan</div>
//             <p>Comprehensive vulnerability detection for modern web applications</p>
//           </div>
//           <div className="footer-links">
//             <div className="link-group">
//               <h4>Navigation</h4>
//               <button onClick={() => navigate('/')}>Home</button>
//               <button onClick={() => navigate('/about')}>About</button>
//               <button onClick={() => navigate('/risk-calculator')}>Risk Calculator</button>
//               <button onClick={() => navigate('/scripts')}>Scripts</button>
//             </div>
//             <div className="link-group">
//               <h4>Vulnerabilities</h4>
//               <button>SQL Injection</button>
//               <button>XSS</button>
//               <button>LFI</button>
//               <button>Access Control</button>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© 2025 VulnScan. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import SplashCursor from './SplashCursor';
import './Home.css';

const VulnerabilityCard = ({ title, description, icon, color }) => {
  return (
    <div className="vulnerability-card" style={{ '--card-accent': color }}>
      <div className="card-header">
        <div className="card-icon" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <button className="card-button">Scan for {title}</button>
      </div>
      <div className="card-corner" style={{ backgroundColor: color }}></div>
    </div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  const vulnerabilities = [
    {
      title: "SQL Injection",
      description: "Detect unsafe database queries exposing sensitive data",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
      color: "#6e45e2"
    },
    {
      title: "XSS",
      description: "Identify client-side script injection vulnerabilities",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
      color: "#ff5f56"
    },
    {
      title: "LFI",
      description: "Find insecure file handling exposing server files",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
      color: "#27c93f"
    },
    {
      title: "Broken Access Control",
      description: "Detect improper authorization checks",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
      color: "#9f7aea"
    },
    {
      title: "Common Injection",
      description: "Identify various injection flaws beyond SQL",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
      color: "#ffbd2e"
    },
    {
      title: "Open Redirect",
      description: "Detect unsafe URL redirections",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
      color: "#38b2ac"
    },
    {
      title: "Click Jacking",
      description: "Find UI redressing vulnerabilities",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
      color: "#667eea"
    },
    {
      title: "Security Misconfiguration",
      description: "Identify insecure default configurations",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
      color: "#f687b3"
    }
  ];

  return (
    <div className="home-container">
      <SplashCursor 
        BACK_COLOR={{ r: 0.05, g: 0.02, b: 0.1 }}
        COLOR_UPDATE_SPEED={15}
        SPLAT_FORCE={8000}
      />
      
      {/* Navigation Bar
      <nav className="navbar">
        <div className="navbar-brand">VulnScan</div>
        <div className="navbar-links">
          <button className="nav-link active" onClick={() => navigate('/')}>Home</button>
          <button className="nav-link" onClick={() => navigate('/about')}>About</button>
          <button className="nav-link" onClick={() => navigate('/calculator')}>Risk Calculator</button>
          <button className="nav-link" onClick={() => navigate('/scripts')}>Scripts</button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Advanced <span className="text-gradient">Vulnerability</span> Detection</h1>
          <p className="hero-subtitle">
            Identify and mitigate critical security threats with our comprehensive scanning suite
          </p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={() => navigate('/scripts')}>
              Explore Scanners
            </button>
            <button className="secondary-button" onClick={() => navigate('/risk-calculator')}>
              Calculate Risk
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-btn red"></span>
                <span className="terminal-btn yellow"></span>
                <span className="terminal-btn green"></span>
              </div>
              <div className="terminal-title">vulnscan --detect</div>
            </div>
            <div className="terminal-body">
              <pre>
                <code>
                  <span className="terminal-line">$ Scanning target...</span>
                  <span className="terminal-line success">✓ SQLi detected (CVE-2023-1234)</span>
                  <span className="terminal-line warning">! XSS vulnerability found</span>
                  <span className="terminal-line error">✗ Broken Access Control</span>
                  <span className="terminal-line">$ Generating report...</span>
                  <span className="terminal-line">$ Scan complete. 8 vulnerabilities found</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Vulnerability Types Section */}
      <section className="vulnerabilities-section">
        <h2>8 Core <span className="text-gradient">Vulnerability</span> Types</h2>
        <div className="vulnerability-grid">
          {vulnerabilities.map((vuln, index) => (
            <VulnerabilityCard
              key={index}
              title={vuln.title}
              description={vuln.description}
              icon={vuln.icon}
              color={vuln.color}
            />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2>Our <span className="text-gradient">Detection</span> Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Target Analysis</h3>
              <p>Select specific vulnerability scanner based on target system</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Deep Scanning</h3>
              <p>Execute comprehensive tests for selected vulnerability types</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Detailed Reporting</h3>
              <p>Receive prioritized findings with remediation guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to <span className="text-gradient">Secure</span> Your Systems?</h2>
          <p>Start scanning for vulnerabilities with our specialized tools today</p>
          <button className="cta-button" onClick={() => navigate('/scripts')}>
            Explore Scanners
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="navbar-brand">VulnScan</div>
            <p>Comprehensive vulnerability detection for modern web applications</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Navigation</h4>
              <button onClick={() => navigate('/')}>Home</button>
              <button onClick={() => navigate('/about')}>About</button>
              <button onClick={() => navigate('/risk-calculator')}>Risk Calculator</button>
              <button onClick={() => navigate('/scripts')}>Scripts</button>
            </div>
            <div className="link-group">
              <h4>Vulnerabilities</h4>
              <button>SQL Injection</button>
              <button>XSS</button>
              <button>LFI</button>
              <button>Access Control</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 VulnScan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;