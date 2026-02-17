import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutMe.css";
import whiteLogo from "./assets/Head@300x.png";
import meImage from "./assets/misc/me.webp";

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Background Orbs */}
      <div className="orb-canvas">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="page-layout">
        <nav className="nav-pill">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <div className="nav-links">
            <span className="nav-item" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="nav-sep">|</span>
            <span className="nav-item" onClick={() => navigate("/pick-a-card")}>
              Works
            </span>
            <span className="nav-sep">|</span>
            <span className="nav-item active">About Me</span>
          </div>
          <img src={whiteLogo} className="nav-logo" alt="logo" />
        </nav>

        <div className="about-content">
          <div className="about-container">
            <div className="about-image">
              <img src={meImage} alt="Mai Crespo" />
            </div>
            <div className="about-text">
              <h1>About Me</h1>
              <p>
                Hello! I'm <strong>Mai Crespo</strong>, a UI/UX Designer with a
                strong background in Illustration and Graphic Design.
              </p>
              <p>
                I'm passionate about creating intuitive digital experiences
                while bringing a unique artistic perspective to every project.
                My work combines problem-solving through tech with my love for
                drawing crazy, weird, dark things.
              </p>
              <p>
                When I'm not designing, you'll find me sketching horror-inspired
                illustrations or exploring new ways to blend creativity with
                functionality.
              </p>
              <div className="about-skills">
                <h2>Skills</h2>
                <div className="skills-grid">
                  <div className="skill-category">
                    <h3>UI/UX Design</h3>
                    <ul>
                      <li>User Research</li>
                      <li>Wireframing & Prototyping</li>
                      <li>Interaction Design</li>
                      <li>Usability Testing</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h3>Graphic Design</h3>
                    <ul>
                      <li>Branding & Identity</li>
                      <li>Print Design</li>
                      <li>Packaging Design</li>
                      <li>Marketing Materials</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h3>Illustration</h3>
                    <ul>
                      <li>Digital Illustration</li>
                      <li>Character Design</li>
                      <li>Concept Art</li>
                      <li>Visual Storytelling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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

export default AboutMe;
