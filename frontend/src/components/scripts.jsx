import React, { useState } from "react";
import axios from "axios";
import "./Scripts.css";

const Scripts = () => {
  const [url, setUrl] = useState("");
  const [output, setOutput] = useState("");
  const [attack, setAttack] = useState("sqli");

  const handleRunScript = async () => {
    if (!url.startsWith("http")) {
      setOutput("❌ Please enter a valid URL starting with http:// or https://");
      return;
    }

    try {
      if (attack === "sqli") {
        const res = await axios.post("http://localhost:5000/run-sqli", { url });
        setOutput(res.data.output || res.data.error);
      } else {
        setOutput("⚠️ This attack type is not implemented yet.");
      }
    } catch (error) {
      setOutput("❌ Failed to run script: " + error.message);
    }
  };

  return (
    <div className="scripts-container">
      <h2>🔍 Web Vulnerability Scanner</h2>
      <p className="intro-text">
        Select a vulnerability type and test your website URL for possible exploits.
      </p>

      <div className="form-group">
        <label htmlFor="attack-select">Select Attack Type:</label>
        <select
          id="attack-select"
          value={attack}
          onChange={(e) => setAttack(e.target.value)}
        >
          <option value="sqli">SQL Injection</option>
          <option value="xss" disabled>
            Cross-Site Scripting (coming soon)
          </option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="url-input">Website URL:</label>
        <input
          id="url-input"
          type="text"
          value={url}
          placeholder="https://example.com"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <button onClick={handleRunScript}>🚀 Run Scan</button>

      <div className="result-section">
        <h3>Scan Output:</h3>
        <pre className="script-output">{output}</pre>
      </div>
    </div>
  );
};

export default Scripts;

