import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./GotItCaseStudyNew.css";

// Assets
import whiteLogo from "./assets/Head@300x.png";
import headerImage from "./assets/UI-UX/Daybreak/CaseStudyHeaders_Daybreak.png";
import daybreakLogo from "./assets/UI-UX/Daybreak/Daybreaklogo.png";
import boardGame from "./assets/UI-UX/Daybreak/BoardGameUggo.png";
import mapMain from "./assets/UI-UX/Daybreak/daybreak_map_main.png";
import horizontalMap from "./assets/UI-UX/Daybreak/horizontalMap.png";
import monster from "./assets/UI-UX/Daybreak/Monster.png";
import badTile from "./assets/UI-UX/Daybreak/bad_tile.png";
import splashBackground from "./assets/UI-UX/Daybreak/splashBackground.jpg";

function DaybreakCaseStudy() {
  const navigate = useNavigate();
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <div className="page-layout">
      {/* Lightbox Overlay */}
      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>
          <img
            src={lightboxSrc}
            alt="Enlarged view"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Gradient Orbs Background */}
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
      </div>

      {/* Navigation */}
      <nav className="nav-pill">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="nav-links">
          <span onClick={() => navigate("/")} className="nav-item">
            Home
          </span>
          <span className="nav-sep">|</span>
          <span className="nav-item active">Works</span>
          <span className="nav-sep">|</span>
          <span onClick={() => navigate("/about-me")} className="nav-item">
            About Me
          </span>
        </div>
        <img src={whiteLogo} className="nav-logo" alt="logo" />
      </nav>

      {/* Case Study Content */}
      <main className="case-study-scroller">
        <div className="case-study-content">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-image-container">
              <img
                src={headerImage}
                className="hero-image-header clickable-img"
                alt="Daybreak Case Study Header"
                onClick={() => openLightbox(headerImage)}
              />
            </div>
            <div className="hero-text">
              <h1 className="project-title">
                <strong>Daybreak</strong> is an online multiplayer survival
                horror game centered on betrayal and sabotage as players compete
                to reach the finish line.
              </h1>
              <p className="project-subtitle">
                Horror Game | Art Director & UI Designer
              </p>
            </div>
          </section>

          {/* Project Overview */}
          <section className="content-section">
            <h2 className="section-heading">Project Overview</h2>
            <p className="section-text">
              Daybreak is a multiplayer horror game where players must survive
              the night while one among them works to sabotage the group. I led
              the visual direction of the game, designing the world map, villain
              characters, and all promotional materials.
            </p>
            <p className="section-text">
              As Art Director and UI Designer, I was responsible for
              establishing the game's visual identity — a dark, atmospheric
              aesthetic that balances tension with playability.
            </p>
            <div className="image-showcase">
              <img
                src={splashBackground}
                alt="Daybreak Splash"
                className="showcase-image clickable-img"
                onClick={() => openLightbox(splashBackground)}
              />
            </div>
          </section>

          {/* My Role */}
          <section className="content-section">
            <h2 className="section-heading">My Role & Responsibilities</h2>
            <div className="role-grid">
              <div className="role-item">
                <h3 className="role-title">Art Direction</h3>
                <p className="role-desc">
                  Defined the overall visual language, mood, and aesthetic
                  direction for the game's world and characters.
                </p>
              </div>
              <div className="role-item">
                <h3 className="role-title">UI Design</h3>
                <p className="role-desc">
                  Designed in-game interface elements, iconography, and
                  typography systems suited for a horror game context.
                </p>
              </div>
              <div className="role-item">
                <h3 className="role-title">World Building</h3>
                <p className="role-desc">
                  Illustrated the game's world map and environmental assets that
                  set the tone for gameplay.
                </p>
              </div>
            </div>
          </section>

          {/* The Challenge */}
          <section className="content-section">
            <h2 className="section-heading">The Challenge</h2>
            <p className="section-text">
              Designing a horror game requires balancing atmosphere with
              usability. The visual design needed to feel genuinely unsettling
              while remaining clear enough for players to engage with during
              high-stakes gameplay moments.
            </p>
            <ul className="challenge-list">
              <li>Creating a dark aesthetic without sacrificing readability</li>
              <li>
                Designing a world map that communicates spatial relationships
                clearly
              </li>
              <li>
                Developing villain characters that feel threatening yet distinct
              </li>
              <li>
                Maintaining visual consistency across game assets and
                promotional materials
              </li>
            </ul>
          </section>

          {/* Logo & Branding */}
          <section className="content-section">
            <h2 className="section-heading">Logo & Branding</h2>
            <p className="section-text">
              The Daybreak logo reflects the game's core tension — the moment
              just before dawn when danger is still present. The typographic
              treatment and color choices reinforce the horror theme while
              remaining legible.
            </p>
            <div className="image-showcase">
              <img
                src={daybreakLogo}
                alt="Daybreak Logo"
                className="showcase-image clickable-img"
                onClick={() => openLightbox(daybreakLogo)}
              />
            </div>
          </section>

          {/* World Map */}
          <section className="content-section">
            <h2 className="section-heading">World Map Design</h2>
            <p className="section-text">
              The game map is a core gameplay element — players navigate it to
              survive the night. I designed it to feel both functional and
              atmospheric, communicating key locations while reinforcing the
              game's dread-filled tone.
            </p>
            <div className="image-showcase">
              <img
                src={mapMain}
                alt="Daybreak Main Map"
                className="showcase-image clickable-img"
                onClick={() => openLightbox(mapMain)}
              />
            </div>
            <div className="image-showcase">
              <img
                src={horizontalMap}
                alt="Daybreak Horizontal Map"
                className="showcase-image clickable-img"
                onClick={() => openLightbox(horizontalMap)}
              />
            </div>
          </section>

          {/* Character & Asset Design */}
          <section className="content-section">
            <h2 className="section-heading">Character & Asset Design</h2>
            <p className="section-text">
              The villain character and game tile designs were created to
              reinforce the horror atmosphere. Each asset was carefully crafted
              to feel cohesive within the game's visual world.
            </p>
            <div className="image-grid-2">
              <img
                src={monster}
                alt="Daybreak Monster"
                className="grid-image clickable-img"
                onClick={() => openLightbox(monster)}
              />
              <img
                src={badTile}
                alt="Bad Tile"
                className="grid-image clickable-img"
                onClick={() => openLightbox(badTile)}
              />
            </div>
          </section>

          {/* Board Game Prototype */}
          <section className="content-section">
            <h2 className="section-heading">Board Game Prototype</h2>
            <p className="section-text">
              A physical prototype was produced to test the game's layout,
              pacing, and visual clarity. This helped validate design decisions
              before the digital version was developed.
            </p>
            <div className="image-showcase">
              <img
                src={boardGame}
                alt="Board Game Prototype"
                className="showcase-image clickable-img"
                onClick={() => openLightbox(boardGame)}
              />
            </div>
          </section>

          {/* Key Features */}
          <section className="content-section">
            <h2 className="section-heading">Key Design Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3 className="feature-title">Dark Visual Language</h3>
                <p className="feature-text">
                  A cohesive horror aesthetic across all game assets, from UI
                  elements to character design.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Atmospheric World Map</h3>
                <p className="feature-text">
                  Hand-illustrated map design that serves both functional
                  navigation and storytelling purposes.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Character Design</h3>
                <p className="feature-text">
                  Distinct villain characters that feel threatening and
                  memorable within the game's world.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Brand Consistency</h3>
                <p className="feature-text">
                  Unified visual system across digital game assets and
                  promotional materials.
                </p>
              </div>
            </div>
          </section>

          {/* Outcome */}
          <section className="content-section">
            <h2 className="section-heading">Outcome & Impact</h2>
            <p className="section-text">
              Daybreak successfully delivers a tense, atmospheric horror
              experience through its visual design. The cohesive art direction
              creates an immersive world that enhances gameplay and keeps
              players on edge throughout.
            </p>
            <div className="impact-stats">
              <div className="stat-item">
                <div className="stat-value">Multiplayer</div>
                <div className="stat-label">Game Format</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">Full</div>
                <div className="stat-label">Art Direction</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">Horror</div>
                <div className="stat-label">Genre</div>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className="content-section last-section">
            <h2 className="section-heading">Key Learnings</h2>
            <p className="section-text">
              This project deepened my understanding of how visual design can
              shape emotional experience. Designing for horror required
              intentional restraint — knowing when to add detail and when to
              leave space for the imagination to fill in.
            </p>
            <p className="section-text">
              Leading the art direction also reinforced the importance of
              establishing a strong visual foundation early, so every asset
              produced by the team felt like it belonged to the same world.
            </p>
          </section>
        </div>
      </main>

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
        <a href="/MaiCrespoResume.pdf" target="_blank" rel="noreferrer">
          <button className="pill-btn">MY RESUME</button>
        </a>
      </footer>
    </div>
  );
}

export default DaybreakCaseStudy;
