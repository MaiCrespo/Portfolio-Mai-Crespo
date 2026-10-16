import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutMe.css";
import logo from "./assets/Head@300x.png";
import meImage from "./assets/misc/me.webp";

const skillGroups = [
  {
    number: "01",
    title: "UI/UX DESIGN",
    skills: [
      "User Research",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Usability Testing",
    ],
  },
  {
    number: "02",
    title: "GRAPHIC DESIGN",
    skills: [
      "Branding & Identity",
      "Print Design",
      "Packaging Design",
      "Marketing Materials",
    ],
  },
  {
    number: "03",
    title: "ILLUSTRATION",
    skills: [
      "Digital Illustration",
      "Character Design",
      "Concept Art",
      "Visual Storytelling",
    ],
  },
];

function AboutMe() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <header className="about-header">
        <button
          className="about-brand"
          type="button"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <img src={logo} alt="" className="about-logo" />
          <span>MAI CRESPO</span>
        </button>
        <button
          className="about-nav-category"
          type="button"
          onClick={() => navigate("/")}
        >
          PORTFOLIO
        </button>
        <span className="about-nav-project">ABOUT ME</span>
      </header>

      <main className="about-main">
        <div className="about-topline">
          <span>THE PERSON BEHIND THE WORK</span>
          <span>DESIGN / ILLUSTRATION / CREATIVE THINKING</span>
        </div>

        <section className="about-intro" aria-labelledby="about-title">
          <div className="about-intro-heading">
            <p className="about-eyebrow">A LITTLE INTRODUCTION</p>
            <h1 id="about-title" className="about-title">
              HELLO, I'M MAI<span className="about-title-dot">.</span>
            </h1>
            <p className="about-tagline">
              A designer with a soft spot for the strange, the thoughtful, and
              the unexpected.
            </p>
          </div>

          <div className="about-feature-grid">
            <figure className="about-photo-frame">
              <img
                src={meImage}
                alt="Portrait of Mai Crespo"
                className="about-photo"
              />
              <figcaption>MEET THE DESIGNER ↗</figcaption>
            </figure>

            <div className="about-story">
              <span className="about-kicker">01 / WHO I AM</span>
              <h2>CREATIVE BY NATURE. DESIGNER BY TRADE.</h2>
              <p>
                Hello! I'm <strong>Mai Crespo</strong>, a UI/UX Designer with a
                strong background in Illustration and Graphic Design.
              </p>
              <p>
                I'm passionate about creating intuitive digital experiences
                while bringing a unique artistic perspective to every project.
                My work combines problem-solving through tech with my love for
                drawing crazy, weird, dark things.
              </p>
              <p>
                When I'm not designing, you'll find me sketching horror-inspired
                illustrations or exploring new ways to blend creativity with
                functionality.
              </p>
              <div className="about-story-links">
                <a
                  href="mailto:yomaicrespo@gmail.com"
                  className="about-outline-link"
                >
                  LET'S CONNECT <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="/Mai_Crespo_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-text-link"
                >
                  VIEW MY RESUME ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="about-expertise"
          aria-labelledby="expertise-heading"
        >
          <div className="about-expertise-head">
            <span className="about-kicker">02 / WHAT I DO</span>
            <h2 id="expertise-heading">A LITTLE BIT OF EVERYTHING.</h2>
            <p>
              Different disciplines, one creative approach: make it thoughtful,
              functional, and memorable.
            </p>
          </div>
          <div className="about-skills-grid">
            {skillGroups.map((group) => (
              <article className="about-skill-card" key={group.number}>
                <span className="about-skill-index">
                  {group.number} / EXPERTISE
                </span>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="about-cta" aria-label="Explore selected work">
          <span>WANT TO SEE WHAT I'VE BEEN MAKING?</span>
          <button type="button" onClick={() => navigate("/graphic-design")}>
            EXPLORE MY WORK <span aria-hidden="true">↗</span>
          </button>
        </section>
      </main>

      <footer className="about-footer">
        <div className="about-footer-links">
          <a href="mailto:yomaicrespo@gmail.com">Email</a>
          <span aria-hidden="true">|</span>
          <a
            href="https://linkedin.com/in/mai-crespo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span aria-hidden="true">|</span>
          <a
            href="https://instagram.com/heymaicomics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <span className="about-footer-title">ABOUT ME</span>
        <a
          href="/Mai_Crespo_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="about-resume"
        >
          MY RESUME
        </a>
      </footer>
    </div>
  );
}

export default AboutMe;
