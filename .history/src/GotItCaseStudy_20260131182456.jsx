import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import whiteLogo from "../../assets/Head@300x.png";

import headerImg from "../../assets/UI:UX/Got It/Case study headers_Got It.png";
import homepageImg from "../../assets/UI:UX/Got It/Homepage.png";
import solutionImg from "../../assets/UI:UX/Got It/solution.png";
import mockupImg from "../../assets/UI:UX/Got It/Mockup.png";
import brochureImg from "../../assets/UI:UX/Got It/Got It Brochure.jpg";
import impactImg from "../../assets/UI:UX/Got It/resultAndImpact.png";
import contributionsImg from "../../assets/UI:UX/Got It/myContributions.png";

function GotItCaseStudy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-container">
      <nav className="main-nav cs-nav">
        <img
          src={whiteLogo}
          className="nav-logo-left"
          alt="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        <div className="nav-links-center">
          <span className="nav-item" onClick={() => navigate("/")}>
            Home
          </span>
          <div className="v-line"></div>
          <span className="nav-item" onClick={() => navigate("/pick-a-card")}>
            Works
          </span>
        </div>
      </nav>

      <header className="cs-hero">
        <img src={headerImg} alt="Got It Header" className="cs-header-img" />
      </header>

      <main className="cs-body">
        <section className="cs-section">
          <img
            src={homepageImg}
            alt="Got It Homepage"
            className="cs-full-asset"
          />
        </section>

        <section className="cs-section">
          <img src={solutionImg} alt="The Solution" className="cs-full-asset" />
          <img src={mockupImg} alt="Device Mockups" className="cs-full-asset" />
        </section>

        <section className="cs-section">
          <img
            src={brochureImg}
            alt="Got It Brochure"
            className="cs-full-asset"
          />
        </section>

        <section className="cs-section">
          <img
            src={impactImg}
            alt="Results and Impact"
            className="cs-full-asset"
          />
        </section>

        <section className="cs-section">
          <img
            src={contributionsImg}
            alt="My Contributions"
            className="cs-full-asset"
          />
        </section>
      </main>

      <footer className="footer cs-footer">
        <button className="pill-btn" onClick={() => navigate("/pick-a-card")}>
          BACK TO WORKS
        </button>
      </footer>
    </div>
  );
}

export default GotItCaseStudy;
