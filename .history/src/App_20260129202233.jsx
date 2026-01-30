import React from "react";
import maroonLogo from "./assets/Head red@300x.png";
import whiteLogo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";

function App() {
  return (
    <div className="portfolio-site">
      <nav className="main-nav">
        <div className="nav-links-inner">
          <span className="nav-item bold">Home</span>
          <div className="v-line"></div>
          <span className="nav-item">Works</span>
          <div className="v-line"></div>
          <span className="nav-item">About Me</span>
        </div>
        <img src={whiteLogo} className="nav-icon-small" alt="logo" />
      </nav>

      <main className="hero-viewport">
        <div className="hero-content">
          {/* Left Side: Name and Main Logo */}
          <div className="brand-left">
            <img src={maroonLogo} className="brand-img" alt="Mai Logo" />
            <h1 className="brand-text">
              MAI
              <br />
              CRESPO
            </h1>
          </div>

          {/* Right Side: Bio and Circular Profile */}
          <div className="bio-right">
            <div className="bio-text-group">
              <p className="bio-para">
                Hello, I'm a <strong>UI/UX Designer</strong> with a strong
                background in <br />
                <strong>Illustration and Graphic Design</strong>. Aside from
                problem-solving <br />
                through tech, I like to draw crazy weird dark things.
              </p>
              <button className="pill-btn">PICK A CARD</button>
            </div>

            <div className="profile-wrapper">
              {/* Layer 1: Maroon Circle */}
              <div className="maroon-disk"></div>
              {/* Layer 2: Your Photo */}
              <img src={me} className="profile-img" alt="Mai" />
              {/* Layer 3: Curved Text Wrapper */}
              <svg className="curved-svg" viewBox="0 0 100 100">
                <path
                  id="textCircle"
                  d="M 22,12 A 40,40 0 0,1 98,58"
                  fill="transparent"
                />
                <text className="svg-inner-text">
                  <textPath xlinkHref="#textCircle">
                    Learn more about me!
                  </textPath>
                </text>
              </svg>
              <span className="or-not">or not...</span>
            </div>
          </div>
        </div>
      </main>
      <div className="black-footer-bar"></div>
    </div>
  );
}

export default App;
