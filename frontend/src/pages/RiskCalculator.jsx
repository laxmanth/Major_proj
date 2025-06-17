import React from "react";
import "./RiskCalculator.css";

const RiskCalculator = () => {
  return (
    <div className="risk-container">
      <h1 className="risk-heading">OWASP Risk Calculator</h1>
      <iframe
        src="./owasp_risk_calculator.html"
        title="OWASP Risk Calculator"
        className="risk-iframe"
      />
    </div>
  );
};

export default RiskCalculator;
