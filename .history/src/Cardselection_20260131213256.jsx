import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cardselection.css";

// Assets - Ensure these paths match your folder structure exactly
import whiteLogo from "./assets/Head@300x.png";

function Cardselection() {
  const navigate = useNavigate();

  const cards = [
    {
      id: "got-it",
      title: "Got It",
      category: "UI/UX Design",
      image: "./assets/UI-UX/Got It/Thumbnail.png", // Ensure UI-UX folder name matches
      path: "/got-it",
    },
    {
      id: "daybreak",
      title: "Daybreak",
      category: "UI/UX Design",
      image: "./assets/UI-UX/Daybreak/Thumbnail.png",
      path: "/daybreak",
    },
    // Add more cards as needed
  ];

  return (
    <div className="selection-page-wrapper">
      {/* Background Orbs */}
      <div className="selection-gradient-orbs">
        <div className="sel-orb sel-orb-1"></div>
        <div className="sel-orb sel-orb-2"></div>
      </div>

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

      {/* Card Grid Container */}
      <main className="card-grid-container">
        <div className="grid-header">
          <h1 className="grid-title">Selected Works</h1>
        </div>

        <div className="work-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className="work-card"
              onClick={() => navigate(card.path)}
            >
              <div className="card-image-wrapper">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-info">
                <span className="card-category">{card.category}</span>
                <h2 className="card-title">{card.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Pure Black Footer */}
      <footer className="cs-footer-black">
        <div className="footer-left">
          <h3 className="footer-title">Don't be a stranger!</h3>
        </div>
        <div className="footer-center">
          <span className="footer-link">Email</span>
          <span className="footer-divider">|</span>
          <span className="footer-link">LinkedIn</span>
          <span className="footer-divider">|</span>
          <span className="footer-link">Instagram</span>
        </div>
        <div className="footer-right">
          <button className="pill-btn-outline">MY RESUME</button>
        </div>
      </footer>
    </div>
  );
}

export default Cardselection;
