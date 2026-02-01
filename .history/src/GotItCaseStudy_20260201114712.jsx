import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./GotItCaseStudy.css";

// Assets
import whiteLogo from "./assets/Head@300x.png";
import fullImage from "./assets/UI-UX/GotIt/GotItContent.png";

function GotItCaseStudy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-layout">
      {/* Gradient Orbs Background */}
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
      </div>

      {/* Navigation */}
      <nav className="nav-pill">
        <div className="nav-links">
          <span onClick={() => navigate("/")} className="nav-item">
            Home
          </span>
          <span className="nav-sep">|</span>
          <span className="nav-item active">Works</span>
          <span className="nav-sep">|</span>
          <span className="nav-item">About Me</span>
        </div>
        <img src={whiteLogo} className="pill-logo" alt="logo" />
      </nav>

      {/* Case Study Content */}
      <main className="case-study-scroller">
        <img
          src={fullImage}
          className="full-content-img"
          alt="Got It Case Study"
        />
      </main>

      {/* Footer */}
      <footer className="footer-pill">
        <h2 className="footer-cta">Don't be a stranger!</h2>
        <button className="resume-btn">MY RESUME</button>
      </footer>
    </div>
  );
}

export default GotItCaseStudy;
