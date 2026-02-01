import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      {/* FIXED NAV BAR */}
      <nav className="cs-sticky-nav">
        <div className="cs-nav-inner">
          <div className="cs-nav-left" onClick={() => navigate("/")}>
            <span>« UI/UX Design</span>
          </div>
          <div className="cs-nav-center">
            <span onClick={() => navigate("/")}>Home</span>
            <div className="v-line-small"></div>
            <span onClick={() => navigate("/pick-a-card")}>Works</span>
          </div>
          <div className="cs-nav-right">
            <img src={whiteLogo} alt="logo" onClick={() => navigate("/")} />
          </div>
        </div>
      </nav>

      {/* FULL WIDTH HEADER */}
      <header className="cs-hero-section">
        <img src={headerImg} alt="Header" className="cs-hero-full" />
      </header>

      {/* CONSTRAINED CONTENT */}
      <main className="cs-main-content">
        <img src={homepageImg} className="cs-responsive-img" alt="Homepage" />
        <img src={solutionImg} className="cs-responsive-img" alt="Solution" />
        <img src={mockupImg} className="cs-responsive-img" alt="Mockups" />
        <img src={brochureImg} className="cs-responsive-img" alt="Brochure" />
        <img src={impactImg} className="cs-responsive-img" alt="Impact" />
        <img
          src={contributionsImg}
          className="cs-responsive-img"
          alt="Contributions"
        />
      </main>

      <footer className="cs-footer-area">
        <button className="pill-btn" onClick={() => navigate("/pick-a-card")}>
          BACK TO WORKS
        </button>
      </footer>
    </div>
  );
}

export default GotItCaseStudy;
