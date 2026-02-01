import React from "react";
import "./CaseStudy.css";

import headerImg from "./assets/UI:UX/Got It/Case study headers_Got It.png";
import homepageImg from "./assets/UI:UX/Got It/Homepage.png";
import solutionImg from "./assets/UI:UX/Got It/solution.png";
import mockupImg from "./assets/UI:UX/Got It/Mockup.png";
import brochureImg from "./assets/UI:UX/Got It/Got It Brochure.jpg";
import impactImg from "./assets/UI:UX/Got It/resultAndImpact.png";
import contributionsImg from "./assets/UI:UX/Got It/myContributions.png";

function GotItCaseStudy() {
  return (
    <div className="case-study-page">
      <header className="cs-header">
        <img src={headerImg} alt="Got It Header" className="full-width" />
      </header>

      <section className="cs-content">
        <div className="cs-intro">
          <h1>Got It</h1>
          <p>Confidence starts with clarity.</p>
          <img src={homepageImg} alt="Homepage Mockup" className="shadow" />
        </div>

        <div className="cs-section">
          <h2>The Solution</h2>
          <img src={solutionImg} alt="Solution Icons" />
          <img src={mockupImg} alt="Web and Mobile Mockups" />
        </div>

        <div className="cs-section">
          <h2>Brochure & Print</h2>
          <img src={brochureImg} alt="Got It Brochure" />
        </div>

        <div className="cs-section">
          <img src={impactImg} alt="Results and Impact" />
        </div>

        <div className="cs-section">
          <img src={contributionsImg} alt="My Contributions" />
        </div>
      </section>
    </div>
  );
}

export default GotItCaseStudy;
