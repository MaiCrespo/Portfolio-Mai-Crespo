import React from "react";
import maroonLogo from "./assets/Head red@300x.png";
import whiteLogo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";

function App() {
  return (
    <div className="app-wrapper">
      <nav className="top-nav-bar">
        <div className="nav-links">
          <span className="nav-item active">Home</span>
          <div className="nav-separator"></div>
          <span className="nav-item">Works</span>
          <div className="nav-separator"></div>
          <span className="nav-item">About Me</span>
        </div>
        <img src={whiteLogo} className="nav-mini-logo" alt="logo" />
      </nav>

      <main className="landing-container">
        <div className="landing-content">
          <div className="landing-left">
            <img src={maroonLogo} className="hero-logo" alt="Mai Logo" />
            <h1 className="hero-name">
              MAI
              <br />
              CRESPO
            </h1>
          </div>

          <div className="landing-right">
            <p className="hero-intro">
              Hello, I'm a <strong>UI/UX Designer</strong> with a strong
              background in
              <strong> Illustration and Graphic Design</strong>. Aside from
              problem-solving through tech, I like to draw crazy weird dark
              things.
            </p>

            <button className="pill-button">PICK A CARD</button>

            <div className="profile-container">
              {/* Layer 1: The maroon circle behind the photo */}
              <div className="maroon-bg-circle"></div>

              {/* Layer 2: Your Photo */}
              <img src={me} className="profile-image-circle" alt="Mai" />

              {/* Layer 3: The Curved Text wrapped on the image */}
              <svg className="curved-text-overlay" viewBox="0 0 100 100">
                <path
                  id="textCircle"
                  d="M 25,12 A 40,40 0 0,1 95,55"
                  fill="transparent"
                />
                <text className="wrapped-text">
                  <textPath xlinkHref="#textCircle">
                    Learn more about me!
                  </textPath>
                </text>
              </svg>

              <span className="or-not-text">or not...</span>
            </div>
          </div>
        </div>
      </main>
      <div className="footer-accent-bar"></div>
    </div>
  );
}

export default App;
