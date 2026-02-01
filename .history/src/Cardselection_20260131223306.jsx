import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GotItCaseStudy.css";

// Assets - Path must match your folder exactly
import whiteLogo from "./assets/Head@300x.png";
import fullCaseStudyImage from "./assets/GotItContent.png";

function GotItCaseStudy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="global-layout-wrapper">
      <nav className="nav-pill">
        <div className="nav-links">
          <span className="nav-item" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="nav-sep">|</span>
          <span className="nav-item active">Works</span>
          <span className="nav-sep">|</span>
          <span className="nav-item">About Me</span>
        </div>
        <img src={whiteLogo} className="pill-logo" alt="logo" />
      </nav>

      <main className="main-content-pill study-scroll-container">
        {/* This image replaces all previous content */}
        <img
          src={fullCaseStudyImage}
          className="full-width-study-img"
          alt="Case Study"
        />
      </main>

      <footer className="footer-pill">
        <h2 className="footer-text">Don't be a stranger!</h2>
        <div className="socials">
          <span>Email</span> <span className="nav-sep">|</span>
          <span>LinkedIn</span> <span className="nav-sep">|</span>
          <span>Instagram</span>
        </div>
        <button className="resume-btn">MY RESUME</button>
      </footer>
    </div>
  );
}

export default GotItCaseStudy;
