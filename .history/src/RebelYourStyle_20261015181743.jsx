import React from "react";
import { useNavigate } from "react-router-dom";
import "./RebelYourStyle.css";
import whiteLogo from "./assets/Head@300x.png";
import yungblud from "./assets/GraphicDesign/Yungblud.jpg";
import yungblud2 from "./assets/GraphicDesign/Yungblud2.jpg";

const RebelYourStyle = () => {
  const navigate = useNavigate();

  return (
    <div className="rebel-page">
      <header className="rebel-header">
        <button
          className="rebel-brand"
          type="button"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <img src={whiteLogo} alt="" className="rebel-logo" />
          <span>MAI CRESPO</span>
        </button>
        <button
          className="rebel-nav-category"
          type="button"
          onClick={() => navigate("/graphic-design")}
        >
          GRAPHIC DESIGN
        </button>
        <span className="rebel-nav-project">REBEL YOUR STYLE</span>
      </header>

      <main className="rebel-main">
        <div className="rebel-topline">
          <span>SELECTED WORK / 03</span>
          <button
            className="rebel-next"
            type="button"
            onClick={() => navigate("/manila-el-nido")}
          >
            NEXT PROJECT <span aria-hidden="true">↗</span>
          </button>
        </div>

        <section className="rebel-hero" aria-labelledby="rebel-title">
          <p className="rebel-eyebrow">POSTER DESIGN / CONCEPTUAL EXHIBITION</p>
          <h1 id="rebel-title" className="rebel-title">
            REBEL YOUR STYLE
          </h1>
          <p className="rebel-subtitle">Age of Punk Rock</p>
        </section>

        <figure className="rebel-feature-image">
          <img
            src={yungblud}
            alt="Rebel Your Style — first punk exhibition poster"
          />
        </figure>

        <section className="rebel-overview">
          <div className="rebel-section-name">
            <span className="rebel-index">01 / THE CONCEPT</span>
            <h2>ABOUT THE PROJECT</h2>
          </div>
          <div className="rebel-overview-body">
            <p>
              "Rebel Your Style" is a bold and immersive poster series designed
              for a conceptual museum exhibition celebrating the cultural impact
              and revolutionary history. The project explores the visceral DIY
              aesthetic of the Age of Punk Rock fashion scene.
            </p>
            <p>
              This series blends raw, high-energy gritty aesthetics to pay
              homage to the grit and DIY culture of the 1970's and 80's. By
              blending gritty textures, torn paper elements, and unpolished
              color palettes, the posters aim to bridge the gap between
              historical preservation and the raw, visceral energy of the era's
              subculture.
            </p>
            <div className="rebel-meta">
              <div>
                <span className="rebel-meta-label">DISCIPLINE</span>
                <strong>Poster Design / Exhibition Concept</strong>
              </div>
              <div>
                <span className="rebel-meta-label">TOOLS USED</span>
                <div className="rebel-tools">
                  <span>Adobe InDesign</span>
                  <span>Adobe Photoshop</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rebel-process" aria-labelledby="punk-heading">
          <div className="rebel-section-name">
            <span className="rebel-index">02 / VISUAL LANGUAGE</span>
            <h2 id="punk-heading">THE PUNK ROCK FASHION</h2>
          </div>
          <div className="rebel-process-body">
            <p>
              This visual language of this project was heavily influenced by DIY
              zine designs from the 90's, Rather than aspiring for a clean,
              modern museum aesthetic, I chose to embrace the "mess" of a living
              grassroots culture: torn edges, layered typography, and unrefined
              compositions that echo the gritty aesthetic of punk music and
              fashion. This aesthetic mirrors the clothing itself—a patchwork of
              punk fashion's DIY ideals while keeping with the historical and
              conceptual context presented by a museum.
            </p>
          </div>
        </section>

        <figure className="rebel-second-image">
          <img
            src={yungblud2}
            alt="Rebel Your Style — second punk exhibition poster"
          />
        </figure>

        <div className="rebel-bottom-nav">
          <button
            className="rebel-back"
            type="button"
            onClick={() => navigate("/graphic-design")}
          >
            ← BACK TO GRAPHIC DESIGN
          </button>
          <button
            className="rebel-next"
            type="button"
            onClick={() => navigate("/manila-el-nido")}
          >
            NEXT PROJECT <span aria-hidden="true">↗</span>
          </button>
        </div>
      </main>

      <footer className="rebel-footer">
        <div className="rebel-footer-links">
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
          className="rebel-footer-about"
          onClick={() => navigate("/about-me")}
        >
          ABOUT ME
        </button>
        <a
          href="/Mai_Crespo_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rebel-resume"
        >
          MY RESUME
        </a>
      </footer>
    </div>
  );
};

export default RebelYourStyle;
