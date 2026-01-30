import React from "react";
import maroonLogo from "./assets/Head red@300x.png";
import whiteLogo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";

// FIXED PATHS: Matches your file tree exactly
import gotItThumb from "./assets/UI:UX/Got It/Got it thumbnail.png";
import daybreakThumb from "./assets/UI:UX/Daybreak/Daybreak thumbnail.png";
import descentThumb from "./assets/UI:UX/The Descent/The Descent thumbnail.png";

import "./Index.css";

function App() {
  const projects = [
    {
      id: "gotit",
      title: "Got It",
      category: "Website",
      image: gotItThumb,
      description:
        "Got It is a study guide website designed to support neurodiverse electrical trades students. I led the UI design, shaping the overall look and feel of the product.",
    },
    {
      id: "daybreak",
      title: "Daybreak",
      category: "Game",
      image: daybreakThumb,
      description:
        "Daybreak is an online multiplayer survival horror game centered on betrayal and sabotage. I led the visual direction of the in-game UI and character design.",
    },
    {
      id: "descent",
      title: "The Descent",
      category: "Game",
      image: descentThumb,
      description:
        "The Descent is an interactive learning game inspired by Dante's Inferno. This solo project involved illustration and asset production from start to finish.",
    },
  ];

  return (
    <div className="portfolio-site">
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
          <div className="brand-left">
            <img src={maroonLogo} className="brand-img" alt="Mai Logo" />
            <h1 className="brand-text">
              MAI
              <br />
              CRESPO
            </h1>
          </div>

          <div className="bio-right">
            <div className="bio-text-group">
              <p className="bio-para">
                Hello, I'm a <strong>UI/UX Designer</strong> with a strong
                background in <br />
                <strong>Illustration and Graphic Design</strong>. Aside from
                problem-solving <br />
                through tech, I like to draw crazy weird dark things.
              </p>
              <button className="pill-btn">PICK A CARD</button>
            </div>

            <div className="profile-wrapper">
              <div className="maroon-disk"></div>
              <img src={me} className="profile-img" alt="Mai" />
              <svg className="curved-svg" viewBox="0 0 100 100">
                <path
                  id="textCircle"
                  d="M 20,50 A 30,30 0 0,1 80,50"
                  fill="transparent"
                />
                <text className="svg-inner-text">
                  <textPath
                    xlinkHref="#textCircle"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    Learn more about me!
                  </textPath>
                </text>
              </svg>
              <span className="or-not">or not...</span>
            </div>
          </div>
        </div>
      </main>

      <section className="featured-projects">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="header-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <h3 className="project-title-header">
                {p.title}{" "}
                <span className="project-category">| {p.category}</span>
              </h3>
              <div className="project-image">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-info">
                <h4>UI/UX Design</h4>
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
          <span>Email</span> | <span>LinkedIn</span> | <span>Instagram</span>
        </div>
        <button className="resume-btn">MY RESUME</button>
      </footer>
    </div>
  );
}

export default App;
