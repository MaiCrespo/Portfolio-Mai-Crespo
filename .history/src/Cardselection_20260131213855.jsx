import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cardselection.css";

// Asset imports - Ensure these paths match your folder structure
import whiteLogo from "./assets/Head@300x.png";

function Cardselection() {
  const navigate = useNavigate();

  const selectionCards = [
    {
      id: 1,
      number: "I",
      title: "UI/UX Design",
      image: "./assets/UIUX_Card.png", // Replace with your actual card image path
      path: "/got-it", // Navigation for the first card
    },
    {
      id: 2,
      number: "II",
      title: "Graphic Design",
      image: "./assets/Graphic_Card.png", // Replace with your actual card image path
      path: "/graphic-design",
    },
    {
      id: 3,
      number: "III",
      title: "Illustrations",
      image: "./assets/Illustration_Card.png", // Replace with your actual card image path
      path: "/illustrations",
    },
  ];

  return (
    <div className="pick-card-wrapper">
      {/* Navigation Pill */}
      <nav className="main-nav-pill">
        <div className="nav-links-center">
          <span className="nav-item" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="nav-divider">|</span>
          <span className="nav-item active">Works</span>
          <span className="nav-divider">|</span>
          <span className="nav-item">About Me</span>
        </div>
        <img
          src={whiteLogo}
          className="nav-logo-right"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </nav>

      {/* Hero Selection Area */}
      <div className="selection-hero">
        <h2 className="selection-instruction">Choose One</h2>

        <div className="cards-container">
          {selectionCards.map((card) => (
            <div
              key={card.id}
              className="tarot-card"
              onClick={() => navigate(card.path)}
            >
              <img src={card.image} alt={card.title} className="card-art" />
            </div>
          ))}
        </div>
      </div>

      {/* Black Footer */}
      <footer className="selection-footer-black">
        <div className="footer-left">
          <h3 className="footer-title">Don't be a stranger!</h3>
        </div>
        <div className="footer-center">
          <span>Email</span>
          <span className="footer-divider">|</span>
          <span>LinkedIn</span>
          <span className="footer-divider">|</span>
          <span>Instagram</span>
        </div>
        <div className="footer-right">
          <button className="pill-btn-outline">MY RESUME</button>
        </div>
      </footer>
    </div>
  );
}

export default Cardselection;
