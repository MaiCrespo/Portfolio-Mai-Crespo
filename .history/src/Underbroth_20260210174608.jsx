import React from "react";
import { useNavigate } from "react-router-dom";
import "./Underbroth.css";
import whiteLogo from "./assets/Head@300x.png";
import CanMockUp from "./assets/GraphicDesign/CanMockUp.png";
import One from "./assets/GraphicDesign/1st.png";
import Two from "./assets/GraphicDesign/2nd.png";
import Three from "./assets/GraphicDesign/3rd.png";

const Underbroth = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Background Orbs */}
      <div className="orb-canvas">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="page-layout">
        {/* Navigation - Exact same structure as reference */}
        <nav className="nav-pill">
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
          <header className="project-hero">
            <h1 className="project-main-title">Underbroth</h1>
            <p className="project-subtitle">Infernal Soup from Hell</p>
          </header>

          <section className="project-details">
            <div className="detail-group">
              <h3>About the Project</h3>
              <p>
                Underbroth is a packaging design project for a spicy instant
                soup brand positioned for urbanites on the go. Inspired by
                nightmares and traditional hellish folklore.
              </p>
            </div>
          </section>

          <div className="mockup-container">
            <img src={CanMockUp} alt="Underbroth Cans" className="main-image" />
          </div>

          <div className="flavor-grid">
            <img src={One} alt="Flavor 1" />
            <img src={Two} alt="Flavor 2" />
            <img src={Three} alt="Flavor 3" />
          </div>
        </div>

        {/* Footer - Exact same structure as reference */}
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

export default Underbroth;
