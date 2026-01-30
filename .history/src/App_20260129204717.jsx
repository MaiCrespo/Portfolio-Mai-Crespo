import React, { useState } from "react";
import maroonLogo from "./assets/Head red@300x.png";
import whiteLogo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";
import "./Index.css";

function App() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: "gotit",
      title: "Got It",
      category: "Website",
      description:
        "Got It is a study guide website designed to support neurodiverse electrical trades students. I led the UI design, shaping the overall look and feel of the product and ensuring the app and marketing materials were cohesive and visually aligned.",
      image: "./assets/projects/gotit.png", // Update with your actual path
    },
    {
      id: "daybreak",
      title: "Daybreak",
      category: "Game",
      description:
        "Daybreak is an online multiplayer survival horror game centered on betrayal and sabotage as players compete to reach the finish line. I led the visual direction of the in-game UI design, villain characters, and promotional materials.",
      image: "./assets/projects/daybreak.png", // Update with your actual path
    },
    {
      id: "descent",
      title: "The Descent",
      category: "Game",
      description:
        "The Descent is an interactive learning game inspired by Dante's Inferno, guiding players through the nine circles of Hell while exploring morality, choice, and transformation. This was a solo project in which I handled illustration, prototyping, and asset production from start to finish.",
      image: "./assets/projects/descent.png", // Update with your actual path
    },
  ];

  return (
    <div className="portfolio-site">
      {/* Navigation */}
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

      {/* Hero Section */}
      <main className="hero-viewport">
        <div className="hero-content">
          {/* Left Side: Name and Main Logo */}
          <div className="brand-left">
            <img src={maroonLogo} className="brand-img" alt="Mai Logo" />
            <h1 className="brand-text">
              MAI
              <br />
              CRESPO
            </h1>
          </div>

          {/* Right Side: Bio and Circular Profile */}
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
              {/* Layer 1: Maroon Circle */}
              <div className="maroon-disk"></div>
              {/* Layer 2: Your Photo */}
              <img src={me} className="profile-img" alt="Mai" />
              {/* Layer 3: Curved Text Wrapper */}
              <svg className="curved-svg" viewBox="0 0 100 100">
                <path
                  id="textCircle"
                  d="M 22,12 A 40,40 0 0,1 98,58"
                  fill="transparent"
                />
                <text className="svg-inner-text">
                  <textPath xlinkHref="#textCircle">
                    Learn more about me!
                  </textPath>
                </text>
              </svg>
              <span className="or-not">or not...</span>
            </div>
          </div>
        </div>
      </main>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="header-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card project-${project.id}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <h3 className="project-title-header">
                {project.title}{" "}
                <span className="project-category">| {project.category}</span>
              </h3>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              </div>

              <div className="project-info">
                <h4>UI/UX Design</h4>
                <p className="project-description">{project.description}</p>
                <button className="view-more-btn">VIEW MORE</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Don't be a stranger!</h3>
          <div className="footer-links">
            <a href="mailto:your@email.com" className="footer-link">
              Email
            </a>
            <span className="footer-divider">|</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <span className="footer-divider">|</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
          </div>
          <button className="resume-btn">MY RESUME</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
