import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cardselection.css";

// Assets - Using your exact file names
import whiteLogo from "./assets/Head@300x.png";
import tarotMat from "./assets/misc/tarot mat.avif";
import cardUIUX from "./assets/Card - UI-UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustrations from "./assets/Card - Illustrations.png";

function Cardselection() {
  const navigate = useNavigate();

  return (
    <div className="selection-page-container">
      {/* 1. EDGE-TO-EDGE NAVIGATION */}
      <nav className="edge-nav">
        <div className="nav-links-wrap">
          <span className="nav-link" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="nav-pipe">|</span>
          <span className="nav-link active">Works</span>
          <span className="nav-pipe">|</span>
          <span className="nav-link">About Me</span>
        </div>
        <img src={whiteLogo} className="logo-right" alt="logo" />
      </nav>

      {/* 2. CENTER CONTENT BOX (With Orange Background showing around it) */}
      <div className="center-content-box">
        {/* THE ROTATING MAT */}
        <div className="mat-layer">
          <img src={tarotMat} className="mat-rotate-animation" alt="" />
        </div>

        <h1 className="choose-title">Choose One</h1>

        <div className="cards-display">
          <div className="card-item" onClick={() => navigate("/got-it")}>
            <img src={cardUIUX} alt="UI/UX Design" />
          </div>
          <div className="card-item">
            <img src={cardGraphic} alt="Graphic Design" />
          </div>
          <div className="card-item">
            <img src={cardIllustrations} alt="Illustrations" />
          </div>
        </div>
      </div>

      {/* 3. EDGE-TO-EDGE FOOTER */}
      <footer className="edge-footer">
        <h2 className="footer-greeting">Don't be a stranger!</h2>
        <div className="footer-links">
          <span>Email</span>
          <span className="nav-pipe">|</span>
          <span>LinkedIn</span>
          <span className="nav-pipe">|</span>
          <span>Instagram</span>
        </div>
        <button className="resume-btn">MY RESUME</button>
      </footer>
    </div>
  );
}

export default Cardselection;
