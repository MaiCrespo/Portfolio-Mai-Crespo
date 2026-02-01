import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GotItCaseStudy.css";

// Asset imports - Corrected paths based on your folder structure
import whiteLogo from "./assets/Head@300x.png";
import headerImg from "./assets/UI:UX/Got It/Case study headers_Got It.png";
import homepageImg from "./assets/UI:UX/Got It/Homepage.png";
import solutionImg from "./assets/UI:UX/Got It/solution.png";
import mockupImg from "./assets/UI:UX/Got It/Mockup.png";
import brochureImg from "./assets/UI:UX/Got It/Got It Brochure.jpg";
import impactImg from "./assets/UI:UX/Got It/resultAndImpact.png";
import contributionsImg from "./assets/UI:UX/Got It/myContributions.png";

function GotItCaseStudy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cs-page-wrapper">
      {/* Background Orbs */}
      <div className="cs-gradient-orbs">
        <div className="cs-orb cs-orb-1"></div>
        <div className="cs-orb cs-orb-2"></div>
      </div>

      {/* Fixed Navigation Bar */}
      <nav className="main-nav">
        <div className="nav-back-link" onClick={() => navigate("/pick-a-card")}>
          « UI/UX Design
        </div>

        <div className="nav-links-center">
          <span className="nav-item" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="nav-item" onClick={() => navigate("/pick-a-card")}>
            Works
          </span>
          <span className="nav-item">About Me</span>
        </div>

        <img
          src={whiteLogo}
          className="nav-logo-right"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </nav>

      {/* Full Width Header Image */}
      <header className="cs-hero">
        <img src={headerImg} alt="Got It Header" className="cs-header-img" />
      </header>

      {/* Project Content in a Dark Transparent Card */}
      <main className="cs-content-card">
        <img src={homepageImg} className="cs-responsive-img" alt="Homepage" />
        <img
          src={solutionImg}
          className="cs-responsive-img"
          alt="The Solution"
        />
        <img src={mockupImg} className="cs-responsive-img" alt="App Mockup" />
        <img
          src={brochureImg}
          className="cs-responsive-img"
          alt="Print Brochure"
        />
        <img
          src={impactImg}
          className="cs-responsive-img"
          alt="Impact Results"
        />
        <img
          src={contributionsImg}
          className="cs-responsive-img"
          alt="My Contributions"
        />
      </main>

      {/* Consistent Footer */}
      <footer className="footer">
        <h3 className="footer-title">Don't be a stranger!</h3>
        <div className="footer-links">
          <a href="#">Email</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
        <button className="pill-btn">MY RESUME</button>
      </footer>
    </div>
  );
}

export default GotItCaseStudy;
