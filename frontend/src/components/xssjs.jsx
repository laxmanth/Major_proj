import React, { useState } from 'react';
import './XSS.css'; // We'll reuse the same CSS as SQL injection

const XSS = () => {
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
      const response = await fetch('http://localhost:5000/run-xss', {
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

      if (typeof data.vulnerable === 'undefined') {
        throw new Error("Invalid response from server");
      }

      setResult({
        status: data.vulnerable ? 'VULNERABLE' : 'SAFE',
        message: data.vulnerable 
          ? 'XSS vulnerability detected!' 
          : 'No XSS vulnerabilities found',
        payload: data.payload || '',
        response: data.response || ''
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
        <h1>XSS Scanner</h1>
        <p>Test websites for Cross-Site Scripting vulnerabilities</p>
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
            <p className="result-text" style={{ color: result.status === 'VULNERABLE' ? '#ff5f56' : '#27c93f' }}>
              {result.message}
            </p>
            
            {result.status === 'VULNERABLE' && (
              <div className="payload-details">
                <h4>Payload Used:</h4>
                <code>{result.payload}</code>
                {result.response && (
                  <>
                    <h4>Server Response:</h4>
                    <div className="response-preview">
                      {result.response}
                    </div>
                  </>
                )}
              </div>
            )}

            {result.status === 'VULNERABLE' ? (
              <div className="recommendation">
                <h4>Recommended Fixes:</h4>
                <ul>
                  <li>Implement proper output encoding</li>
                  <li>Use Content Security Policy (CSP) headers</li>
                  <li>Sanitize user input before rendering</li>
                  <li>Use modern frameworks that auto-escape content</li>
                </ul>
              </div>
            ) : (
              <p className="safe-message">
                No XSS vulnerabilities detected in forms.
              </p>
            )}
          </div>
        )}
      </div>

      <div className="sql-info">
        <h3>About XSS</h3>
        <p>
          Cross-Site Scripting (XSS) allows attackers to inject malicious scripts into web pages.
          This scanner tests for reflected XSS vulnerabilities by injecting a test script into form inputs.
        </p>
        <div className="test-sites">
          <h4>Test with these vulnerable sites:</h4>
          <ul>
            <li>https://xss-game.appspot.com</li>
            <li>http://testphp.vulnweb.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default XSS;