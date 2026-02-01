import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cardselection.css";

// Assets
import whiteLogo from "./assets/Head@300x.png";
import tarotMat from "./assets/misc/tarot mat.avif";
import cardUIUX from "./assets/Card - UI-UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustrations from "./assets/Card - Illustrations.png";

function Cardselection() {
  const navigate = useNavigate();

  return (
    <div className="portfolio-outer-wrapper">
      {/* 1. THE THIN ORANGE OUTER BORDER */}
      <div className="orange-outer-border">
        {/* 2. NAVIGATION BAR */}
        <nav className="top-nav-bar">
          <div className="nav-links">
            <span className="nav-text" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="nav-separator">|</span>
            <span className="nav-text active">Works</span>
            <span className="nav-separator">|</span>
            <span className="nav-text">About Me</span>
          </div>
          <img src={whiteLogo} className="logo-icon" alt="logo" />
        </nav>

        {/* 3. INNER GRADIENT CONTENT AREA */}
        <div className="main-content-canvas">
          {/* ROTATING MAT BACKGROUND */}
          <div className="tarot-mat-container">
            <img src={tarotMat} className="mat-spin" alt="" />
          </div>

          <h1 className="choose-title">Choose One</h1>

          <div className="cards-row">
            <div
              className="tarot-card-item"
              onClick={() => navigate("/got-it")}
            >
              <img src={cardUIUX} alt="UI/UX Design" />
            </div>
            <div className="tarot-card-item">
              <img src={cardGraphic} alt="Graphic Design" />
            </div>
            <div className="tarot-card-item">
              <img src={cardIllustrations} alt="Illustrations" />
            </div>
          </div>
        </div>

        {/* 4. FOOTER */}
        <footer className="bottom-footer-bar">
          <h2 className="footer-callout">Don't be a stranger!</h2>
          <div className="footer-social-links">
            <span>Email</span>
            <span className="nav-separator">|</span>
            <span>LinkedIn</span>
            <span className="nav-separator">|</span>
            <span>Instagram</span>
          </div>
          <button className="resume-download-btn">MY RESUME</button>
        </footer>
      </div>
    </div>
  );
}

export default Cardselection;
