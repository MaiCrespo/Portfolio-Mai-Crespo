import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

import logo from "./assets/Head@300x.png";

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
      desc: "A multiplayer survival horror game of betrayal and sabotage. I led the visual direction, designing the world, characters, and assets.",
      img: DaybreakThumb,
      route: "/project/daybreak",
    },
    {
      id: 2,
      name: "Got It",
      cat: "Study Guide | Website",
      desc: "A study guide for neurodiverse electrical students. I led the UI design, ensuring a cohesive identity for the app and marketing.",
      img: GotItThumb,
      route: "/project/gotit",
    },
    {
      id: 3,
      name: "The Descent",
      cat: "Horror | Interactive Learning Game",
      desc: "An interactive game exploring morality via Dante's Inferno. A solo project covering illustration, prototyping, and asset production.",
      img: DescentThumb,
      route: "/project/descent",
    },
  ];

  return (
    <div className="uiux-page">
      {/* HEADER */}
      <header className="uiux-header">
        <div className="uiux-brand" onClick={() => navigate("/")}>
          <img src={logo} alt="Mai Crespo logo" className="uiux-logo" />
          <h1>MAI CRESPO</h1>
        </div>

        <h2 className="uiux-page-title">UI/UX DESIGN</h2>
      </header>

      {/* MAIN CONTENT */}
      <main className="uiux-main">
        <h2 className="uiux-section-title">CASE STUDIES</h2>

        <div className="uiux-projects-grid">
          {projects.map((p) => (
            <article key={p.id} className="uiux-project">
              <h3 className="uiux-project-title">{p.name}</h3>

              <div className="uiux-image-container">
                <img src={p.img} alt={p.name} />
              </div>

              <div className="uiux-project-info">
                <h4>{p.cat}</h4>
                <p>{p.desc}</p>

                <button
                  className="uiux-view-more"
                  onClick={() => navigate(p.route)}
                >
                  VIEW MORE
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="uiux-footer">
        <div className="uiux-footer-links">
          <a href="mailto:yomaicrespo@gmail.com">Email</a>
          <span>|</span>
          <a
            href="https://linkedin.com/in/mai-crespo/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>|</span>
          <a
            href="https://instagram.com/heymaicomics/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>

        <h2 className="uiux-footer-about" onClick={() => navigate("/about-me")}>
          ABOUT ME
        </h2>

        <a href="/MaiCrespoResume.pdf" target="_blank" rel="noreferrer">
          <button className="uiux-resume-btn">MY RESUME</button>
        </a>
      </footer>
    </div>
  );
};

export default UiuxPage;
