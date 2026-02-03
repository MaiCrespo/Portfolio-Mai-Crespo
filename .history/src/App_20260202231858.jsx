import React from "react";
import { useNavigate } from "react-router-dom";
import ShapeBlur from "./ShapeBlur"; // Ensure this file exists in your src folder

// Assets
import whiteLogo from "./assets/Head@300x.png";
import gotItThumb from "./assets/UI-UX/GotIt/GotItThumbnail.png";
import daybreakThumb from "./assets/UI-UX/Daybreak/DaybreakThumbnail.png";
import descentThumb from "./assets/UI-UX/TheDescent/TheDescentThumbnail.png";

function App() {
  const navigate = useNavigate();

  const projects = [
    {
      id: "gotit",
      title: "Got It",
      category: "Website",
      image: gotItThumb,
      desc: "A study guide website designed to support neurodiverse electrical trades students.",
    },
    {
      id: "daybreak",
      title: "Daybreak",
      category: "Game",
      image: daybreakThumb,
      desc: "An online multiplayer survival horror game centered on betrayal and sabotage.",
    },
    {
      id: "descent",
      title: "The Descent",
      category: "Game",
      image: descentThumb,
      desc: "An interactive learning game inspired by Dante's Inferno circles.",
    },
  ];

  return (
    <>
      <div className="orb-canvas">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="page-layout">
        <nav className="nav-pill">
          <div className="nav-links">
            <span className="nav-item active">Home</span>
            <span className="nav-sep">|</span>
            <span className="nav-item" onClick={() => navigate("/pick-a-card")}>
              Works
            </span>
            <span className="nav-sep">|</span>
            <span className="nav-item">About Me</span>
          </div>
          <img src={whiteLogo} className="nav-logo" alt="logo" />
        </nav>

        <main className="hero-viewport">
        <h1 className="brand-title">
    <span className="mai-name">MAI</span>
    <span className="crespo-name">CRESPO</span>
  </h1>
  <p className="bio-text">
    Hello, I'm a <strong>UI/UX Designer</strong> with a strong
    background in <strong>Illustration and Graphic Design</strong>.
    Aside from problem-solving through tech, I like to draw crazy weird
    dark things.
  </p>
  <button className="pill-btn" onClick={() => navigate("/pick-a-card")}>
    PICK A CARD
  </button>
          </div>

          <p className="bio-text">
            Hello, I'm a <strong>UI/UX Designer</strong> with a strong
            background in <strong>Illustration and Graphic Design</strong>.
            Aside from problem-solving through tech, I like to draw crazy weird
            dark things.
          </p>
          <button className="pill-btn" onClick={() => navigate("/pick-a-card")}>
            PICK A CARD
          </button>
        </main>

        <section className="featured-projects">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-line"></div>
          <div className="projects-grid">
            {projects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                onClick={() => navigate(`/project/${p.id}`)}
              >
                <h3>
                  {p.title} <span className="p-cat">| {p.category}</span>
                </h3>
                <div className="img-container">
                  <img src={p.image} alt={p.title} />
                </div>
                <p
                  style={{
                    opacity: 0.7,
                    fontSize: "0.95rem",
                    marginBottom: "20px",
                  }}
                >
                  {p.desc}
                </p>
                <button
                  className="pill-btn"
                  style={{ padding: "10px 30px", fontSize: "0.8rem" }}
                >
                  VIEW MORE
                </button>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer-pill">
          <h3 className="footer-text">Don't be a stranger!</h3>
          <div className="nav-links">
            <a href="mailto:yomaicrespo@gmail.com" className="nav-item">
              Email
            </a>
            <span className="nav-sep">|</span>
            <a
              href="https://www.linkedin.com/in/mai-crespo/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
            >
              LinkedIn
            </a>
            <span className="nav-sep">|</span>
            <a
              href="https://www.instagram.com/heymaicomics/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
            >
              Instagram
            </a>
          </div>
          <a
            href="/MaiCrespoResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className="pill-btn">MY RESUME</button>
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
