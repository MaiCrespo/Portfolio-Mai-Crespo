import React from "react";
import { useNavigate } from "react-router-dom";
import "./GraphicDesignPage.css";
import whiteLogo from "./assets/Head@300x.png";

import SwaolambThumb from "./assets/GraphicDesign/SwaolambThumbnail.png";
import TravelThumb from "./assets/GraphicDesign/TravelThumbnail.png";
import RebelThumb from "./assets/GraphicDesign/RebelYourStyleThumbnail.png";
import UnderbrothThumb from "./assets/GraphicDesign/UnderbrothThumbnail.png";
import AceThumb from "./assets/GraphicDesign/AceOfCupsThumbnail.png";

const GraphicDesignPage = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: "Underbroth",
      cat: "Package Design",
      desc: "A spicy canned soup concept inspired by Japanese vending machines and Chinese hot pot culture.",
      img: UnderbrothThumb,
      extraClass: "",
    },
    {
      id: 2,
      name: "Ace of Cups",
      cat: "Poster Design",
      desc: "A visual identity for a conceptual café that combines coffee, pastries, and tarot.",
      img: AceThumb,
      extraClass: "",
    },
    {
      id: 3,
      name: "Rebel Your Style",
      cat: "Poster Design",
      desc: "A poster design for a hypothetical exhibition at the National Canadian Museum of History focused on punk rock fashion.",
      img: RebelThumb,
      extraClass: "",
    },
    {
      id: 4,
      name: "Manila City to El Nido Beach",
      cat: "Brochure Design",
      desc: "A 10-day travel itinerary for a tour of the Philippines, created as a reference to G Adventures.",
      img: TravelThumb,
      extraClass: "bottom-row",
    },
    {
      id: 5,
      name: "Swaolamb",
      cat: "Poster Design",
      desc: "A conceptual branding project for Cherubica Labs, an evil corporation that genetically engineers pets.",
      img: SwaolambThumb,
      extraClass: "bottom-row",
    },
  ];

  return (
    <>
      {/* Background Orbs */}
      <div className="orb-canvas">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="page-layout">
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

        <div className="scrollable-content">
          <h1 className="project-page-title">Graphic Design Projects</h1>
          <div className="title-separator">
            <hr />
          </div>

          <div className="gd-grid">
            {projects.map((p) => (
              <div key={p.id} className={`project-item ${p.extraClass}`}>
                <h2 className="project-name">{p.name}</h2>
                <div className="project-card2">
                  <img src={p.img} alt={p.name} />
                  <div className="gd-project-info">
                    <h3>{p.cat}</h3>
                    <p>{p.desc}</p>
                    <button className="view-more-btn">VIEW MORE</button>
                  </div>
                </div>
              </div>
            ))}
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

export default GraphicDesignPage;
