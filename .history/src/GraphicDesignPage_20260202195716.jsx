import React from "react";
import "./GraphicDesignPage.css";
import SwaolambThumb from "./assets/GraphicDesign/SwaolambThumbnail.png";
import TravelThumb from "./assets/GraphicDesign/TravelThumbnail.png";
import RebelThumb from "./assets/GraphicDesign/RebelYourStyleThumbnail.png";
import UnderbrothThumb from "./assets/GraphicDesign/UnderbrothThumbnail.png";
import AceThumb from "./assets/GraphicDesign/AceOfCupsThumbnail.png";

const GraphicDesignPage = () => {
  return (
    <div className="global-page-container">
      {/* Background Orbs */}
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="content-pill-main scrollable-content">
        <h1 className="project-page-title">Graphic Design Projects</h1>
        <div className="title-separator">
          <span className="sep-dot"></span>
          <hr />
          <span className="sep-dot"></span>
        </div>

        <div className="projects-grid">
          {/* Top Row: 3 Projects */}
          <div className="project-item">
            <h2 className="project-name">Underbroth</h2>
            <div className="project-card">
              <img src={UnderbrothThumb} alt="Underbroth" />
              <div className="project-info">
                <h3>Package Design</h3>
                <p>
                  A spicy canned soup concept inspired by Japanese vending
                  machines and Chinese hot pot culture.
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
                  A visual identity for a conceptual café that combines coffee,
                  pastries, and tarot.
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
                  A poster design for a hypothetical exhibition at the National
                  Canadian Museum of History focused on punk rock fashion.
                </p>
                <button className="view-more-btn">VIEW MORE</button>
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 Projects */}
          <div className="project-item bottom-row">
            <h2 className="project-name">Manila City to El Nido Beach</h2>
            <div className="project-card">
              <img src={TravelThumb} alt="Travel Brochure" />
              <div className="project-info">
                <h3>Brochure Design</h3>
                <p>
                  A 10-day travel itinerary for a tour of the Philippines,
                  created as a reference to G Adventures.
                </p>
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
                  A conceptual branding project for Cherubica Labs, an "evil"
                  corporation that genetically engineers pets.
                </p>
                <button className="view-more-btn">VIEW MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignPage;
