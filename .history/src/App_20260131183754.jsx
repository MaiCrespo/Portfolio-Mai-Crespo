import React from "react";
import { useNavigate } from "react-router-dom";
import whiteLogo from "./assets/Head@300x.png";
import gotItThumb from "./assets/UI:UX/Got It/Got it thumbnail.png";
import "./index.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="portfolio-site">
      <nav className="main-nav">
        <img src={whiteLogo} className="nav-logo-left" alt="logo" />
        <div className="nav-links-center">
          <span className="nav-item bold" onClick={() => navigate("/")}>
            Home
          </span>
          <div className="v-line"></div>
          <span className="nav-item" onClick={() => navigate("/pick-a-card")}>
            Works
          </span>
        </div>
      </nav>

      <section className="featured-projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div
            className="project-card"
            onClick={() => navigate("/project/gotit")}
          >
            <h3 className="project-header">
              Got It <span className="p-cat">| Website</span>
            </h3>
            <div className="p-image-box">
              <img src={gotItThumb} alt="Got It" />
            </div>
            <button className="view-more-btn">VIEW MORE</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
