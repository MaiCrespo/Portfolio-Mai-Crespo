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
            <p className="project-subtitle">Age of Punk Rock</p>
          </header>

          {/* About Section */}
          <section className="about-section">
            <h3 className="section-label">About the Project</h3>
            <p className="project-description">
              "Rebel Your Style" is a bold and immersive poster series designed
              for a conceptual museum exhibition celebrating the cultural impact
              and revolutionary history. The project explores the visceral DIY
              aesthetic of the Age of Punk Rock fashion scene.
            </p>
            <br />
            <p className="project-description">
              This series blends raw, high-energy gritty aesthetics to pay
              homage to the grit and DIY culture of the 1970's and 80's. By
              blending gritty textures, torn paper elements, and unpolished
              color palettes, the posters aim to bridge the gap between
              historical preservation and the raw, visceral energy of the era's
              subculture.
            </p>
          </section>

          {/* Tools Used */}
          <section className="tools-section">
            <h3 className="section-label">Tools Used</h3>
            <div className="tools-pills">
              <span className="tool-pill">Adobe InDesign</span>
              <span className="tool-pill">Adobe Photoshop</span>
            </div>
          </section>

          {/* Hero Images */}
          <div className="hero-image-container">
            <img
              src={yungblud}
              alt="Rebel Your Style Poster 1"
              className="hero-image"
            />
          </div>

          {/* The Punk Rock Fashion Section */}
          <section className="flavor-section">
            <h3 className="flavor-title">The Punk Rock Fashion</h3>
            <p className="flavor-desc">
              This visual language of this project was heavily influenced by DIY
              zine designs from the 90's, Rather than aspiring for a clean,
              modern museum aesthetic, I chose to embrace the "mess" of a living
              grassroots culture: torn edges, layered typography, and unrefined
              compositions that echo the gritty aesthetic of punk music and
              fashion. This aesthetic mirrors the clothing itself—a patchwork of
              punk fashion's DIY ideals while keeping with the historical and
              conceptual context presented by a museum.
            </p>
          </section>

          <div className="hero-image-container">
            <img
              src={yungblud2}
              alt="Rebel Your Style Poster 2"
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
