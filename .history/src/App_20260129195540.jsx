import React from "react";
import maroonLogo from "./assets/Head red@300x.png";
import whiteLogo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";

function App() {
  return (
    <div className="app-container">
      {/* Top Navigation */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#">Home</a>
          <div className="nav-divider"></div>
          <a href="#">Works</a>
          <div className="nav-divider"></div>
          <a href="#">About Me</a>
        </div>
        <img src={whiteLogo} alt="Logo Icon" className="nav-icon" />
      </nav>

      <main className="hero">
        {/* Left Side: Branding */}
        <div className="hero-left">
          <img src={maroonLogo} alt="Mai Logo" className="main-logo" />
          <h1 className="main-name">
            MAI
            <br />
            CRESPO
          </h1>
        </div>

        {/* Right Side: Info & Profile */}
        <div className="hero-right">
          <div className="bio-box">
            <p className="bio-text">
              Hello, I'm a <strong>UI/UX Designer</strong> with a strong
              background in <strong>Illustration and Graphic Design</strong>.
              Aside from problem-solving through tech, I like to draw crazy
              weird dark things.
            </p>
            <button className="card-btn">PICK A CARD</button>
          </div>

          <div className="profile-section">
            <div className="image-wrap">
              <img src={me} alt="Mai Crespo" className="profile-img" />
              {/* Curved SVG Text */}
              <svg className="curved-text-svg" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 20,50 A 30,30 0 1,1 80,50"
                  fill="transparent"
                />
                <text className="svg-text-path">
                  <textPath
                    xlinkHref="#circlePath"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    Learn more about me! — Learn more about me!
                  </textPath>
                </text>
              </svg>
            </div>
            <span className="or-not">or not...</span>
          </div>
        </div>
      </main>

      {/* Bottom rounding detail from Figma */}
      <div className="bottom-curve"></div>
    </div>
  );
}

export default App;
