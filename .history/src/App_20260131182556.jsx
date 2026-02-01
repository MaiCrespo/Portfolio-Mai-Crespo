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
        "Got It is a study guide website designed to support neurodiverse electrical trades students. I led the UI design, shaping the overall look and feel.",
    },
    {
      id: "daybreak",
      title: "Daybreak",
      category: "Game",
      image: daybreakThumb,
      description:
        "Daybreak is an online multiplayer survival horror game centered on betrayal and sabotage. I led the visual direction of the in-game UI.",
    },
    {
      id: "descent",
      title: "The Descent",
      category: "Game",
      image: descentThumb,
      description:
        "The Descent is an interactive learning game inspired by Dante's Inferno. This was a solo project handling illustration and asset production.",
    },
  ];

  return (
    <div className="portfolio-site">
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
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
          <p className="bio-para-center">
            Hello, I'm a <strong>UI/UX Designer</strong> with a strong
            background in <strong>Illustration and Graphic Design</strong>.
            Aside from problem-solving through tech, I like to draw crazy weird
            dark things.
          </p>
          <button className="pill-btn" onClick={() => navigate("/pick-a-card")}>
            PICK A CARD
          </button>
        </div>
      </main>

      <section className="featured-projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="header-line"></div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div
              key={p.id}
              className="project-card"
              onClick={() => navigate(`/project/${p.id}`)}
            >
              <h3 className="project-header">
                {p.title} <span className="p-cat">| {p.category}</span>
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
          <a href="mailto:yomaicrespo@gmail.com" className="footer-link">
            Email
          </a>
          <span>|</span>
          <a
            href="https://www.linkedin.com/in/mai-crespo/"
            target="blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <span>|</span>
          <a
            href="https://www.instagram.com/heymaicomics/"
            target="blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
        </div>
        <a
          href="/assets/PDFs/Mai Crespo Resume.pdf"
          target="blank"
          rel="noopener noreferrer"
        >
          <button className="resume-btn">MY RESUME</button>
        </a>
      </footer>
    </div>
  );
}

export default App;
