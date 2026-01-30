import React from "react";
import maroonLogo from "./assets/Head red@300x.png";
import whiteLogo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";

function App() {
  return (
    <div className="portfolio-wrapper">
      {/* Navigation matching Figma: lowercase, thin, Home is active */}
      <nav className="top-nav">
        <div className="nav-links">
          <span className="active-link">Home</span>
          <div className="divider"></div>
          <span>Works</span>
          <div className="divider"></div>
          <span>About Me</span>
        </div>
        <img src={whiteLogo} className="nav-icon" alt="logo" />
      </nav>

      <main className="landing-content">
        {/* Left: Branding with specific spacing */}
        <div className="branding-group">
          <img src={maroonLogo} className="hero-logo" alt="Mai Logo" />
          <h1 className="hero-name">
            MAI
            <br />
            CRESPO
          </h1>
        </div>

        {/* Right: Bio and Profile */}
        <div className="bio-group">
          <p className="bio-description">
            Hello, I'm a <strong>UI/UX Designer</strong> with a strong
            background in
            <strong> Illustration and Graphic Design</strong>. Aside from
            problem-solving through tech, I like to draw crazy weird dark
            things.
          </p>

          <button className="card-button">PICK A CARD</button>

          <div className="profile-container">
            <img src={me} className="profile-photo" alt="Mai" />
            <svg className="curved-text-svg" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 15,50 A 35,35 0 1,1 85,50 A 35,35 0 1,1 15,50"
                fill="transparent"
              />
              <text className="curved-text">
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  Learn more about me! — Learn more about me! —
                </textPath>
              </text>
            </svg>
            <span className="or-not">or not...</span>
          </div>
        </div>
      </main>

      {/* Bottom rounding detail */}
      <div className="bottom-bar"></div>
    </div>
  );
}

export default App;
