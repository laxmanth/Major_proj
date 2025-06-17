// import React, { useState } from "react";
// import axios from "axios";
// import "./SQLInjection.css";

// const SQLInjection = () => {
//   const [url, setUrl] = useState("");
//   const [result, setResult] = useState("");

//   const handleRun = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/run-sqli", { url });
//       setResult(res.data.output || res.data.error);
//     } catch (err) {
//       setResult("Something went wrong: " + err.message);
//     }
//   };

//   return (
//     <div className="sql-injection-container">
//       <h2>SQL Injection Scanner</h2>
//       <p>
//         SQL Injection is a code injection technique that might destroy your database. Learn more from OWASP.
//       </p>
//       <input
//         type="text"
//         placeholder="Enter URL to test"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//       />
//       <button onClick={handleRun}>Run SQLi Test</button>
//       <pre className="sqli-output">{result}</pre>
//     </div>
//   );
// };

// export default SQLInjection;


// import React, { useState } from 'react';
// import './SQLInjection.css';

// const SQLInjection = () => {
//   const [url, setUrl] = useState('');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setResult(null);

//     try {
//       const response = await fetch('http://localhost:5000/run-sqli', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ url }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Failed to scan URL');
//       }

//       setResult(data.output.includes('VULNERABLE') ? 'VULNERABLE' : 'NOT VULNERABLE');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="sql-container">
//       <div className="sql-header">
//         <h1>SQL Injection Scanner</h1>
//         <p>Test websites for SQL injection vulnerabilities</p>
//       </div>

//       <div className="sql-content">
//         <form onSubmit={handleSubmit} className="sql-form">
//           <div className="form-group">
//             <label htmlFor="url">Website URL</label>
//             <input
//               type="text"
//               id="url"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//               placeholder="https://example.com"
//               required
//             />
//             <small className="form-hint">
//               Enter the full URL (include http:// or https://)
//             </small>
//           </div>
          
//           <button type="submit" disabled={loading} className="scan-button">
//             {loading ? 'Scanning...' : 'Scan for SQL Injection'}
//           </button>
//         </form>

//         {loading && (
//           <div className="loading-indicator">
//             <div className="spinner"></div>
//             <p>Scanning website, please wait...</p>
//           </div>
//         )}

//         {error && (
//           <div className="error-message">
//             <p>Error: {error}</p>
//           </div>
//         )}

//         {result && (
//           <div className={`result-box ${result === 'VULNERABLE' ? 'vulnerable' : 'safe'}`}>
//             <h3>Scan Result:</h3>
//             <p className="result-text">{result}</p>
//             {result === 'VULNERABLE' ? (
//               <div className="recommendation">
//                 <h4>Recommendations:</h4>
//                 <ul>
//                   <li>Use parameterized queries or prepared statements</li>
//                   <li>Implement proper input validation</li>
//                   <li>Apply the principle of least privilege to database accounts</li>
//                   <li>Consider using an ORM framework</li>
//                 </ul>
//               </div>
//             ) : (
//               <p className="safe-message">No SQL injection vulnerabilities detected.</p>
//             )}
//           </div>
//         )}
//       </div>

//       <div className="sql-info">
//         <h3>About SQL Injection</h3>
//         <p>
//           SQL injection is a code injection technique that might destroy your database.
//           It is one of the most common web hacking techniques. This scanner tests for
//           both error-based and logic-based SQL injection vulnerabilities.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SQLInjection;

import React, { useState } from 'react';
import './SQLInjection.css';

const SQLInjection = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('http://localhost:5000/run-sqli', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || `Server error: ${response.status}`);
      }

      if (!data.output) {
        throw new Error("No scan results received");
      }

      const output = data.output.toUpperCase();
      if (output.includes('ERROR')) {
        throw new Error(output);
      }

      setResult({
        status: output.includes('VULNERABLE') ? 'VULNERABLE' : 'SAFE',
        message: output
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sql-container">
      <div className="sql-header">
        <h1>SQL Injection Scanner</h1>
        <p>Test websites for SQL injection vulnerabilities</p>
      </div>

      <div className="sql-content">
        <form onSubmit={handleSubmit} className="sql-form">
          <div className="form-group">
            <label htmlFor="url">Website URL</label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              required
              pattern="https?://.+"
            />
            <small className="form-hint">
              Must start with http:// or https://
            </small>
          </div>
          
          <button type="submit" disabled={loading} className="scan-button">
            {loading ? (
              <>
                <span className="spinner"></span>
                Scanning...
              </>
            ) : 'Scan Website'}
          </button>
        </form>

        {error && (
          <div className="error-message">
            <h3>Error Occurred</h3>
            <p>{error}</p>
            <button 
              onClick={() => setError(null)} 
              className="retry-button"
            >
              Try Again
            </button>
          </div>
        )}

        {result && (
          <div className={`result-box ${result.status === 'VULNERABLE' ? 'vulnerable' : 'safe'}`}>
            <h3>Scan Result:</h3>
            <p className="result-text" style={{ color: result.status === 'VULNERABLE' ? '#ff5f56' : '#27c93f' }}>{result.message}</p>
            {result.status === 'VULNERABLE' ? (
              <div className="recommendation">
                <h4>Recommended Fixes:</h4>
                <ul>
                  <li>Use parameterized queries/prepared statements</li>
                  <li>Implement strict input validation</li>
                  <li>Apply proper error handling</li>
                  <li>Use web application firewall (WAF)</li>
                </ul>
              </div>
            ) : (
              <p className="safe-message">
                No SQL injection vulnerabilities detected.
              </p>
            )}
          </div>
        )}
      </div>

      <div className="sql-info">
        <h3>Testing Notes</h3>
        <p>
          For accurate results, test against pages with form inputs. 
          Modern sites like WhatsApp/Facebook will show false positives.
        </p>
        <div className="test-sites">
          <h4>Test with these vulnerable sites:</h4>
          <ul>
            <li>http://testphp.vulnweb.com</li>
            <li>http://demo.testfire.net</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SQLInjection;