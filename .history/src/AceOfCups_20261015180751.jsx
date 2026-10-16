import React from "react";
import { useNavigate } from "react-router-dom";
import "./AceOfCups.css";

import logo from "./assets/Head@300x.png";
import first from "./assets/GraphicDesign/1st.png";
import second from "./assets/GraphicDesign/2nd.png";
import third from "./assets/GraphicDesign/3rd.png";

const posters = [
  {
    image: second,
    label: "02",
    alt: "Ace of Cups poster design, second composition",
  },
  {
    image: third,
    label: "03",
    alt: "Ace of Cups poster design, third composition",
  },
];

function AceOfCups() {
  const navigate = useNavigate();

  return (
    <div className="ace-page">
      <header className="ace-header">
        <button
          className="ace-brand"
          type="button"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <img src={logo} alt="" />
          <span>MAI CRESPO</span>
        </button>
        <button
          className="ace-header-link"
          type="button"
          onClick={() => navigate("/graphic-design")}
        >
          GRAPHIC DESIGN
        </button>
        <span className="ace-header-name">ACE OF CUPS</span>
      </header>

      <main className="ace-main">
        <div className="ace-eyebrow">
          <span>SELECTED WORK / 02</span>
          <span>POSTER DESIGN</span>
        </div>

        <section className="ace-intro" aria-labelledby="ace-title">
          <div>
            <h1 id="ace-title">ACE OF CUPS</h1>
            <p className="ace-tagline">Coffee, Pastries, and Tarot</p>
          </div>
          <p className="ace-intro-note">
            A conceptual café where everyday rituals meet a little magic.
          </p>
        </section>

        <figure className="ace-hero-art">
          <img src={first} alt="Ace of Cups conceptual café poster" />
        </figure>

        <section className="ace-overview" aria-labelledby="ace-about">
          <div className="ace-section-kicker">
            <span>01 / THE CONCEPT</span>
          </div>
          <div className="ace-overview-copy">
            <h2 id="ace-about">A LITTLE MAGIC WITH YOUR COFFEE.</h2>
            <p>
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
            <div className="ace-meta">
              <div>
                <span className="ace-meta-label">DISCIPLINE</span>
                <span>Poster Design</span>
              </div>
              <div>
                <span className="ace-meta-label">TOOLS</span>
                <span>Adobe Illustrator · Adobe Photoshop · Procreate</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ace-gallery" aria-labelledby="ace-gallery-title">
          <div className="ace-gallery-heading">
            <span>02 / THE POSTERS</span>
            <h2 id="ace-gallery-title">THE POSTER SERIES.</h2>
          </div>
          {posters.map((poster) => (
            <figure className="ace-poster" key={poster.label}>
              <img src={poster.image} alt={poster.alt} loading="lazy" />
              <figcaption>POSTER / {poster.label}</figcaption>
            </figure>
          ))}
        </section>

        <div className="ace-next">
          <span>KEEP EXPLORING</span>
          <button type="button" onClick={() => navigate("/rebel-your-style")}>
            NEXT PROJECT: REBEL YOUR STYLE <span aria-hidden="true">↗</span>
          </button>
        </div>
      </main>

      <footer className="ace-footer">
        <div className="ace-socials">
          <a href="mailto:yomaicrespo@gmail.com">Email</a>
          <span>|</span>
          <a
            href="https://linkedin.com/in/mai-crespo/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>|</span>
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
          className="ace-about"
          onClick={() => navigate("/about-me")}
        >
          ABOUT ME
        </button>
        <a
          href="/Mai_Crespo_Resume.pdf"
          className="ace-resume"
          target="_blank"
          rel="noreferrer"
        >
          MY RESUME
        </a>
      </footer>
    </div>
  );
}

export default AceOfCups;
