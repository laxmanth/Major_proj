import React, { useState } from "react";
import axios from "axios";
import "./SecurityScanner.css";

const SecurityScanner = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/scan", { url });
      setResult(res.data.message);
    } catch (err) {
      setResult("Error scanning URL. Please try again.");
    }
  };

  return (
    <div className="scanner-container">
      <h2>Web Vulnerability Scanner</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL to scan"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Scan</button>
      </form>
      {result && <p className="scan-result">{result}</p>}
    </div>
  );
};

export default SecurityScanner;
