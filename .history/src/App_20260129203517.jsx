import { useState } from "react";
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
      image: "/assets/gotit.png", // Update with your actual image path
    },
    {
      id: "daybreak",
      title: "Daybreak",
      category: "Game",
      description:
        "Daybreak is an online multiplayer survival horror game centered on betrayal and sabotage as players compete to reach the finish line. I led the visual direction of the in-game UI design, villain characters, and promotional materials.",
      image: "/assets/daybreak.png", // Update with your actual image path
    },
    {
      id: "descent",
      title: "The Descent",
      category: "Game",
      description:
        "The Descent is an interactive learning game inspired by Dante's Inferno, guiding players through the nine circles of Hell while exploring morality, choice, and transformation. This was a solo project in which I handled illustration, prototyping, and asset production from start to finish.",
      image: "/assets/descent.png", // Update with your actual image path
    },
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#works" className="nav-link">
            Works
          </a>
          <a href="#about" className="nav-link">
            About Me
          </a>
        </div>
        <div className="nav-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 8C18 8 16 9 15 11C14 9 12 8 10 8C7 8 5 10 5 13C5 17 9 21 15 26L20 30L25 26C31 21 35 17 35 13C35 10 33 8 30 8C28 8 26 9 25 11C24 9 22 8 20 8Z"
              fill="#F4E4C1"
            />
          </svg>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <div className="devil-logo">
              <svg viewBox="0 0 200 200" fill="none">
                {/* Devil horns */}
                <path d="M60 40 Q50 20 40 30 Q45 45 55 50" fill="#6B1515" />
                <path
                  d="M140 40 Q150 20 160 30 Q155 45 145 50"
                  fill="#6B1515"
                />
                {/* Devil head */}
                <ellipse cx="100" cy="100" rx="70" ry="80" fill="#6B1515" />
                {/* Eyes */}
                <ellipse cx="75" cy="85" rx="15" ry="20" fill="#F4E4C1" />
                <ellipse cx="125" cy="85" rx="15" ry="20" fill="#F4E4C1" />
                <circle cx="75" cy="90" r="8" fill="#6B1515" />
                <circle cx="125" cy="90" r="8" fill="#6B1515" />
                {/* Mouth - evil grin */}
                <path
                  d="M60 120 Q100 145 140 120 Q135 132 130 138 L125 143 Q100 155 75 143 L70 138 Q65 132 60 120Z"
                  fill="#F4E4C1"
                />
                {/* Teeth */}
                <path
                  d="M70 120 L75 133 L80 120 L85 133 L90 120 L95 133 L100 120 L105 133 L110 120 L115 133 L120 120 L125 133 L130 120"
                  stroke="#6B1515"
                  strokeWidth="3"
                  fill="none"
                />
                {/* Cheek curves */}
                <path
                  d="M50 100 Q45 110 50 115"
                  stroke="#F4E4C1"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M150 100 Q155 110 150 115"
                  stroke="#F4E4C1"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h1 className="main-title">
              <span className="title-line">MAI</span>
              <span className="title-line">CRESPO</span>
            </h1>
          </div>

          <div className="intro-section">
            <div className="intro-text">
              <p className="intro-greeting">
                Hello, I'm a <strong>UI/UX Designer</strong> with a strong
                background in <strong>Illustration and Graphic Design</strong>.
                Aside from problem-solving through tech, I like to draw crazy
                weird dark things.
              </p>
              <button className="pick-card-btn">PICK A CARD</button>
            </div>

            <div className="profile-container">
              <div className="profile-circle">
                <div className="profile-ring">
                  <svg className="ring-svg" viewBox="0 0 200 200">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                      />
                    </defs>
                    <text className="ring-text">
                      <textPath href="#circlePath">
                        Learn more about me! • Learn more about me! •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="profile-image">
                  {/* Replace with your actual image path */}
                  <div className="profile-placeholder"></div>
                </div>
              </div>
              <p className="profile-caption">or not...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
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
