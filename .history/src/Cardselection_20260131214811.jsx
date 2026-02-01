import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cardselection.css";

// Assets - Matching your specific file names
import whiteLogo from "./assets/Head@300x.png";
import tarotMat from "./assets/misc/tarot mat.avif";
import cardUIUX from "./assets/Card - UI-UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustrations from "./assets/Card - Illustrations.png";

function Cardselection() {
  const navigate = useNavigate();

  return (
    <div className="outer-canvas">
      <div className="inner-frame">
        {/* Navigation - Inside the Orange Border */}
        <nav className="pill-nav">
          <div className="nav-links">
            <span className="nav-item" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="nav-sep">|</span>
            <span className="nav-item active">Works</span>
            <span className="nav-sep">|</span>
            <span className="nav-item">About Me</span>
          </div>
          <img src={whiteLogo} className="frame-logo" alt="logo" />
        </nav>

        {/* Selection Area with Rotating Mat */}
        <div className="selection-content">
          <div className="mat-container">
            <img
              src={tarotMat}
              className="rotating-tarot-mat"
              alt="tarot mat"
            />
          </div>

          <h1 className="selection-header">Choose One</h1>

          <div className="tarot-grid">
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

        {/* Footer - Inside the Orange Border */}
        <footer className="frame-footer">
          <h2 className="footer-greet">Don't be a stranger!</h2>
          <div className="footer-socials">
            <span>Email</span>
            <span className="nav-sep">|</span>
            <span>LinkedIn</span>
            <span className="nav-sep">|</span>
            <span>Instagram</span>
          </div>
          <button className="resume-btn">MY RESUME</button>
        </footer>
      </div>
    </div>
  );
}

export default Cardselection;
