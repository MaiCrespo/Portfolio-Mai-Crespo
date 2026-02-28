import React from "react";
import { useNavigate } from "react-router-dom";
import "./RebelYourStyle.css";
import whiteLogo from "./assets/Head@300x.png";
import yungblud from "./assets/GraphicDesign/Yungblud.jpg";
import yungblud2 from "./assets/GraphicDesign/Yungblud2.jpg";

const RebelYourStyle = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Background Orbs */}
      <div className="orb-canvas">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="page-layout">
        {/* Navigation */}
        <nav className="nav-pill">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <div className="nav-links">
            <span className="nav-item" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="nav-sep">|</span>
            <span
              className="nav-item active"
              onClick={() => navigate("/pick-a-card")}
            >
              Works
            </span>
            <span className="nav-sep">|</span>
            <span className="nav-item" onClick={() => navigate("/about-me")}>
              About Me
            </span>
          </div>
          <img src={whiteLogo} className="nav-logo" alt="logo" />
        </nav>

        {/* Main Content Area */}
        <div className="scrollable-content">
          {/* Next Project Button - Top Right */}
          <div className="next-project-top">
            <button className="next-project-btn">NEXT PROJECT →</button>
          </div>

          <header className="project-hero">
            <h1 className="project-main-title">Rebel Your Style</h1>
            <p className="project-subtitle">YUNGBLUD Concert Poster</p>
          </header>

          {/* About Section */}
          <section className="about-section">
            <h3 className="section-label">About the Project</h3>
            <p className="project-description">
              Rebel Your Style is a concert poster design for YUNGBLUD,
              capturing the raw energy and rebellious spirit of his music. The
              design embraces bold typography, vibrant punk aesthetics, and
              dynamic compositions that reflect the artist's unapologetic
              attitude and connection with youth culture. This project explores
              how visual identity can amplify an artist's message and create an
              immersive experience that resonates with their fanbase. Every
              element was carefully crafted to embody the chaos, passion, and
              authenticity that YUNGBLUD represents.
            </p>
          </section>

          {/* Tools Used */}
          <section className="tools-section">
            <h3 className="section-label">Tools Used</h3>
            <div className="tools-pills">
              <span className="tool-pill">Adobe Illustrator</span>
              <span className="tool-pill">Adobe Photoshop</span>
              <span className="tool-pill">Procreate</span>
            </div>
          </section>

          {/* Hero Image */}
          <div className="hero-image-container">
            <img
              src={yungblud}
              alt="YUNGBLUD Concert Poster 1"
              className="hero-image"
            />
            <img
              src={yungblud2}
              alt="YUNGBLUD Concert Poster 2"
              className="hero-image"
            />
          </div>

          {/* Next Project Button - Bottom */}
          <div className="next-project-bottom">
            <button className="next-project-btn">NEXT PROJECT →</button>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer-pill">
          <h3 className="footer-text">Don't be a stranger!</h3>
          <div className="nav-links">
            <a href="mailto:yomaicrespo@gmail.com" className="nav-item">
              Email
            </a>
            <span className="nav-sep">|</span>
            <a
              href="https://linkedin.com/in/mai-crespo/"
              target="_blank"
              rel="noreferrer"
              className="nav-item"
            >
              LinkedIn
            </a>
            <span className="nav-sep">|</span>
            <a
              href="https://instagram.com/heymaicomics/"
              target="_blank"
              rel="noreferrer"
              className="nav-item"
            >
              Instagram
            </a>
          </div>
          <a href="/MaiCrespoResume.pdf" target="_blank" rel="noreferrer">
            <button className="pill-btn">MY RESUME</button>
          </a>
        </footer>
      </div>
    </>
  );
};

export default RebelYourStyle;
