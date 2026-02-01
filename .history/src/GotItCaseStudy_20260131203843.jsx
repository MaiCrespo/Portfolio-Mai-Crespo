import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GotItCaseStudy.css";

// Path Fix: Your explorer shows assets is in the same 'src' folder
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
    <div className="gotit-container">
      <nav className="gotit-nav">
        <div
          className="gotit-nav-left"
          onClick={() => navigate("/pick-a-card")}
        >
          « UI/UX Design
        </div>
        <div className="gotit-nav-center">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/pick-a-card")}>Works</span>
        </div>
        <img
          src={whiteLogo}
          alt="Logo"
          className="gotit-logo"
          onClick={() => navigate("/")}
        />
      </nav>

      <header className="gotit-hero">
        <img src={headerImg} className="gotit-img-full" alt="Header" />
      </header>

      <main className="gotit-content-wrap">
        <img
          src={homepageImg}
          className="gotit-img-responsive"
          alt="Homepage"
        />
        <img
          src={solutionImg}
          className="gotit-img-responsive"
          alt="Solution"
        />
        <img src={mockupImg} className="gotit-img-responsive" alt="Mockup" />
        <img
          src={brochureImg}
          className="gotit-img-responsive"
          alt="Brochure"
        />
        <img src={impactImg} className="gotit-img-responsive" alt="Impact" />
        <img
          src={contributionsImg}
          className="gotit-img-responsive"
          alt="Contributions"
        />
      </main>

      <footer className="gotit-footer">
        <button className="pill-btn" onClick={() => navigate("/pick-a-card")}>
          BACK TO WORKS
        </button>
      </footer>
    </div>
  );
}

export default GotItCaseStudy;
