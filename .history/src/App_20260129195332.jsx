import React from "react";
import maroonLogo from "./assets/Head red@300x.png";
import whiteLogo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";

function App() {
  return (
    <div className="portfolio-bg">
      {/* Navigation matching Figma top bar */}
      <nav className="nav-container">
        <div className="nav-links">
          <a href="#home">Home</a>
          <div className="sep" />
          <a href="#works">Works</a>
          <div className="sep" />
          <a href="#about">About Me</a>
        </div>
        <img src={whiteLogo} alt="mini-logo" className="nav-logo" />
      </nav>

      <main className="hero-section">
        <div className="hero-left">
          <img src={maroonLogo} alt="logo" className="hero-logo-img" />
          <h1 className="hero-title">
            MAI
            <br />
            CRESPO
          </h1>
        </div>

        <div className="hero-right">
          <p className="hero-description">
            Hello, I'm a <strong>UI/UX Designer</strong> with a strong
            background in
            <strong> Illustration and Graphic Design</strong>. Aside from
            problem-solving through tech, I like to draw crazy weird dark
            things.
          </p>

          <button className="cta-pill">PICK A CARD</button>

          <div className="profile-container">
            {/* The circular text effect */}
            <svg className="circular-text" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 10,50 A 40,40 0 1,1 90,50 A 40,40 0 1,1 10,50"
                fill="transparent"
              />
              <text className="curved-text-style">
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  LEARN MORE ABOUT ME! — LEARN MORE ABOUT ME! —
                </textPath>
              </text>
            </svg>
            <img src={me} alt="Mai" className="profile-photo" />
            <span className="or-not-text">or not...</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
