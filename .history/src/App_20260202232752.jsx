import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Assets
import whiteLogo from "./assets/Head@300x.png";
import gotItThumb from "./assets/UI-UX/GotIt/GotItThumbnail.png";
import daybreakThumb from "./assets/UI-UX/Daybreak/DaybreakThumbnail.png";
import descentThumb from "./assets/UI-UX/TheDescent/TheDescentThumbnail.png";

function App() {
  const navigate = useNavigate();

  // Mouse tracking logic for the spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const root = document.documentElement;
      root.style.setProperty("--mouse-x", `${e.clientX}px`);
      root.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      {/* Background Orbs */}
      <div className="orb-canvas">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="page-layout">
        {/* Navigation */}
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

        {/* Hero Section with Spotlight Shape Blur */}
        <main className="hero-viewport">
          <div className="brand-title">
            {/* Background blurred layer */}
            <div className="text-layer blurred">
              <span>MAI</span>
              <span>CRESPO</span>
            </div>
            {/* Foreground sharp layer that follows the mouse */}
            <div className="text-layer sharp">
              <span>MAI</span>
              <span>CRESPO</span>
            </div>
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

        {/* Featured Projects Section */}
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

        {/* Footer */}
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
