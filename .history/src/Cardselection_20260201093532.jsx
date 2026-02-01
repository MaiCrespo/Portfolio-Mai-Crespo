import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cardselection.css";

// Assets - Ensure these filenames have NO SPACES to fix Vercel
import whiteLogo from "./assets/Head@300x.png";
import tarotMat from "./assets/misc/tarot-mat.avif";
import cardUIUX from "./assets/Card - UI-UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustrations from "./assets/Card - Illustrations.png";

function Cardselection() {
  const navigate = useNavigate();

  return (
    <div className="global-page-container">
      {/* Navigation */}
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
        <img src={whiteLogo} className="logo-icon" alt="logo" />
      </nav>

      {/* Main Content Box with Rotating Mat */}
      <main className="content-pill-main">
        <div className="mat-overflow-container">
          <img src={tarotMat} className="rotating-mat-img" alt="" />
        </div>

        <h1 className="main-title">Choose One</h1>

        <div className="tarot-card-fan">
          <div
            className="tarot-card c-left"
            onClick={() => navigate("/got-it")}
          >
            <img src={cardUIUX} alt="UI/UX" />
          </div>
          <div className="tarot-card c-mid">
            <img src={cardGraphic} alt="Graphic" />
          </div>
          <div className="tarot-card c-right">
            <img src={cardIllustrations} alt="Illustrations" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer-pill">
        <h2 className="footer-callout">Don't be a stranger!</h2>
        <div className="footer-socials">
          <span>Email</span> <span className="nav-sep">|</span>
          <span>LinkedIn</span> <span className="nav-sep">|</span>
          <span>Instagram</span>
        </div>
        <button className="resume-btn">MY RESUME</button>
      </footer>
    </div>
  );
}

export default Cardselection;
