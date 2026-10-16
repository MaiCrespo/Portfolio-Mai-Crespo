import React from "react";
import { useNavigate } from "react-router-dom";
import "./Underbroth.css";

import logo from "./assets/Head@300x.png";
import CanMockUp from "./assets/GraphicDesign/CanMockUp.png";
import Beef from "./assets/GraphicDesign/BEEF.png";
import Shrimp from "./assets/GraphicDesign/SHRIMP.png";
import Chicken from "./assets/GraphicDesign/CHICKEN.png";

const flavors = [
  {
    number: "01",
    name: "Spicy Beef Malatang",
    image: Beef,
    alt: "Underbroth Spicy Beef Malatang packaging",
    description:
      "The most intense flavor in the Underbroth lineup. Inspired by Chinese malatang hot pot, this soup delivers deep beef richness layered with aggressive heat and numbing spice. Built for those who crave spice that lingers, burns, and demands respect. Not for the faint of heart!",
  },
  {
    number: "02",
    name: "Tom Yum Shrimp",
    image: Shrimp,
    alt: "Underbroth Tom Yum Shrimp packaging",
    description:
      "A bold, sour, and aromatic broth inspired by Thai tom yum. Bright citrus acidity meets savory shrimp and chili heat, creating a sharp, refreshing bite that cuts through the cold. Made for seafood lovers who want flavor that hits fast and finishes clean.",
  },
  {
    number: "03",
    name: "Creamy Pepper Chicken",
    image: Chicken,
    alt: "Underbroth Creamy Pepper Chicken packaging",
    description:
      "The mildest flavor in the Underbroth lineup. Inspired by creamy pepper broths and carbonara style ramen, this soup balances richness and warmth without overwhelming heat. Smooth, comforting, and ideal for those who want depth of flavor without the burn.",
  },
];

function Underbroth() {
  const navigate = useNavigate();
  const nextProject = () => navigate("/ace-of-cups");

  return (
    <div className="underbroth-page">
      <header className="underbroth-header">
        <button
          className="underbroth-brand"
          type="button"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <img src={logo} alt="" />
          <span>MAI CRESPO</span>
        </button>
        <button
          className="underbroth-header-link"
          type="button"
          onClick={() => navigate("/graphic-design")}
        >
          GRAPHIC DESIGN
        </button>
        <span className="underbroth-header-name">UNDERBROTH</span>
      </header>

      <main className="underbroth-main">
        <div className="underbroth-eyebrow">
          <span>SELECTED WORK / 01</span>
          <span>PACKAGING DESIGN</span>
        </div>

        <section
          className="underbroth-intro"
          aria-labelledby="underbroth-title"
        >
          <div>
            <h1 id="underbroth-title">UNDERBROTH</h1>
            <p className="underbroth-tagline">Infernal Soup from Hell</p>
          </div>
          <p className="underbroth-intro-note">
            A hot pot on the go. Comfort food with a demonic attitude.
          </p>
        </section>

        <figure className="underbroth-hero-art">
          <img src={CanMockUp} alt="Underbroth canned soup packaging mockups" />
        </figure>

        <section
          className="underbroth-overview"
          aria-labelledby="underbroth-about"
        >
          <div className="underbroth-section-kicker">
            <span>01 / THE CONCEPT</span>
          </div>
          <div className="underbroth-overview-copy">
            <h2 id="underbroth-about">HOT POT, REIMAGINED.</h2>
            <p>
              Underbroth is a package design project for a spicy canned soup
              concept positioned as a hot pot on the go. Inspired by Japanese
              vending machine soups and Chinese hot pot culture, the packaging
              features illustrated bowls to reference communal hot pot dining
              while translating it into a portable format. Designed for cold
              days and on the move consumption, Underbroth combines global
              flavors, comfort food, and a bold demonic attitude.
            </p>
            <div className="underbroth-meta">
              <div>
                <span className="underbroth-meta-label">DISCIPLINE</span>
                <span>Packaging Design</span>
              </div>
              <div>
                <span className="underbroth-meta-label">TOOLS</span>
                <span>Adobe Illustrator · Adobe Photoshop · Procreate</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="underbroth-flavors"
          aria-labelledby="underbroth-flavors-title"
        >
          <div className="underbroth-flavors-heading">
            <span>02 / THE LINEUP</span>
            <h2 id="underbroth-flavors-title">
              THREE FLAVORS. ONE HELL OF A BROTH.
            </h2>
          </div>
          {flavors.map((flavor) => (
            <article className="underbroth-flavor" key={flavor.number}>
              <div className="underbroth-flavor-art">
                <img src={flavor.image} alt={flavor.alt} loading="lazy" />
              </div>
              <div className="underbroth-flavor-copy">
                <span className="underbroth-flavor-index">
                  FLAVOR / {flavor.number}
                </span>
                <h3>{flavor.name}</h3>
                <p>{flavor.description}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="underbroth-next">
          <span>KEEP EXPLORING</span>
          <button type="button" onClick={nextProject}>
            NEXT PROJECT: ACE OF CUPS <span aria-hidden="true">↗</span>
          </button>
        </div>
      </main>

      <footer className="underbroth-footer">
        <div className="underbroth-socials">
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
          className="underbroth-about"
          onClick={() => navigate("/about-me")}
        >
          ABOUT ME
        </button>
        <a
          href="/Mai_Crespo_Resume.pdf"
          className="underbroth-resume"
          target="_blank"
          rel="noreferrer"
        >
          MY RESUME
        </a>
      </footer>
    </div>
  );
}

export default Underbroth;
