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
    <div className="orange-bg-wrapper">
      {/* Navigation Pill */}
      <nav className="floating-nav">
        <div className="nav-links">
          <span className="nav-item" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="nav-sep">|</span>
          <span className="nav-item active">Works</span>
          <span className="nav-sep">|</span>
          <span className="nav-item">About Me</span>
        </div>
        <img src={whiteLogo} className="nav-logo" alt="logo" />
      </nav>

      {/* Main Content Area */}
      <main className="main-selection-container">
        <div className="mat-rotation-layer">
          <img src={tarotMat} className="tarot-mat-img" alt="" />
        </div>

        <h1 className="selection-title">Choose One</h1>

        <div className="tarot-card-grid">
          <div className="card-anchor" onClick={() => navigate("/got-it")}>
            <img src={cardUIUX} alt="UI/UX Design" />
          </div>
          <div className="card-anchor">
            <img src={cardGraphic} alt="Graphic Design" />
          </div>
          <div className="card-anchor">
            <img src={cardIllustrations} alt="Illustrations" />
          </div>
        </div>
      </main>

      {/* Footer Pill */}
      <footer className="floating-footer">
        <h2 className="footer-text">Don't be a stranger!</h2>
        <div className="footer-socials">
          <span>Email</span>
          <span className="nav-sep">|</span>
          <span>LinkedIn</span>
          <span className="nav-sep">|</span>
          <span>Instagram</span>
        </div>
        <button className="resume-button">MY RESUME</button>
      </footer>
    </div>
  );
}

export default Cardselection;
