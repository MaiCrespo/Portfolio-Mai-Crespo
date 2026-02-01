import React from "react";
import { useNavigate } from "react-router-dom";
import whiteLogo from "./assets/Head@300x.png";
import gotItThumb from "./assets/UI:UX/Got It/Got it thumbnail.png";
import daybreakThumb from "./assets/UI:UX/Daybreak/Daybreak thumbnail.png";
import descentThumb from "./assets/UI:UX/The Descent/The Descent thumbnail.png";
import "./index.css";

function App() {
  const navigate = useNavigate();

  const projects = [
    {
      id: "gotit",
      title: "Got It",
      category: "Website",
      image: gotItThumb,
      description:
        "Got It is a study guide website designed to support neurodiverse electrical trades students.",
    },
    {
      id: "daybreak",
      title: "Daybreak",
      category: "Game",
      image: daybreakThumb,
      description:
        "Daybreak is an online multiplayer survival horror game centered on betrayal and sabotage.",
    },
    {
      id: "descent",
      title: "The Descent",
      category: "Game",
      image: descentThumb,
      description:
        "The Descent is an interactive learning game inspired by Dante's Inferno.",
    },
  ];

  return (
    <div className="portfolio-site">
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

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
          <div className="v-line"></div>
          <span className="nav-item">About Me</span>
        </div>
      </nav>

      <main className="hero-viewport">
        <div className="hero-content">
          <h1 className="brand-text-center">
            <span className="mai">MAI</span>
            <span className="crespo">CRESPO</span>
          </h1>
          <p>
            Hello, I'm a UI/UX Designer with a strong background in Illustration
            and Graphic Design.
          </p>
          <button className="pill-btn" onClick={() => navigate("/pick-a-card")}>
            PICK A CARD
          </button>
        </div>
      </main>

      <section className="featured-projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div
              key={p.id}
              className="project-card"
              onClick={() => navigate(`/project/${p.id}`)}
            >
              <h3 className="project-header">
                {p.title} | {p.category}
              </h3>
              <div className="p-image-box">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="p-info">
                <p>{p.description}</p>
                <button className="view-more-btn">VIEW MORE</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h3>Don't be a stranger!</h3>
        <div className="footer-links">
          <a href="mailto:yomaicrespo@gmail.com">Email</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
