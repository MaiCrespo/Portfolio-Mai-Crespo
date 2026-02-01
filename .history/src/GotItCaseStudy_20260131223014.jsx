import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GotItCaseStudy.css"; // Ensure this imports the global styles

// Assets
import whiteLogo from "./assets/Head@300x.png";
import fullCaseStudyImage from "./assets/GotItContent.png";

function GotItCaseStudy() {
  const navigate = useNavigate();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="global-layout-wrapper">
      {/* Universal Nav */}
      <nav className="nav-pill">
        <div className="nav-links">
          <span className="nav-item" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="nav-sep">|</span>
          <span className="nav-item active" onClick={() => navigate("/works")}>
            Works
          </span>
          <span className="nav-sep">|</span>
          <span className="nav-item">About Me</span>
        </div>
        <img src={whiteLogo} className="logo-pill-icon" alt="logo" />
      </nav>

      {/* Case Study Content Pill */}
      <main className="main-content-pill case-study-scroll">
        <img
          src={fullCaseStudyImage}
          className="case-study-image-full"
          alt="Got It Project Content"
        />
      </main>

      {/* Universal Footer */}
      <footer className="footer-pill">
        <h2 className="footer-headline">Don't be a stranger!</h2>
        <div className="social-links">
          <span>Email</span> <span className="nav-sep">|</span>
          <span>LinkedIn</span> <span className="nav-sep">|</span>
          <span>Instagram</span>
        </div>
        <button className="pill-resume-btn">MY RESUME</button>
      </footer>
    </div>
  );
}

export default GotItCaseStudy;
