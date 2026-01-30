import React from "react";

import myResume from "./assets/PDFs/Mai Crespo Resume.pdf";

import whiteLogo from "./assets/Head@300x.png";
import gotItThumb from "./assets/UI:UX/Got It/Got it thumbnail.png";
import daybreakThumb from "./assets/UI:UX/Daybreak/Daybreak thumbnail.png";
import descentThumb from "./assets/UI:UX/The Descent/The Descent thumbnail.png";

import "./index.css";

function App() {
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
      <div className="glow-bg"></div>

      <nav className="main-nav">
        <div className="nav-links-inner">
          <span className="nav-item bold">Home</span>
          <div className="v-line"></div>
          <span className="nav-item">Works</span>
          <div className="v-line"></div>
          <span className="nav-item">About Me</span>
        </div>
        <img src={whiteLogo} className="nav-icon-small" alt="logo" />
      </nav>

      <main className="hero-viewport">
        <div className="hero-content">
          <h1 className="brand-text">
            MAI
            <br />
            CRESPO
          </h1>

          <p className="bio-para">
            Hello, I'm a <strong>UI/UX Designer</strong> with a strong
            background in <strong>Illustration and Graphic Design</strong>.
            Aside from problem-solving through tech, I like to draw crazy weird
            dark things.
          </p>

          <button className="pill-btn">PICK A CARD</button>
        </div>
      </main>

      <section className="featured-projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="header-line"></div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
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
          <span className="footer-divider">|</span>
          <a
            href="https://linkedin.com/in/mai-crespo/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <span className="footer-divider">|</span>
          <a
            href="https://instagram.com/heymaicomics/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
        </div>

        <a href={myResume} target="_blank" rel="noopener noreferrer">
          <button className="resume-btn">MY RESUME</button>
        </a>
      </footer>
    </div>
  );
}

export default App;
