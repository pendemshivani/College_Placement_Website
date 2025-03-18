import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="logo-section">
          <img src="/logo.png" alt="Vaagdevi Colleges Logo" className="logo" />
          <span className="college-name">Vaagdevi Colleges</span>
        </div>
        <div className="nav-links">
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </div>
      </nav>

      {/* Main Section */}
      <div className="main-content">
        {/* Left Side: Text & Buttons */}
        <div className="left-section">
          <h1 className="main-title">HireSmart</h1>
          <p className="subtitle">Your Gateway to Smarter Hiring & Career Growth 🚀</p>
          
          {/* Buttons */}
          <div className="auth-buttons">
            <Link to="/register" className="btn register-btn">Get Started</Link>
          </div>
          {/* Bottom Text */}
          <p className="bottom-text">"Bridging Talent & Opportunities with Smarter Hiring Solutions!"</p>
        </div>

        {/* Right Side: Illustration */}
        <div className="right-section">
          <img src="/image.jpg" alt="Hiring Process" className="illustration" />
        </div>
      </div>
    </div>
  );
};

export default Home;
