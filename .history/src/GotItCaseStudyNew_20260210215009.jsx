import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./GotItCaseStudyNew.css";

// Assets
import whiteLogo from "./assets/Head@300x.png";
import headerImage from "./assets/UI-UX/GotIt/CaseStudyHeadersGotIt.png";
import homepage from "./assets/UI-UX/GotIt/Homepage.png";
import styleGuide from "./assets/UI-UX/GotIt/styleguide.png";
import persona from "./assets/UI-UX/GotIt/Persona.png";
import ideation from "./assets/UI-UX/GotIt/GotItIdeation.png";
import mockup1 from "./assets/UI-UX/GotIt/Mockup.png";
import mockup2 from "./assets/UI-UX/GotIt/Mockup2.png";
import omega from "./assets/UI-UX/GotIt/Omega.png";
import omega2 from "./assets/UI-UX/GotIt/Omega2.png";
import brochure from "./assets/UI-UX/GotIt/GotItBrochure.jpg";
import brochure2 from "./assets/UI-UX/GotIt/GotItBrochure2.jpg";
import businessCards from "./assets/UI-UX/GotIt/GotItBusinessCards.png";
import businessCards2 from "./assets/UI-UX/GotIt/GotItBusinessCards2.png";
import stickers from "./assets/UI-UX/GotIt/GotItStickers.jpg";
import teamPhoto from "./assets/UI-UX/GotIt/TeamGotIt.jpg";
import studyingBC from "./assets/UI-UX/GotIt/studyingbc.jpg";

function GotItCaseStudyNew() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-layout">
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
          <span className="nav-item">About Me</span>
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
                className="hero-image"
                alt="Got It Case Study Header"
              />
            </div>
            <div className="hero-text">
              <h1 className="project-title">
                <strong>Got It</strong> is an accessible learning platform
                designed to help Level 1 electrical apprentices navigate dense,
                overwhelming textbooks.{" "}
              </h1>
              <p className="project-subtitle">
                Study Guide Website | UI Design Lead & Product Designer
              </p>
            </div>
          </section>

          {/* Project Overview */}
          <section className="content-section">
            <h2 className="section-heading">Project Overview</h2>
            <p className="section-text">
              Designed with accessibility at its core, the platform transforms
              complex textbooks into clear, structured, and visual learning
              experiences. The project combines AI-driven study tools with an
              interface intentionally designed to reduce cognitive overload and
              anxiety. By meeting apprentices where they are and adapting to
              different learning styles, Got It helps users move from overwhelm
              to understanding with confidence.
            </p>
            <p className="section-text">
              As the UI Design Lead and Product Designer, I led the visual
              direction of the product, shaping the overall look and feel while
              ensuring the app and marketing materials were cohesive and
              visually aligned.
            </p>
            <div className="image-showcase">
              <img
                src={studyingBC}
                alt="Study context"
                className="showcase-image"
              />
              <p>
                BCIT Electrical Foundation Student Working in Workshop. (n.d.).
                British Columbia Institute of Technology. Retrieved from
                bcit.ca.
              </p>
            </div>
          </section>

          {/* Role & Responsibilities */}
          <section className="content-section">
            <h2 className="section-heading">My Role & Responsibilities</h2>
            <div className="role-grid">
              <div className="role-item">
                <h3 className="role-title">UI Design Lead</h3>
                <p className="role-desc">
                  Led the visual design system, creating a cohesive and
                  accessible interface that supports neurodiverse learners.
                </p>
              </div>
              <div className="role-item">
                <h3 className="role-title">Product Designer</h3>
                <p className="role-desc">
                  Collaborated with stakeholders to define product requirements
                  and translate them into user-centered design solutions.
                </p>
              </div>
              <div className="role-item">
                <h3 className="role-title">Visual Design</h3>
                <p className="role-desc">
                  Developed marketing materials and ensured brand consistency
                  across all touchpoints.
                </p>
              </div>
            </div>
            <div className="image-showcase team-photo">
              <img
                src={teamPhoto}
                alt="Team Got It"
                className="showcase-image"
              />
            </div>
          </section>

          {/* The Challenge */}
          <section className="content-section">
            <h2 className="section-heading">The Challenge</h2>
            <p className="section-text">
              Electrical trades education traditionally relies on dense
              textbooks and standardized testing, which can be challenging for
              neurodiverse students who may process information differently.
            </p>
            <p className="section-text">
              The challenge was to create a digital study guide that:
            </p>
            <ul className="challenge-list">
              <li>
                Accommodates different learning styles and cognitive needs
              </li>
              <li>Makes complex technical content more digestible</li>
              <li>Maintains professional standards for trades education</li>
              <li>Provides an engaging and motivating learning experience</li>
            </ul>
          </section>

          {/* User Research */}
          <section className="content-section">
            <h2 className="section-heading">User Research & Personas</h2>
            <p className="section-text">
              We conducted extensive research with neurodiverse students and
              educators to understand specific accessibility needs and learning
              preferences. This research informed our design decisions and
              helped us create user personas that guided the product
              development.
            </p>
            <div className="image-showcase">
              <img
                src={persona}
                alt="User Persona"
                className="showcase-image"
              />
            </div>
          </section>

          {/* Ideation & Design Process */}
          <section className="content-section">
            <h2 className="section-heading">Ideation & Design Process</h2>
            <p className="section-text">
              The design process involved extensive brainstorming, wireframing,
              and iterative design. We explored multiple approaches to ensure
              the final solution met the needs of our diverse user base.
            </p>
            <div className="image-showcase">
              <img
                src={ideation}
                alt="Design Ideation"
                className="showcase-image"
              />
            </div>
          </section>

          {/* Design System & Style Guide */}
          <section className="content-section">
            <h2 className="section-heading">Design System & Style Guide</h2>
            <p className="section-text">
              A comprehensive design system was developed to ensure consistency
              across all touchpoints. The style guide includes accessible color
              palettes, typography, spacing, and component library focused on
              readability and clarity.
            </p>
            <div className="image-showcase">
              <img
                src={styleGuide}
                alt="Style Guide"
                className="showcase-image"
              />
            </div>
          </section>

          {/* UI Design & Homepage */}
          <section className="content-section">
            <h2 className="section-heading">Homepage Design</h2>
            <p className="section-text">
              The homepage serves as the gateway to the learning experience,
              featuring clear navigation, accessible color contrast, and an
              intuitive layout that guides students to their study materials.
            </p>
            <div className="image-showcase">
              <img
                src={homepage}
                alt="Homepage Design"
                className="showcase-image"
              />
            </div>
          </section>

          {/* Mockups & Prototypes */}
          <section className="content-section">
            <h2 className="section-heading">Design Mockups</h2>
            <p className="section-text">
              High-fidelity mockups and prototypes were created to visualize the
              final product and test with users before development. These
              mockups showcase the interface across different devices and use
              cases.
            </p>
            <div className="image-grid-2">
              <img src={mockup1} alt="Mockup 1" className="grid-image" />
              <img src={mockup2} alt="Mockup 2" className="grid-image" />
            </div>
          </section>

          {/* Omega Screens */}
          <section className="content-section">
            <h2 className="section-heading">Interface Screens</h2>
            <p className="section-text">
              Detailed interface screens showing the learning modules, quiz
              interfaces, and study materials with careful attention to
              accessibility and user experience.
            </p>
            <div className="image-grid-2">
              <img
                src={omega}
                alt="Interface Screen 1"
                className="grid-image"
              />
              <img
                src={omega2}
                alt="Interface Screen 2"
                className="grid-image"
              />
            </div>
          </section>

          {/* Marketing Materials */}
          <section className="content-section">
            <h2 className="section-heading">Marketing & Brand Materials</h2>
            <p className="section-text">
              As part of the comprehensive design approach, I developed various
              marketing materials including brochures, business cards, and
              stickers to maintain brand consistency across all touchpoints.
            </p>

            <h3 className="subsection-title">Brochures</h3>
            <div className="image-grid-2">
              <img src={brochure} alt="Brochure Front" className="grid-image" />
              <img src={brochure2} alt="Brochure Back" className="grid-image" />
            </div>

            <h3 className="subsection-title">Business Cards</h3>
            <div className="image-grid-2">
              <img
                src={businessCards}
                alt="Business Cards 1"
                className="grid-image"
              />
              <img
                src={businessCards2}
                alt="Business Cards 2"
                className="grid-image"
              />
            </div>

            <h3 className="subsection-title">Promotional Stickers</h3>
            <div className="image-showcase">
              <img
                src={stickers}
                alt="Got It Stickers"
                className="showcase-image"
              />
            </div>
          </section>

          {/* Key Features */}
          <section className="content-section">
            <h2 className="section-heading">Key Design Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3 className="feature-title">Accessible Color System</h3>
                <p className="feature-text">
                  High contrast color palette with WCAG AAA compliance for
                  optimal readability and reduced visual strain.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Clear Information Hierarchy</h3>
                <p className="feature-text">
                  Structured layouts with clear visual hierarchy to help
                  students navigate and process complex information.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Multiple Learning Modes</h3>
                <p className="feature-text">
                  Visual, textual, and interactive content formats to
                  accommodate different learning preferences.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Consistent Design Language</h3>
                <p className="feature-text">
                  Cohesive visual system across web platform and marketing
                  materials for brand recognition.
                </p>
              </div>
            </div>
          </section>

          {/* Outcome & Impact */}
          <section className="content-section">
            <h2 className="section-heading">Outcome & Impact</h2>
            <p className="section-text">
              The Got It platform successfully provides an accessible and
              engaging learning experience for neurodiverse electrical trades
              students. The cohesive design system ensures consistency across
              all touchpoints while maintaining flexibility for different
              learning needs.
            </p>
            <div className="impact-stats">
              <div className="stat-item">
                <div className="stat-value">WCAG AAA</div>
                <div className="stat-label">Accessibility Standard</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100%</div>
                <div className="stat-label">Design System Coverage</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">Multiple</div>
                <div className="stat-label">Learning Modes</div>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className="content-section last-section">
            <h2 className="section-heading">Key Learnings</h2>
            <p className="section-text">
              This project reinforced the importance of designing with empathy
              and understanding the specific needs of diverse user groups.
              Working closely with neurodiverse students and educators taught me
              that accessibility isn't just about compliance—it's about creating
              genuinely inclusive experiences that empower all learners.
            </p>
            <p className="section-text">
              Leading the UI design also strengthened my ability to maintain
              visual consistency across multiple platforms while adapting to
              different contexts and user needs. From web interfaces to
              marketing materials, every touchpoint reinforced the Got It brand
              while serving its unique purpose.
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

export default GotItCaseStudyNew;
