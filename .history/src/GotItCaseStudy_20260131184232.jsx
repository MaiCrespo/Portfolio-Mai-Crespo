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
    <div className="case-study-container">
      <nav className="main-nav">
        <img
          src={whiteLogo}
          className="nav-logo-left"
          onClick={() => navigate("/")}
          alt="logo"
        />
      </nav>

      <header className="cs-hero">
        <img src={headerImg} alt="Header" className="cs-full-asset" />
      </header>

      <main className="cs-body">
        <img src={homepageImg} alt="Homepage" className="cs-full-asset" />
        <img src={solutionImg} alt="Solution" className="cs-full-asset" />
        <img src={mockupImg} alt="Mockup" className="cs-full-asset" />
        <img src={brochureImg} alt="Brochure" className="cs-full-asset" />
        <img src={impactImg} alt="Impact" className="cs-full-asset" />
        <img
          src={contributionsImg}
          alt="Contributions"
          className="cs-full-asset"
        />
      </main>

      <footer className="footer" style={{ justifyContent: "center" }}>
        <button className="pill-btn" onClick={() => navigate("/")}>
          BACK HOME
        </button>
      </footer>
    </div>
  );
}

export default GotItCaseStudy;
