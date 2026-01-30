import React from "react";
import maroonLogo from "./assets/Head red@300x.png";
import whiteLogo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";

function App() {
  return (
    <div className="app-wrapper">
      <nav className="top-nav-bar">
        <div className="nav-links">
          <span>Home</span>
          <div className="nav-separator"></div>
          <span>Works</span>
          <div className="nav-separator"></div>
          <span>About Me</span>
        </div>
        <img src={whiteLogo} className="nav-mini-logo" alt="logo" />
      </nav>

      <main className="landing-container">
        <div className="landing-content">
          <div className="landing-left">
            <img
              src={maroonLogo}
              className="landing-hero-logo"
              alt="Mai Logo"
            />
            <h1 className="landing-name">
              MAI
              <br />
              CRESPO
            </h1>
          </div>

          <div className="landing-right">
            <p className="landing-intro">
              Hello, I'm a <strong>UI/UX Designer</strong> with a strong
              background in
              <strong> Illustration and Graphic Design</strong>. Aside from
              problem-solving through tech, I like to draw crazy weird dark
              things.
            </p>

            <button className="pill-button">PICK A CARD</button>

            <div className="profile-wrapper">
              <img src={me} className="profile-img" alt="Mai" />
              <svg className="curved-text-svg" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 20,50 A 30,30 0 1,1 80,50"
                  fill="transparent"
                />
                <text className="curved-text-path">
                  <textPath
                    xlinkHref="#circlePath"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    Learn more about me!
                  </textPath>
                </text>
              </svg>
              <span className="or-not">or not...</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
