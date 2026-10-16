import React from "react";
import { useNavigate } from "react-router-dom";
import "./UiuxPage.css";

// Assets
import logo from "./assets/Head@300x.png";

import DaybreakThumb from "./assets/UI-UX/Daybreak/DaybreakThumbnail.png";
import GotItThumb from "./assets/UI-UX/GotIt/GotItThumbnail.png";
import DescentThumb from "./assets/UI-UX/TheDescent/TheDescentThumbnail.png";

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

function UiuxPage() {
  const navigate = useNavigate();

  return (
    <div className="uiux-page">
      {/* HEADER */}
      <header className="uiux-header">
        <button
          type="button"
          className="uiux-brand"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <img src={logo} alt="" className="uiux-logo" />
          <span className="uiux-brand-name">MAI CRESPO</span>
        </button>

        <h1 className="uiux-page-title">UI/UX DESIGN</h1>
      </header>

      {/* MAIN CONTENT */}
      <main className="uiux-main">
        <h2 className="uiux-section-title">CASE STUDIES</h2>

        {/* PROJECT GRID */}
        <div className="uiux-projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="uiux-project">
              {/* PROJECT TITLE */}
              <h3 className="uiux-project-title">{project.name}</h3>

              {/* PROJECT IMAGE */}
              <div className="uiux-image-container">
                <img
                  src={project.img}
                  alt={`${project.name} project thumbnail`}
                />
              </div>

              {/* PROJECT INFORMATION */}
              <div className="uiux-project-info">
                <h4 className="uiux-category">{project.cat}</h4>

                <p className="uiux-description">{project.desc}</p>

                <button
                  type="button"
                  className="uiux-view-more"
                  onClick={() => navigate(project.route)}
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

          <span className="uiux-footer-sep">|</span>

          <a
            href="https://linkedin.com/in/mai-crespo/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <span className="uiux-footer-sep">|</span>

          <a
            href="https://instagram.com/heymaicomics/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>

        <button
          type="button"
          className="uiux-footer-about"
          onClick={() => navigate("/about-me")}
        >
          ABOUT ME
        </button>

        <a
          href="/MaiCrespoResume.pdf"
          target="_blank"
          rel="noreferrer"
          className="uiux-resume-link"
        >
          MY RESUME
        </a>
      </footer>
    </div>
  );
}

export default UiuxPage;
