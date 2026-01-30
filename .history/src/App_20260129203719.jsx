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
                {/* Devil head circle */}
                <circle cx="100" cy="100" r="75" fill="#6B1515" />
                {/* Horns */}
                <path d="M70 30 Q65 15 55 20 L65 40 Z" fill="#6B1515" />
                <path d="M130 30 Q135 15 145 20 L135 40 Z" fill="#6B1515" />
                {/* Eyes - simple circles */}
                <circle cx="75" cy="85" r="18" fill="#F4E4C1" />
                <circle cx="125" cy="85" r="18" fill="#F4E4C1" />
                <circle cx="75" cy="88" r="10" fill="#0A0A0A" />
                <circle cx="125" cy="88" r="10" fill="#0A0A0A" />
                {/* Big grin mouth */}
                <path
                  d="M50 110 Q100 150 150 110"
                  stroke="#F4E4C1"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Teeth - simple vertical lines */}
                <line
                  x1="70"
                  y1="115"
                  x2="70"
                  y2="130"
                  stroke="#6B1515"
                  strokeWidth="4"
                />
                <line
                  x1="85"
                  y1="120"
                  x2="85"
                  y2="135"
                  stroke="#6B1515"
                  strokeWidth="4"
                />
                <line
                  x1="100"
                  y1="125"
                  x2="100"
                  y2="140"
                  stroke="#6B1515"
                  strokeWidth="4"
                />
                <line
                  x1="115"
                  y1="120"
                  x2="115"
                  y2="135"
                  stroke="#6B1515"
                  strokeWidth="4"
                />
                <line
                  x1="130"
                  y1="115"
                  x2="130"
                  y2="130"
                  stroke="#6B1515"
                  strokeWidth="4"
                />
                {/* Smile dimples */}
                <path
                  d="M45 95 Q40 100 42 105"
                  stroke="#F4E4C1"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M155 95 Q160 100 158 105"
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
                  <span className="ring-text-top">LEARN MORE ABOUT ME!</span>
                </div>
                <div className="profile-image">
                  {/* Replace with your actual image path */}
                  <img src="/assets/profile.jpg" alt="Mai Crespo" />
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
