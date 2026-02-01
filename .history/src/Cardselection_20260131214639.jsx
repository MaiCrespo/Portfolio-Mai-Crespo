import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cardselection.css";

// Assets
import whiteLogo from "./assets/Head@300x.png";
import cardOne from "./assets/UIUX_Card.png";
import cardTwo from "./assets/Graphic_Card.png";
import cardThree from "./assets/Illustration_Card.png";
// Added the tarot mat from your misc folder
import tarotMat from "./assets/misc/tarot mat.avif";

function Cardselection() {
  const navigate = useNavigate();

  return (
    <div className="outer-canvas">
      <div className="inner-frame">
        {/* Navigation */}
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

        {/* Selection Area */}
        <div className="selection-content">
          {/* THE ROTATING MAT IS BACK */}
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
              <img src={cardOne} alt="UI/UX" />
            </div>
            <div className="card-item">
              <img src={cardTwo} alt="Graphic Design" />
            </div>
            <div className="card-item">
              <img src={cardThree} alt="Illustrations" />
            </div>
          </div>
        </div>

        {/* Footer */}
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
