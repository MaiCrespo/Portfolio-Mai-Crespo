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
    <div className="portfolio-page">
      <div className="content-width-container">
        {/* Navigation Pill */}
        <nav className="floating-nav-pill">
          <div className="nav-links">
            <span className="nav-item" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="nav-sep">|</span>
            <span className="nav-item active">Works</span>
            <span className="nav-sep">|</span>
            <span className="nav-item">About Me</span>
          </div>
          <img src={whiteLogo} className="logo-pill" alt="logo" />
        </nav>

        {/* Main Selection Area */}
        <main className="selection-main-pill">
          <div className="mat-background">
            <img src={tarotMat} className="rotating-mat" alt="" />
          </div>

          <h1 className="instruction-text">Choose One</h1>

          <div className="tarot-fan-layout">
            <div
              className="tarot-card card-left"
              onClick={() => navigate("/got-it")}
            >
              <img src={cardUIUX} alt="UI/UX Design" />
            </div>
            <div className="tarot-card card-center">
              <img src={cardGraphic} alt="Graphic Design" />
            </div>
            <div className="tarot-card card-right">
              <img src={cardIllustrations} alt="Illustrations" />
            </div>
          </div>
        </main>

        {/* Footer Pill */}
        <footer className="floating-footer-pill">
          <h2 className="footer-title">Don't be a stranger!</h2>
          <div className="footer-links">
            <span>Email</span>
            <span className="nav-sep">|</span>
            <span>LinkedIn</span>
            <span className="nav-sep">|</span>
            <span>Instagram</span>
          </div>
          <button className="pill-button">MY RESUME</button>
        </footer>
      </div>
    </div>
  );
}

export default Cardselection;
