import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import whiteLogo from "./assets/Head@300x.png";

// Asset imports
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
    <div className="case-study-page">
      {/* Specific Case Study Nav to prevent breaking landing page nav */}
      <nav className="cs-nav">
        <div className="cs-nav-content">
          <img
            src={whiteLogo}
            className="cs-logo"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <div className="cs-nav-links">
            <span onClick={() => navigate("/")}>Home</span>
            <span onClick={() => navigate("/pick-a-card")}>Works</span>
          </div>
        </div>
      </nav>

      <header className="cs-header">
        <img src={headerImg} alt="Header" className="cs-hero-img" />
      </header>

      <main className="cs-container">
        <section className="cs-content-block">
          <img src={homepageImg} alt="Homepage" className="cs-image" />
        </section>

        <section className="cs-content-block">
          <img src={solutionImg} alt="The Solution" className="cs-image" />
        </section>

        <section className="cs-content-block">
          <img src={mockupImg} alt="Mockups" className="cs-image" />
        </section>

        <section className="cs-content-block">
          <img src={brochureImg} alt="Brochure" className="cs-image" />
        </section>

        <section className="cs-content-block">
          <img src={impactImg} alt="Results and Impact" className="cs-image" />
        </section>

        <section className="cs-content-block">
          <img
            src={contributionsImg}
            alt="My Contributions"
            className="cs-image"
          />
        </section>
      </main>

      <footer className="cs-footer">
        <button className="pill-btn" onClick={() => navigate("/")}>
          BACK TO WORKS
        </button>
      </footer>
    </div>
  );
}

export default GotItCaseStudy;
