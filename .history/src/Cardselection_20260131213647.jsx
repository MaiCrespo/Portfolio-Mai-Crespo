import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cardselection.css";

// Assets
import whiteLogo from "./assets/Head@300x.png";

function Cardselection() {
  const navigate = useNavigate();

  // Ensure these image paths match your renamed folders (UI-UX instead of UI:UX)
  const cards = [
    {
      id: "got-it",
      title: "Got It",
      category: "UI/UX Design",
      image: "./assets/UI-UX/Got It/Thumbnail.png",
      path: "/got-it",
    },
  ];

  return (
    <div className="selection-page-wrapper">
      {/* Background Orbs */}
      <div className="selection-gradient-orbs">
        <div className="sel-orb sel-orb-1"></div>
        <div className="sel-orb sel-orb-2"></div>
      </div>

      {/* Navigation Pill - Fixed to top */}
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

      {/* Main Content */}
      <main className="card-grid-container">
        <h1 className="grid-title">Selected Works</h1>

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
                <p className="card-category">{card.category}</p>
                <h2 className="card-title">{card.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Solid Black Footer */}
      <footer className="selection-footer">
        <div className="footer-left">
          <h3>Don't be a stranger!</h3>
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
