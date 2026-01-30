import React from "react";
import maroonLogo from "./assets/Head red@300x.png";
import whiteLogo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";

function App() {
  return (
    <div className="portfolio-app">
      <nav className="navbar">
        <div className="nav-links">
          <span className="nav-item active">Home</span>
          <div className="separator"></div>
          <span className="nav-item">Works</span>
          <div className="separator"></div>
          <span className="nav-item">About Me</span>
        </div>
        <img src={whiteLogo} className="nav-logo" alt="logo" />
      </nav>

      <main className="hero-section">
        <div className="hero-container">
          {/* Left Branding */}
          <div className="branding-block">
            <img src={maroonLogo} className="hero-icon" alt="Mai Logo" />
            <h1 className="hero-title">
              MAI
              <br />
              CRESPO
            </h1>
          </div>

          {/* Right Bio & Profile */}
          <div className="bio-block">
            <div className="text-wrapper">
              <p className="hero-intro">
                Hello, I'm a <strong>UI/UX Designer</strong> with a strong
                background in <br />
                <strong>Illustration and Graphic Design</strong>. Aside from
                problem-solving <br />
                through tech, I like to draw crazy weird dark things.
              </p>
              <button className="card-btn">PICK A CARD</button>
            </div>

            <div className="profile-group">
              <div className="maroon-circle"></div>
              <img src={me} className="profile-pic" alt="Mai" />
              <svg className="curved-text-svg" viewBox="0 0 100 100">
                <path
                  id="curvePath"
                  d="M 25,15 A 38,38 0 0,1 95,55"
                  fill="transparent"
                />
                <text className="curved-text">
                  <textPath xlinkHref="#curvePath">
                    Learn more about me!
                  </textPath>
                </text>
              </svg>
              <span className="or-not-label">or not...</span>
            </div>
          </div>
        </div>
      </main>
      <div className="footer-bar"></div>
    </div>
  );
}

export default App;
