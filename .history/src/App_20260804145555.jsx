import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

// Assets
import logo from "./assets/Head@300x.png";
import cardUIUX from "./assets/CardUI-UX.png";
import cardGraphic from "./assets/CardGraphicDesign.png";
import cardIllustrations from "./assets/CardIllustrations.png";

function App() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* ── TOP BAR ── */}
      <header className="landing-header">
        <div className="landing-brand">
          <img src={logo} alt="Mai Crespo logo" className="landing-logo" />
          <h1 className="landing-title">MAI CRESPO</h1>
        </div>
        <p className="landing-bio">
          Hello, I'm a <strong>UI/UX Designer</strong> with a strong background
          in <strong>Illustration and Graphic Design</strong>. Aside from
          problem-solving through tech, I like to draw crazy weird dark things.
        </p>
      </header>

      {/* ── CARD FAN ── */}
      <main className="landing-main">
        <div className="card-fan">
          <div
            className="tarot-card card-left"
            onClick={() => navigate("/uiux-design")}
          >
            <img src={cardUIUX} alt="UI/UX Design" />
          </div>
          <div
            className="tarot-card card-mid"
            onClick={() => navigate("/graphic-design")}
          >
            <img src={cardGraphic} alt="Graphic Design" />
          </div>
          <div
            className="tarot-card card-right"
            onClick={() => navigate("/illustrations")}
          >
            <img src={cardIllustrations} alt="Illustrations" />
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="landing-footer">
        <div className="footer-links">
          <a href="mailto:yomaicrespo@gmail.com" className="footer-link">
            Email
          </a>
          <span className="footer-sep">|</span>
          <a
            href="https://linkedin.com/in/mai-crespo/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <span className="footer-sep">|</span>
          <a
            href="https://instagram.com/heymaicomics/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
        </div>

        <h2 className="footer-about" onClick={() => navigate("/about-me")}>
          ABOUT ME
        </h2>

        <a href="/MaiCrespoResume.pdf" target="_blank" rel="noreferrer">
          <button className="footer-resume-btn">MY RESUME</button>
        </a>
      </footer>
    </div>
  );
}

export default App;
