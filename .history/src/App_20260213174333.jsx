import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Assets
import whiteLogo from "./assets/Head@300x.png";
import gotItThumb from "./assets/UI-UX/GotIt/GotItThumbnail.png";
import daybreakThumb from "./assets/UI-UX/Daybreak/DaybreakThumbnail.png";
import descentThumb from "./assets/UI-UX/TheDescent/TheDescentThumbnail.png";
import face1 from "./assets/faces/Face1.png";
import face2 from "./assets/faces/Face2.png";
import face3 from "./assets/faces/Face3.png";
import face4 from "./assets/faces/Face4.png";
import face5 from "./assets/faces/Face5.png";
import face6 from "./assets/faces/Face6.png";

function App() {
  const navigate = useNavigate();

  // Mouse position for blur effect
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
      title: "UI Design Lead and Product Designer",
      category: "STUDY GUIDE | WEBSITE",
      image: gotItThumb,
      desc: "Got It is a study guide website designed to support neurodiverse electrical trades students. I led the UI design, shaping the overall look and feel of the product and ensuring the app and marketing materials were cohesive and visually aligned.",
    },
    {
      id: "daybreak",
      title: "Art Director and UI Designer",
      category: "HORROR | GAME",
      image: daybreakThumb,
      desc: "Daybreak is an online multiplayer survival horror game centered on betrayal and sabotage as players compete to reach the finish line. I led the visual direction of the game, designing the world map, villain characters, and promotional materials.",
    },
    {
      id: "descent",
      title: "Creative Director & Prototyper",
      category: "HORROR | INTERACTIVE LEARNING GAME",
      image: descentThumb,
      desc: "The Descent is an interactive learning game inspired by Dante's Inferno, guiding players through the nine circles of Hell while exploring morality, choice, and transformation. This was a solo project in which I handled illustration, prototyping, and asset production from start to finish.",
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
            <span className="nav-item" onClick={() => navigate("/about-me")}>
              About Me
            </span>
          </div>
          <img src={whiteLogo} className="nav-logo" alt="logo" />
        </nav>

        <main className="hero-viewport">
          {/* Floating Faces - z-index 1: above orbs, below content */}
          <div className="faces-container">
            <img src={face1} className="face face-1" alt="" />
            <img src={face2} className="face face-2" alt="" />
            <img src={face3} className="face face-3" alt="" />
            <img src={face4} className="face face-4" alt="" />
            <img src={face5} className="face face-5" alt="" />
            <img src={face6} className="face face-6" alt="" />
          </div>

          {/* Hero content - z-index 2: above faces */}
          <div className="hero-content">
            <div className="brand-title">
              <div className="text-layer blurred">
                <span>MAI</span>
                <span>CRESPO</span>
              </div>
              <div className="text-layer sharp">
                <span>MAI</span>
                <span>CRESPO</span>
              </div>
            </div>

            <p className="bio-text">
              Hello, I'm a <strong>UI/UX Designer</strong> with a strong
              background in <strong>Illustration and Graphic Design</strong>.
              Aside from <strong>problem-solving</strong> through tech, I like
              to draw <strong>crazy weird dark things</strong>.
            </p>
            <button
              className="pill-btn"
              onClick={() => navigate("/pick-a-card")}
            >
              PICK A CARD
            </button>
          </div>
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
                <div className="img-container">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="project-info">
                  <span className="p-cat">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <button className="pill-btn view-more">VIEW MORE</button>
                </div>
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
              href="https://linkedin.com/in/mai-crespo/"
              target="_blank"
              rel="noreferrer"
              className="nav-item"
            >
              LinkedIn
            </a>
            <span className="nav-sep">|</span>
            <a
              href="https://instagram.com/heymaicomics/"
              target="_blank"
              rel="noreferrer"
              className="nav-item"
            >
              Instagram
            </a>
          </div>
          <a href="/MaiCrespoResume.pdf" target="_blank" rel="noreferrer">
            <button className="pill-btn">MY RESUME</button>
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
