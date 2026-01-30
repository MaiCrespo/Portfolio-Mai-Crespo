import React from "react";
import maroonLogo from "./assets/Head red@300x.png";
import whiteLogo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";

function App() {
  return (
    <div className="portfolio-app">
      {/* Navigation: Lowercase, Home is Bold */}
      <nav className="nav-bar">
        <div className="nav-items">
          <span className="nav-link home">Home</span>
          <div className="nav-pipe"></div>
          <span className="nav-link">Works</span>
          <div className="nav-pipe"></div>
          <span className="nav-link">About Me</span>
        </div>
        <img src={whiteLogo} className="mini-logo" alt="logo" />
      </nav>

      <main className="hero-center-container">
        <div className="hero-flex">
          {/* Left: Brand Identity */}
          <div className="brand-stack">
            <img src={maroonLogo} className="large-logo" alt="Mai Logo" />
            <h1 className="name-title">
              MAI
              <br />
              CRESPO
            </h1>
          </div>

          {/* Right: Bio and Crescent Profile */}
          <div className="info-stack">
            <p className="bio-paragraph">
              Hello, I'm a <strong>UI/UX Designer</strong> with a strong
              background in
              <strong> Illustration and Graphic Design</strong>. Aside from
              problem-solving through tech, I like to draw crazy weird dark
              things.
            </p>

            <button className="card-button">PICK A CARD</button>

            <div className="profile-wrapper">
              {/* This is the maroon shape behind your photo */}
              <div className="maroon-crescent"></div>
              <img src={me} className="me-photo" alt="Mai" />

              {/* Circular text following the maroon shape */}
              <svg className="circular-svg" viewBox="0 0 100 100">
                <path
                  id="textPath"
                  d="M 65,15 A 40,40 0 0,1 95,65"
                  fill="transparent"
                />
                <text className="curved-text">
                  <textPath xlinkHref="#textPath">
                    Learn more about me!
                  </textPath>
                </text>
              </svg>
              <span className="or-not-label">or not...</span>
            </div>
          </div>
        </div>
      </main>
      <div className="black-bar-footer"></div>
    </div>
  );
}

export default App;
