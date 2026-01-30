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

            <div className="profile-wrapper">
              {/* Maroon crescent shape behind the photo */}
              <div className="crescent-bg"></div>

              <img src={me} className="profile-img" alt="Mai" />

              <svg className="curved-text-svg" viewBox="0 0 200 200">
                <path
                  id="curve"
                  d="M 130,50 A 70,70 0 0,1 185,110"
                  fill="transparent"
                />
                <text className="curved-text-path">
                  <textPath xlinkHref="#curve">Learn more about me!</textPath>
                </text>
              </svg>

              <span className="or-not">or not...</span>
            </div>
          </div>
        </div>
      </main>
      <div className="bottom-footer-accent"></div>
    </div>
  );
}

export default App;
