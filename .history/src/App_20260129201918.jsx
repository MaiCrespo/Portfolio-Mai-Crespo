import React from "react";
import maroonLogo from "./assets/Head red@300x.png";
import whiteLogo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";

function App() {
  return (
    <div className="portfolio-container">
      {/* Navigation: Home is bold, others are thin and lowercase */}
      <nav className="nav-bar">
        <div className="nav-links-container">
          <span className="nav-link active">Home</span>
          <div className="nav-pipe"></div>
          <span className="nav-link">Works</span>
          <div className="nav-pipe"></div>
          <span className="nav-link">About Me</span>
        </div>
        <img src={whiteLogo} className="nav-mini-logo" alt="logo" />
      </nav>

      <main className="landing-main">
        <div className="content-flex-wrapper">
          {/* Left Side: Branding */}
          <div className="branding-section">
            <img src={maroonLogo} className="main-logo-img" alt="Mai Logo" />
            <h1 className="name-header">
              MAI
              <br />
              CRESPO
            </h1>
          </div>

          {/* Right Side: Bio and Layered Profile */}
          <div className="bio-section">
            <p className="bio-description">
              Hello, I'm a <strong>UI/UX Designer</strong> with a strong
              background in <br />
              <strong>Illustration and Graphic Design</strong>. Aside from
              problem-solving <br />
              through tech, I like to draw crazy weird dark things.
            </p>

            <button className="pick-card-btn">PICK A CARD</button>

            <div className="profile-stack-container">
              {/* Layered circle effect from reference */}
              <div className="maroon-bg-disk"></div>
              <img src={me} className="profile-face-img" alt="Mai" />

              <svg className="curved-text-svg-layer" viewBox="0 0 100 100">
                <path
                  id="textPathCurve"
                  d="M 25,15 A 38,38 0 0,1 95,55"
                  fill="transparent"
                />
                <text className="svg-curved-text">
                  <textPath xlinkHref="#textPathCurve">
                    Learn more about me!
                  </textPath>
                </text>
              </svg>

              <span className="or-not-subtext">or not...</span>
            </div>
          </div>
        </div>
      </main>
      <div className="bottom-black-shelf"></div>
    </div>
  );
}

export default App;
