import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./GotItCaseStudy.css";

// Assets - Path updated to match your sidebar
import whiteLogo from "./assets/Head@300x.png";
import fullImage from "./assets/PDFs/UI-UX/Got It/GotItContent.png";

function GotItCaseStudy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-layout">
      <nav className="nav-pill">
        <div className="nav-links">
          <span onClick={() => navigate("/")} className="nav-item">
            Home
          </span>
          <span className="nav-sep">|</span>
          <span className="nav-item active">Works</span>
          <span className="nav-sep">|</span>
          <span className="nav-item">About Me</span>
        </div>
        <img src={whiteLogo} className="pill-logo" alt="logo" />
      </nav>

      <main className="content-area study-scroller">
        <img src={fullImage} className="full-study-img" alt="Case Study" />
      </main>

      <footer className="footer-pill">
        <h2 className="footer-headline">Don't be a stranger!</h2>
        <div className="social-links">
          <span>Email</span> <span className="nav-sep">|</span>
          <span>LinkedIn</span> <span className="nav-sep">|</span>
          <span>Instagram</span>
        </div>
        <button className="res-btn">MY RESUME</button>
      </footer>
    </div>
  );
}

export default GotItCaseStudy;
