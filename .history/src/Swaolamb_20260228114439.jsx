import React from "react";
import { useNavigate } from "react-router-dom";
import "./Swaolamb.css";
import whiteLogo from "./assets/Head@300x.png";
import swaolamb from "./assets/GraphicDesign/Swaolamb.png";

const Swaolamb = () => {
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
            <h1 className="project-main-title">The Swaolamb</h1>
            <p className="project-subtitle">Divinely Engineered Companion</p>
          </header>

          {/* About Section */}
          <section className="about-section">
            <h3 className="section-label">About the Project</h3>
            <p className="project-description">
              "The Swaolamb" is a conceptual branding and digital manipulation
              project centered around Cherubica Labs, a fictional corporation
              that "plays God" through genetic modification. Marketed as the
              ultimate "Divinely Engineered Companion", the creature is a
              seamless hybrid of a lamb, swan, and koala.
            </p>
            <br />
            <p className="project-description">
              The visual direction leans into a "heavenly" corporate
              aesthetic—utilizing soft pastels, ethereal clouds, and divine
              iconography—to mask the ethically questionable reality of a
              genetically modified "abomination". This piece explores the
              intersection of commercial marketing and bioethics, using beauty
              to sell the unnatural.
            </p>
          </section>

          {/* Tools Used */}
          <section className="tools-section">
            <h3 className="section-label">Tools Used</h3>
            <div className="tools-pills">
              <span className="tool-pill">Adobe Illustrator</span>
              <span className="tool-pill">Adobe Photoshop</span>
            </div>
          </section>

          {/* Hero Image */}
          <div className="hero-image-container">
            <img src={swaolamb} alt="The Swaolamb" className="hero-image" />
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

export default Swaolamb;
