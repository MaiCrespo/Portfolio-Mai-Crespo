import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cardselection.css";

// Assets
import whiteLogo from "./assets/Head@300x.png";
import tarotMat from "./assets/misc/tarot-mat.avif";
import cardUIUX from "./assets/Card - UI-UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustrations from "./assets/Card - Illustrations.png";

function Cardselection() {
  const navigate = useNavigate();

  return (
    <div className="global-layout-wrapper">
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
        <img src={whiteLogo} className="pill-logo" alt="logo" />
      </nav>

      <main className="main-content-pill selection-main">
        <div className="mat-container">
          <img src={tarotMat} className="spinning-mat" alt="" />
        </div>

        <h1 className="choose-title">Choose One</h1>

        <div className="tarot-fan-layout">
          <div
            className="tarot-card card-left"
            onClick={() => navigate("/got-it")}
          >
            <img src={cardUIUX} alt="UI/UX" />
          </div>
          <div className="tarot-card card-mid">
            <img src={cardGraphic} alt="Graphic" />
          </div>
          <div className="tarot-card card-right">
            <img src={cardIllustrations} alt="Illustrations" />
          </div>
        </div>
      </main>

      <footer className="footer-pill">
        <h2 className="footer-text">Don't be a stranger!</h2>
        <button className="resume-btn">MY RESUME</button>
      </footer>
    </div>
  );
}

export default Cardselection;
