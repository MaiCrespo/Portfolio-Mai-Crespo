import React from "react";
import { useNavigate } from "react-router-dom";
import "./GraphicDesignPage.css";
import whiteLogo from "./assets/Head@300x.png";

// Import your thumbnails
import SwaolambThumb from "./assets/GraphicDesign/SwaolambThumbnail.png";
import TravelThumb from "./assets/GraphicDesign/TravelThumbnail.png";
import RebelThumb from "./assets/GraphicDesign/RebelYourStyleThumbnail.png";
import UnderbrothThumb from "./assets/GraphicDesign/UnderbrothThumbnail.png";
import AceThumb from "./assets/GraphicDesign/AceOfCupsThumbnail.png";

const GraphicDesignPage = () => {
  const navigate = useNavigate();

  return (
    <div className="global-page-container">
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
          <span className="nav-item">About Me</span>
        </div>
        <img src={whiteLogo} className="logo-icon" alt="logo" />
      </nav>

      <div className="content-pill-main scrollable-content">
        <h1 className="project-page-title">Graphic Design Projects</h1>
        <div className="title-separator">
          <span className="sep-dot"></span>
          <hr />
          <span className="sep-dot"></span>
        </div>

        <div className="projects-grid">
          {/* TOP ROW */}
          <div className="project-item">
            <h2 className="project-name">Underbroth</h2>
            <div className="project-card">
              <img src={UnderbrothThumb} alt="Underbroth" />
              <div className="project-info">
                <h3>Package Design</h3>
                <p>
                  A spicy canned soup concept inspired by Japanese vending
                  machines.
                </p>
                <button className="view-more-btn">VIEW MORE</button>
              </div>
            </div>
          </div>

          <div className="project-item">
            <h2 className="project-name">Ace of Cups</h2>
            <div className="project-card">
              <img src={AceThumb} alt="Ace of Cups" />
              <div className="project-info">
                <h3>Poster Design</h3>
                <p>
                  A visual identity for a conceptual café that combines coffee
                  and tarot.
                </p>
                <button className="view-more-btn">VIEW MORE</button>
              </div>
            </div>
          </div>

          <div className="project-item">
            <h2 className="project-name">Rebel Your Style</h2>
            <div className="project-card">
              <img src={RebelThumb} alt="Rebel Your Style" />
              <div className="project-info">
                <h3>Poster Design</h3>
                <p>
                  A poster design for a hypothetical exhibition on punk rock
                  fashion.
                </p>
                <button className="view-more-btn">VIEW MORE</button>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="project-item bottom-row">
            <h2 className="project-name">Manila City to El Nido Beach</h2>
            <div className="project-card">
              <img src={TravelThumb} alt="Travel Brochure" />
              <div className="project-info">
                <h3>Brochure Design</h3>
                <p>A 10-day travel itinerary for a tour of the Philippines.</p>
                <button className="view-more-btn">VIEW MORE</button>
              </div>
            </div>
          </div>

          <div className="project-item bottom-row">
            <h2 className="project-name">Swaolamb</h2>
            <div className="project-card">
              <img src={SwaolambThumb} alt="Swaolamb" />
              <div className="project-info">
                <h3>Poster Design</h3>
                <p>
                  Conceptual branding for an "evil" corporation engineering
                  pets.
                </p>
                <button className="view-more-btn">VIEW MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer code here... */}
    </div>
  );
};

export default GraphicDesignPage;
