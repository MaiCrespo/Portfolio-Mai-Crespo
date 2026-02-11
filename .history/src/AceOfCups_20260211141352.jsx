import React from "react";
import { useNavigate } from "react-router-dom";
import "./AceOfCups.css";
import whiteLogo from "./assets/Head@300x.png";
import first from "./assets/GraphicDesign/1st.png";
import second from "./assets/GraphicDesign/2nd.png";
import third from "./assets/GraphicDesign/3rd.png";

const AceOfCups = () => {
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
            <h1 className="project-main-title">Ace of Cups</h1>
            <p className="project-subtitle">Coffee, Pastries, and Tarot</p>
          </header>

          {/* About Section */}
          <section className="about-section">
            <h3 className="section-label">About the Project</h3>
            <p className="project-description">
              Ace of Cups is a graphic poster design project for a conceptual
              cafe that brings together coffee pastries and tarot. The concept
              is inspired by my long standing interest in esoteric symbolism and
              the role of cafes as social gathering spaces. This project
              explores how mystical themes can be translated into a bold
              contemporary visual identity that feels both inviting and
              atmospheric. The poster highlights the cafe’s food and beverage
              offerings while ensuring that every visual element remains aligned
              with the overall theme.
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
            <img src={first} alt="Underbroth Cans" className="hero-image" />
          </div>

          {/* Flavor Sections */}
          <div className="flavor-sections">
            {/* Beef */}
            <div className="flavor-row">
              <div className="flavor-image">
                <img src={Beef} alt="Spicy Beef Malatang" />
              </div>
              <div className="flavor-content">
                <h3 className="flavor-title">Spicy Beef Malatang</h3>
                <p className="flavor-desc">
                  The most intense flavor in the Underbroth lineup. Inspired by
                  Chinese malatang hot pot, this soup delivers deep beef
                  richness layered with aggressive heat and numbing spice. Built
                  for those who crave spice that lingers, burns, and demands
                  respect. Not for the faint of heart!
                </p>
              </div>
            </div>

            {/* Shrimp */}
            <div className="flavor-row">
              <div className="flavor-image">
                <img src={Shrimp} alt="Tom Yum Shrimp" />
              </div>
              <div className="flavor-content">
                <h3 className="flavor-title">Tom Yum Shrimp</h3>
                <p className="flavor-desc">
                  A bold, sour, and aromatic broth inspired by Thai tom yum.
                  Bright citrus acidity meets savory shrimp and chili heat,
                  creating a sharp, refreshing bite that cuts through the cold.
                  Made for seafood lovers who want flavor that hits fast and
                  finishes clean.
                </p>
              </div>
            </div>

            {/* Chicken */}
            <div className="flavor-row">
              <div className="flavor-image">
                <img src={Chicken} alt="Creamy Pepper Chicken" />
              </div>
              <div className="flavor-content">
                <h3 className="flavor-title">Creamy Pepper Chicken</h3>
                <p className="flavor-desc">
                  The mildest flavor in the Underbroth lineup. Inspired by
                  creamy pepper broths and carbonara style ramen, this soup
                  balances richness and warmth without overwhelming heat.
                  Smooth, comforting, and ideal for those who want depth of
                  flavor without the burn.
                </p>
              </div>
            </div>
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
              href="https://linkedin.com/in/mai-crespo/ "
              target="_blank"
              rel="noreferrer"
              className="nav-item"
            >
              LinkedIn
            </a>
            <span className="nav-sep">|</span>
            <a
              href="https://instagram.com/heymaicomics/ "
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

export default AceOfCups;
