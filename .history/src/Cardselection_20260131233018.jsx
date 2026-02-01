import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
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
    <div className="page-layout">
      <nav className="nav-pill">
        <div className="nav-links">
          <span onClick={() => navigate("/")} className="nav-item">
            Home
          </span>
          <span className="nav-sep">|</span>
          <span className="nav-item active">Works</span>
          <span className="nav-sep">|</span>
          <span className="nav-item">About Me</span>
        </div>
        <img src={whiteLogo} className="pill-logo" alt="logo" />
      </nav>

      <main className="selection-container">
        <img src={tarotMat} className="spinning-mat" alt="" />
        <h1 className="selection-title">Choose One</h1>
        <div className="card-fan-wrapper">
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

      <footer className="footer-pill">
        <h2 className="footer-cta">Don't be a stranger!</h2>
        <button className="resume-btn">MY RESUME</button>
      </footer>
    </div>
  );
}

export default Cardselection;
