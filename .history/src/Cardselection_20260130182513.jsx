import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import whiteLogo from "./assets/Head@300x.png";
import tarotMat from "./assets/misc/tarot mat.avif";
import uiuxCard from "./assets/Card - UI:UX.png";
import graphicDesignCard from "./assets/Card - Graphic Design.png";
import illustrationsCard from "./assets/Card - Illustrations.png";
import "./CardSelection.css";

function CardSelection() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardType) => {
    setSelectedCard(cardType);
    // You can add navigation logic here later
    // For example: navigate(`/portfolio/${cardType}`);
  };

  return (
    <div className="card-selection-page">
      {/* NAV */}
      <nav className="main-nav">
        <img src={whiteLogo} className="nav-logo-left" alt="logo" />
        <div className="nav-links-center">
          <span className="nav-item" onClick={() => navigate("/")}>
            Home
          </span>
          <div className="v-line"></div>
          <span className="nav-item bold">Works</span>
          <div className="v-line"></div>
          <span className="nav-item">About Me</span>
        </div>
      </nav>

      {/* CARD SELECTION AREA */}
      <main className="card-selection-viewport">
        <div
          className="tarot-mat-bg"
          style={{ backgroundImage: `url(${tarotMat})` }}
        ></div>

        <h1 className="choose-title">Choose One</h1>

        <div className="cards-container">
          <div
            className="tarot-card card-left"
            onClick={() => handleCardClick("uiux")}
          >
            <img src={uiuxCard} alt="UI/UX Design Card" />
          </div>

          <div
            className="tarot-card card-center"
            onClick={() => handleCardClick("graphic-design")}
          >
            <img src={graphicDesignCard} alt="Graphic Design Card" />
          </div>

          <div
            className="tarot-card card-right"
            onClick={() => handleCardClick("illustrations")}
          >
            <img src={illustrationsCard} alt="Illustrations Card" />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <h3>Don't be a stranger!</h3>
        <div className="footer-links">
          <a href="mailto:yomaicrespo@gmail.com" className="footer-link">
            Email
          </a>
          <span>|</span>
          <a
            href="https://www.linkedin.com/in/mai-crespo/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <span>|</span>
          <a
            href="https://www.instagram.com/heymaicomics/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
        </div>
        <a
          href="/assets/PDFs/Mai Crespo Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-btn">MY RESUME</button>
        </a>
      </footer>
    </div>
  );
}

export default CardSelection;
