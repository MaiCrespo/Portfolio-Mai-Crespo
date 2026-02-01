import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cardselection.css";

// Assets - Matching your exact VS Code filenames
import whiteLogo from "./assets/Head@300x.png";
import tarotMat from "./assets/misc/tarot mat.avif";
import cardUIUX from "./assets/Card - UI-UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustrations from "./assets/Card - Illustrations.png";

function Cardselection() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* This is the Orange Border Frame */}
      <div className="orange-canvas-frame">
        {/* Navigation - Pinned to top of the frame */}
        <nav className="frame-nav">
          <div className="nav-group">
            <span className="nav-link" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="nav-pipe">|</span>
            <span className="nav-link active">Works</span>
            <span className="nav-pipe">|</span>
            <span className="nav-link">About Me</span>
          </div>
          <img src={whiteLogo} className="nav-logo" alt="logo" />
        </nav>

        {/* The Center Selection Area */}
        <main className="selection-area">
          {/* Rotating Tarot Mat Background */}
          <div className="mat-wrapper">
            <img src={tarotMat} className="mat-rotating" alt="" />
          </div>

          <h1 className="choose-title">Choose One</h1>

          <div className="cards-flex">
            <div className="card-wrapper" onClick={() => navigate("/got-it")}>
              <img src={cardUIUX} alt="UI/UX Design" />
            </div>
            <div className="card-wrapper">
              <img src={cardGraphic} alt="Graphic Design" />
            </div>
            <div className="card-wrapper">
              <img src={cardIllustrations} alt="Illustrations" />
            </div>
          </div>
        </main>

        {/* Footer - Pinned to bottom of the frame */}
        <footer className="frame-footer">
          <h2 className="footer-headline">Don't be a stranger!</h2>
          <div className="footer-links">
            <span>Email</span>
            <span className="nav-pipe">|</span>
            <span>LinkedIn</span>
            <span className="nav-pipe">|</span>
            <span>Instagram</span>
          </div>
          <button className="resume-pill">MY RESUME</button>
        </footer>
      </div>
    </div>
  );
}

export default Cardselection;
