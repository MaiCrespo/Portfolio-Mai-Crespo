import React from "react";
import { useNavigate } from "react-router-dom";
import "./ManilaElnido.css";
import whiteLogo from "./assets/Head@300x.png";
import mockupBrochure from "./assets/GraphicDesign/MockupTravelbrochure.png";
import travelBrochure from "./assets/GraphicDesign/TravelBrochure.png";

const ManilaElnido = () => {
  const navigate = useNavigate();

  return (
    <div className="manila-page">
      <header className="manila-header">
        <button
          className="manila-brand"
          type="button"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <img src={whiteLogo} alt="" className="manila-logo" />
          <span>MAI CRESPO</span>
        </button>
        <button
          className="manila-nav-category"
          type="button"
          onClick={() => navigate("/graphic-design")}
        >
          GRAPHIC DESIGN
        </button>
        <span className="manila-nav-project">MANILA TO EL NIDO</span>
      </header>

      <main className="manila-main">
        <div className="manila-topline">
          <span>SELECTED WORK / 04</span>
          <span>BROCHURE DESIGN</span>
        </div>

        <section className="manila-hero" aria-labelledby="manila-title">
          <p className="manila-eyebrow">TRAVEL BROCHURE / PHILIPPINES</p>
          <h1 id="manila-title" className="manila-title">
            MANILA CITY TO
            <br />
            EL NIDO BEACH
          </h1>
          <p className="manila-subtitle">G Adventures: Philippines</p>
        </section>

        <figure className="manila-feature-image">
          <img
            src={mockupBrochure}
            alt="Manila City to El Nido Beach travel brochure mockup"
          />
        </figure>

        <section className="manila-overview">
          <div className="manila-section-name">
            <span className="manila-index">01 / THE CONCEPT</span>
            <h2>ABOUT THE PROJECT</h2>
          </div>
          <div className="manila-overview-body">
            <p>
              This project is a comprehensive 10-day travel itinerary for a
              guided tour through the Philippines, designed as a creative
              partnership with G Adventures. The brochure captures the dynamic
              contrast between the bustling urban landscape of Manila City to
              the serene, turquoise waters of El Nido Beach.
            </p>
            <p>
              The design focuses on high-impact travel photography and
              sophisticated typography to sell the "Pearl of the Orient"
              experience. By balancing structured information with an inviting,
              adventurous layout, the project demonstrates an ability to curate
              a visual narrative that guides a traveler from the city streets to
              a tropical paradise.
            </p>
            <div className="manila-meta">
              <div>
                <span className="manila-meta-label">DISCIPLINE</span>
                <strong>Brochure Design / Travel Itinerary</strong>
              </div>
              <div>
                <span className="manila-meta-label">TOOLS USED</span>
                <div className="manila-tools">
                  <span>Adobe Illustrator</span>
                  <span>Adobe Photoshop</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="manila-gallery-section"
          aria-labelledby="manila-gallery-title"
        >
          <div className="manila-gallery-heading">
            <div>
              <span className="manila-index">02 / THE DESIGN</span>
              <h2 id="manila-gallery-title">EXPLORE THE BROCHURE</h2>
            </div>
            <a
              className="manila-pdf-link"
              href="/TravelItineraryBrochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW FULL PDF <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className="manila-brochure-image">
            <img
              src={travelBrochure}
              alt="Manila to El Nido travel brochure design"
            />
          </figure>
        </section>

        <div className="manila-next-section">
          <span>KEEP EXPLORING</span>
          <button type="button" onClick={() => navigate("/swaolamb")}>
            NEXT PROJECT: SWAOLAMB <span aria-hidden="true">↗</span>
          </button>
        </div>
      </main>

      <footer className="manila-footer">
        <div className="manila-footer-links">
          <a href="mailto:yomaicrespo@gmail.com">Email</a>
          <span aria-hidden="true">|</span>
          <a
            href="https://linkedin.com/in/mai-crespo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span aria-hidden="true">|</span>
          <a
            href="https://instagram.com/heymaicomics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <button
          type="button"
          className="manila-footer-about"
          onClick={() => navigate("/about-me")}
        >
          ABOUT ME
        </button>
        <a
          href="/Mai_Crespo_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="manila-resume"
        >
          MY RESUME
        </a>
      </footer>
    </div>
  );
};

export default ManilaElnido;
