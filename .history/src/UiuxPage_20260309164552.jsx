import React from "react";
import { useNavigate } from "react-router-dom";
import "./GraphicDesignPage.css";
import whiteLogo from "./assets/Head@300x.png";

import DaybreakThumb from "./assets/UI-UX/Daybreak/DaybreakThumbnail.png";
import GotItThumb from "./assets/UI-UX/GotIt/GotItThumbnail.png";
import DescentThumb from "./assets/UI-UX/TheDescent/TheDescentThumbnail.png";

const UiuxPage = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: "Daybreak",
      cat: "Horror | Game",
      desc: "Daybreak is an online multiplayer survival horror game centered on betrayal and sabotage as players compete to reach the finish line. I led the visual direction of the game, designing the world map, villain characters, and promotional materials.",
      img: DaybreakThumb,
      extraClass: "",
      route: "/project/daybreak",
    },
    {
      id: 2,
      name: "Got It",
      cat: "Study Guide | Website",
      desc: "Got It is a study guide website designed to support neurodiverse electrical trades students. I led the UI design, shaping the overall look and feel of the product and ensuring the app and marketing materials were cohesive and visually aligned.",
      img: GotItThumb,
      extraClass: "",
      route: "/project/gotit",
    },
    {
      id: 3,
      name: "The Descent",
      cat: "Horror | Interactive Learning Game",
      desc: "The Descent is an interactive learning game inspired by Dante's Inferno, guiding players through the nine circles of Hell while exploring morality, choice, and transformation. This was a solo project in which I handled illustration, prototyping, and asset production from start to finish.",
      img: DescentThumb,
      extraClass: "",
      route: "/project/descent",
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
        <nav className="nav-pill">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <div className="nav-links">
            <span className="nav-item" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="nav-sep">|</span>
            <span
              className="nav-item active"
              onClick={() => navigate("/pick-a-card")}
            >
              Works
            </span>
            <span className="nav-sep">|</span>
            <span className="nav-item" onClick={() => navigate("/about-me")}>
              About Me
            </span>
          </div>
          <img src={whiteLogo} className="nav-logo" alt="logo" />
        </nav>

        <div className="scrollable-content">
          <h1 className="project-page-title">UI/UX Design Projects</h1>
          <div className="title-separator">
            <hr />
          </div>

          <div className="gd-grid">
            {projects.map((p) => (
              <div key={p.id} className={`project-item ${p.extraClass}`}>
                <h2 className="project-name">{p.name}</h2>
                <div className="project-card2">
                  <img src={p.img} alt={p.name} />
                  <div className="gd-project-info">
                    <h3>{p.cat}</h3>
                    <p>{p.desc}</p>
                    <button
                      className="view-more-btn"
                      onClick={() => navigate(p.route)}
                    >
                      VIEW MORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="footer-pill">
          <h3 className="footer-text">Don't be a stranger!</h3>
          <div className="nav-links">
            <a href="mailto:yomaicrespo@gmail.com" className="nav-item">
              Email
            </a>
            <span className="nav-sep">|</span>
            <a
              href="https://linkedin.com/in/mai-crespo/ "
              target="_blank"
              rel="noreferrer"
              className="nav-item"
            >
              LinkedIn
            </a>
            <span className="nav-sep">|</span>
            <a
              href="https://instagram.com/heymaicomics/ "
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
};

export default UiuxPage;
