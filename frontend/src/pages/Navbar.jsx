import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Risk Detector</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/calculator">Risk Calculator</Link>
        <Link to="/scripts">Scripts</Link>
      </div>
    </nav>
  );
};

export default Navbar;
