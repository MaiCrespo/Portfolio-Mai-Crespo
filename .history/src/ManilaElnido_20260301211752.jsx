import React from "react";
import { useNavigate } from "react-router-dom";
import "./ManilaElnido.css";
import whiteLogo from "./assets/Head@300x.png";
import mockupBrochure from "./assets/GraphicDesign/MockupTravelbrochure.png";
import travelBrochure from "./assets/GraphicDesign/TravelBrochure.png";

const ManilaElnido = () => {
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
            <h1 className="project-main-title">
              Manila City to
              <br />
              El Nido Beach
            </h1>
            <p className="project-subtitle">G Adventures: Philippines</p>
          </header>

          {/* About Section */}
          <section className="about-section">
            <h3 className="section-label">About the Project</h3>
            <p className="project-description">
              This project is a comprehensive 10-day travel itinerary for a
              guided tour through the Philippines, designed as a creative
              partnership with G Adventures. The brochure captures the dynamic
              contrast between the bustling urban landscape of Manila City to
              the serene, turquoise waters of El Nido Beach.
            </p>
            <br />
            <p className="project-description">
              The design focuses on high-impact travel photography and
              sophisticated typography to sell the "Pearl of the Orient"
              experience. By balancing structured information with an inviting,
              adventurous layout, the project demonstrates an ability to curate
              a visual narrative that guides a traveler from the city streets to
              a tropical paradise.
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

          {/* PDF Button */}
          <div className="pdf-button-container">
            <a
              href="/TravelItineraryBrochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="view-pdf-btn">VIEW PDF</button>
            </a>
          </div>

          {/* Hero Images - Side by Side */}
          <div className="hero-images-grid">
            <div className="hero-image-item">
              <img
                src={mockupBrochure}
                alt="Travel Brochure Mockup"
                className="hero-image"
              />
            </div>
            <div className="hero-image-item">
              <img
                src={travelBrochure}
                alt="Manila to El Nido Brochure"
                className="hero-image"
              />
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

export default ManilaElnido;
