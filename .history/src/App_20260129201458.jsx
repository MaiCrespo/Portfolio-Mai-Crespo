import React from "react";
import maroonLogo from "./assets/Head red@300x.png";
import whiteLogo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";

function App() {
  return (
    <div className="portfolio-wrapper">
      <nav className="top-nav">
        <div className="nav-group">
          <span className="nav-link active">Home</span>
          <div className="nav-divider"></div>
          <span className="nav-link">Works</span>
          <div className="nav-divider"></div>
          <span className="nav-link">About Me</span>
        </div>
        <img src={whiteLogo} className="nav-mini-icon" alt="logo" />
      </nav>

      <main className="main-stage">
        <div className="stage-content">
          <div className="brand-side">
            <img src={maroonLogo} className="brand-icon" alt="Mai Logo" />
            <h1 className="brand-name">
              MAI
              <br />
              CRESPO
            </h1>
          </div>

          <div className="bio-side">
            <p className="bio-text">
              Hello, I'm a <strong>UI/UX Designer</strong> with a strong
              background in
              <strong> Illustration and Graphic Design</strong>. Aside from
              problem-solving through tech, I like to draw crazy weird dark
              things.
            </p>

            <button className="cta-pill">PICK A CARD</button>

            <div className="profile-stack">
              {/* Layer 1: Maroon background circle */}
              <div className="profile-bg-circle"></div>

              {/* Layer 2: Profile Photo */}
              <img src={me} className="profile-img-circle" alt="Mai" />

              {/* Layer 3: Curved Text overlay */}
              <svg className="curved-text-svg" viewBox="0 0 100 100">
                <path
                  id="textCurve"
                  d="M 25,15 A 38,38 0 0,1 95,55"
                  fill="transparent"
                />
                <text className="svg-text">
                  <textPath xlinkHref="#textCurve">
                    Learn more about me!
                  </textPath>
                </text>
              </svg>

              <span className="caption-text">or not...</span>
            </div>
          </div>
        </div>
      </main>
      <div className="black-accent-footer"></div>
    </div>
  );
}

export default App;
