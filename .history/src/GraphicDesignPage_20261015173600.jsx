import React from "react";
import { useNavigate } from "react-router-dom";
import "./GraphicDesignPage.css";

import logo from "./assets/Head@300x.png";
import SwaolambThumb from "./assets/GraphicDesign/SwaolambThumbnail.png";
import TravelThumb from "./assets/GraphicDesign/TravelThumbnail.png";
import RebelThumb from "./assets/GraphicDesign/RebelYourStyleThumbnail.png";
import UnderbrothThumb from "./assets/GraphicDesign/UnderbrothThumbnail.png";
import AceThumb from "./assets/GraphicDesign/AceOfCupsThumbnail.png";

const projects = [
  {
    id: 1,
    name: "Underbroth",
    cat: "Package Design",
    desc: "A spicy canned soup concept inspired by Japanese vending machines and Chinese hot pot culture.",
    img: UnderbrothThumb,
    route: "/underbroth",
  },
  {
    id: 2,
    name: "Ace of Cups",
    cat: "Poster Design",
    desc: "A visual identity for a conceptual café that combines coffee, pastries, and tarot.",
    img: AceThumb,
    route: "/ace-of-cups",
  },
  {
    id: 3,
    name: "Rebel Your Style",
    cat: "Poster Design",
    desc: "A poster design for a hypothetical exhibition at the National Canadian Museum of History focused on punk rock fashion.",
    img: RebelThumb,
    route: "/rebel-your-style",
  },
  {
    id: 4,
    name: "Manila City to El Nido Beach",
    cat: "Brochure Design",
    desc: "A 10-day travel itinerary for a tour of the Philippines, created as a reference to G Adventures.",
    img: TravelThumb,
    route: "/manila-el-nido",
  },
  {
    id: 5,
    name: "Swaolamb",
    cat: "Poster Design",
    desc: "A conceptual branding project for Cherubica Labs, an evil corporation that genetically engineers pets.",
    img: SwaolambThumb,
    route: "/swaolamb",
  },
];

function GraphicDesignPage() {
  const navigate = useNavigate();

  return (
    <div className="gd-page">
      <header className="gd-header">
        <button
          type="button"
          className="gd-brand"
          onClick={() => navigate("/")}
          aria-label="Return to homepage"
        >
          <img src={logo} alt="" className="gd-logo" />
          <span>MAI CRESPO</span>
        </button>
        <h1 className="gd-page-title">GRAPHIC DESIGN</h1>
      </header>

      <main className="gd-main">
        <h2 className="gd-section-title">SELECTED WORKS</h2>
        <div className="gd-projects-grid">
          {projects.map((project) => (
            <article className="gd-project" key={project.id}>
              <h3 className="gd-project-title">{project.name}</h3>
              <div className="gd-image-container">
                <img
                  src={project.img}
                  alt={`${project.name} project thumbnail`}
                />
              </div>
              <div className="gd-project-info">
                <h4 className="gd-category">{project.cat}</h4>
                <p className="gd-description">{project.desc}</p>
                <button
                  type="button"
                  className="gd-view-more"
                  onClick={() => navigate(project.route)}
                >
                  VIEW MORE
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="gd-footer">
        <div className="gd-footer-links">
          <a href="mailto:yomaicrespo@gmail.com">Email</a>
          <span aria-hidden="true">|</span>
          <a
            href="https://linkedin.com/in/mai-crespo/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span aria-hidden="true">|</span>
          <a
            href="https://instagram.com/heymaicomics/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <button
          type="button"
          className="gd-footer-about"
          onClick={() => navigate("/about-me")}
        >
          ABOUT ME
        </button>
        <a
          className="gd-resume-link"
          href="/Mai_Crespo_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          MY RESUME
        </a>
      </footer>
    </div>
  );
}

export default GraphicDesignPage;
