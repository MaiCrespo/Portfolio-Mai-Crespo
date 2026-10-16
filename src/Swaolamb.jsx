import React from "react";
import { useNavigate } from "react-router-dom";
import "./Swaolamb.css";
import whiteLogo from "./assets/Head@300x.png";
import swaolamb from "./assets/GraphicDesign/Swaolamb.png";

const Swaolamb = () => {
  const navigate = useNavigate();

  return (
    <div className="swaolamb-page">
      <header className="swaolamb-header">
        <button
          type="button"
          className="swaolamb-brand"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <img src={whiteLogo} alt="" className="swaolamb-logo" />
          <span>MAI CRESPO</span>
        </button>
        <button
          type="button"
          className="swaolamb-nav-category"
          onClick={() => navigate("/graphic-design")}
        >
          GRAPHIC DESIGN
        </button>
        <span className="swaolamb-nav-project">SWAOLAMB</span>
      </header>

      <main className="swaolamb-main">
        <div className="swaolamb-topline">
          <span>SELECTED WORK / 05</span>
          <span>CONCEPTUAL BRANDING / DIGITAL MANIPULATION</span>
        </div>

        <section className="swaolamb-hero" aria-labelledby="swaolamb-title">
          <p className="swaolamb-eyebrow">
            CREATURE DESIGN / CONCEPTUAL ADVERTISING
          </p>
          <h1 className="swaolamb-title" id="swaolamb-title">
            THE SWAOLAMB
          </h1>
          <p className="swaolamb-subtitle">Divinely Engineered Companion</p>
        </section>

        <figure className="swaolamb-feature-image">
          <img
            src={swaolamb}
            alt="The Swaolamb, a fictional divinely engineered companion, promotional artwork"
          />
        </figure>

        <section className="swaolamb-overview" aria-labelledby="swaolamb-about">
          <div className="swaolamb-section-name">
            <span className="swaolamb-index">01 / THE CONCEPT</span>
            <h2 id="swaolamb-about">ABOUT THE PROJECT</h2>
          </div>
          <div className="swaolamb-overview-body">
            <p>
              "The Swaolamb" is a conceptual branding and digital manipulation
              project centered around Cherubica Labs, a fictional corporation
              that "plays God" through genetic modification. Marketed as the
              ultimate "Divinely Engineered Companion", the creature is a
              seamless hybrid of a lamb, swan, and koala.
            </p>
            <p>
              The visual direction leans into a "heavenly" corporate
              aesthetic—utilizing soft pastels, ethereal clouds, and divine
              iconography—to mask the ethically questionable reality of a
              genetically modified "abomination". This piece explores the
              intersection of commercial marketing and bioethics, using beauty
              to sell the unnatural.
            </p>
            <div className="swaolamb-meta">
              <div>
                <span className="swaolamb-meta-label">DISCIPLINE</span>
                <strong>Conceptual Branding / Digital Manipulation</strong>
              </div>
              <div>
                <span className="swaolamb-meta-label">TOOLS USED</span>
                <div className="swaolamb-tools">
                  <span>Adobe Illustrator</span>
                  <span>Adobe Photoshop</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="swaolamb-next-section">
          <span>KEEP EXPLORING</span>
          <button type="button" onClick={() => navigate("/underbroth")}>
            NEXT PROJECT: UNDERBROTH <span aria-hidden="true">↗</span>
          </button>
        </div>
      </main>

      <footer className="swaolamb-footer">
        <div className="swaolamb-footer-links">
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
          className="swaolamb-footer-about"
          onClick={() => navigate("/about-me")}
        >
          ABOUT ME
        </button>
        <a
          className="swaolamb-resume"
          href="/Mai_Crespo_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          MY RESUME
        </a>
      </footer>
    </div>
  );
};

export default Swaolamb;
