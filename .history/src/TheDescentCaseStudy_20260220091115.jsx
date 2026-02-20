import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./TheDescentCaseStudy.css";

// Assets
import whiteLogo from "./assets/Head@300x.png";
import headerImage from "./assets/UI-UX/TheDescent/CaseStudyHeaders_TheDescent.png";
import descentLogo from "./assets/UI-UX/TheDescent/TheDescentlogo.png";
import descentSplash from "./assets/UI-UX/TheDescent/descentsplash.png";
import limbo from "./assets/UI-UX/TheDescent/Limbo.png";
import lust from "./assets/UI-UX/TheDescent/Lust.png";
import violence from "./assets/UI-UX/TheDescent/Violence.png";
import thumbnail from "./assets/UI-UX/TheDescent/TheDescentThumbnail.png";

function TheDescentCaseStudy() {
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
                alt="The Descent Case Study Header"
                onClick={() => openLightbox(headerImage)}
              />
            </div>
            <div className="hero-text">
              <h1 className="project-title">
                <strong>The Descent</strong> is an interactive learning game
                inspired by Dante's Inferno, guiding players through the nine
                circles of Hell while exploring morality, choice, and
                transformation.
              </h1>
              <p className="project-subtitle">
                Horror | Interactive Learning Game | Creative Director &
                Prototyper
              </p>
            </div>
          </section>

          {/* Project Overview */}
          <section className="content-section">
            <h2 className="section-heading">Project Overview</h2>
            <p className="section-text">
              The Descent is a solo project that reimagines Dante's Inferno as
              an interactive learning experience. Players journey through the
              nine circles of Hell, confronting moral dilemmas and witnessing
              the consequences of different choices.
            </p>
            <p className="section-text">
              As Creative Director and Prototyper, I handled every aspect of
              production — from conceptual design and illustration to
              prototyping and asset creation. The project blends educational
              content with horror aesthetics to create a memorable exploration
              of sin, punishment, and transformation.
            </p>
            <div className="image-showcase">
              <img
                src={descentSplash}
                alt="The Descent Splash"
                className="showcase-image clickable-img"
                onClick={() => openLightbox(descentSplash)}
              />
            </div>
          </section>

          {/* My Role */}
          <section className="content-section">
            <h2 className="section-heading">My Role & Responsibilities</h2>
            <div className="role-grid">
              <div className="role-item">
                <h3 className="role-title">Creative Direction</h3>
                <p className="role-desc">
                  Defined the overall vision, tone, and narrative structure for
                  the interactive experience.
                </p>
              </div>
              <div className="role-item">
                <h3 className="role-title">Illustration & Art</h3>
                <p className="role-desc">
                  Created all visual assets including character designs,
                  environmental illustrations, and UI elements.
                </p>
              </div>
              <div className="role-item">
                <h3 className="role-title">Prototyping</h3>
                <p className="role-desc">
                  Built and tested interactive prototypes to validate gameplay
                  mechanics and narrative flow.
                </p>
              </div>
            </div>
          </section>

          {/* The Challenge */}
          <section className="content-section">
            <h2 className="section-heading">The Challenge</h2>
            <p className="section-text">
              Creating an educational game about Dante's Inferno required
              balancing horror elements with accessibility. The experience
              needed to feel authentic to the source material while remaining
              engaging for players unfamiliar with classical literature.
            </p>
            <ul className="challenge-list">
              <li>Translating medieval allegory into interactive gameplay</li>
              <li>Making complex moral philosophy accessible and engaging</li>
              <li>
                Creating a horror aesthetic that educates rather than just
                shocks
              </li>
              <li>
                Designing all assets solo while maintaining visual consistency
              </li>
            </ul>
          </section>

          {/* Logo & Branding */}
          <section className="content-section">
            <h2 className="section-heading">Logo & Branding</h2>
            <p className="section-text">
              The Descent logo captures the journey's dark, transformative
              nature. The typography and visual treatment reflect the game's
              literary roots while establishing a distinct horror identity.
            </p>
            <div className="image-showcase">
              <img
                src={descentLogo}
                alt="The Descent Logo"
                className="showcase-image clickable-img"
                onClick={() => openLightbox(descentLogo)}
              />
            </div>
          </section>

          {/* Circle Illustrations */}
          <section className="content-section">
            <h2 className="section-heading">The Nine Circles</h2>
            <p className="section-text">
              Each circle of Hell was illustrated to reflect its unique thematic
              content and punishment. The visual design guides players through
              an increasingly intense emotional and moral journey.
            </p>
            <div className="image-showcase">
              <img
                src={limbo}
                alt="Limbo - First Circle"
                className="showcase-image clickable-img"
                onClick={() => openLightbox(limbo)}
              />
              <p className="image-caption">Limbo — The First Circle</p>
            </div>
            <div className="image-showcase">
              <img
                src={lust}
                alt="Lust - Second Circle"
                className="showcase-image clickable-img"
                onClick={() => openLightbox(lust)}
              />
              <p className="image-caption">Lust — The Second Circle</p>
            </div>
            <div className="image-showcase">
              <img
                src={violence}
                alt="Violence - Seventh Circle"
                className="showcase-image clickable-img"
                onClick={() => openLightbox(violence)}
              />
              <p className="image-caption">Violence — The Seventh Circle</p>
            </div>
          </section>

          {/* Key Features */}
          <section className="content-section">
            <h2 className="section-heading">Key Design Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3 className="feature-title">Narrative-Driven Design</h3>
                <p className="feature-text">
                  Story and visuals work together to create an immersive
                  exploration of moral philosophy.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Hand-Illustrated Worlds</h3>
                <p className="feature-text">
                  Each circle of Hell features unique, carefully crafted
                  illustrations that reflect its thematic punishment.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Interactive Choices</h3>
                <p className="feature-text">
                  Players make meaningful decisions that affect their journey
                  through the underworld.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Educational Horror</h3>
                <p className="feature-text">
                  Horror elements serve the educational goal of exploring moral
                  consequence and transformation.
                </p>
              </div>
            </div>
          </section>

          {/* Outcome */}
          <section className="content-section">
            <h2 className="section-heading">Outcome & Impact</h2>
            <p className="section-text">
              The Descent successfully bridges classical literature and
              interactive gaming. As a solo project, it demonstrates the
              potential for one designer to create a cohesive, immersive
              experience from concept through execution.
            </p>
            <div className="impact-stats">
              <div className="stat-item">
                <div className="stat-value">Solo</div>
                <div className="stat-label">Project</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">9</div>
                <div className="stat-label">Illustrated Circles</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">Full</div>
                <div className="stat-label">Creative Control</div>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className="content-section last-section">
            <h2 className="section-heading">Key Learnings</h2>
            <p className="section-text">
              Working solo on The Descent taught me the importance of clear
              vision and disciplined execution. Without a team to delegate to,
              every design decision required careful consideration of how it
              would impact the entire project.
            </p>
            <p className="section-text">
              The project also reinforced my belief that horror and education
              can coexist productively. By making players emotionally invested
              in the journey, the game creates lasting engagement with complex
              philosophical ideas.
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

export default TheDescentCaseStudy;
