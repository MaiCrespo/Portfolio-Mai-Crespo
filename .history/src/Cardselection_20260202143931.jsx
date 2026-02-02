import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cardselection.css";

// Assets - Ensure these filenames have NO SPACES to fix Vercel
import whiteLogo from "./assets/Head@300x.png";
import tarotMat from "./assets/misc/tarot-mat.avif";
import cardUIUX from "./assets/CardUI-UX.png";
import cardGraphic from "./assets/CardGraphicDesign.png";
import cardIllustrations from "./assets/CardIllustrations.png";

function Cardselection() {
  const navigate = useNavigate();

  return (
    <div className="global-page-container">
      {/* Gradient Orbs Background */}
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
      </div>

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
        <h3 className="footer-text">Don't be a stranger!</h3>
        <div className="nav-links">
          <a href="mailto:yomaicrespo@gmail.com" className="nav-item">
            Email
          </a>
          <span className="nav-sep">|</span>
          <a
            href="https://www.linkedin.com/in/mai-crespo/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          >
            LinkedIn
          </a>
          <span className="nav-sep">|</span>
          <a
            href="https://www.instagram.com/heymaicomics/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          >
            Instagram
          </a>
        </div>
        <a
          href="/MaiCrespoResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="pill-btn">MY RESUME</button>
        </a>
      </footer>
    </div>
  );
}

export default Cardselection;
