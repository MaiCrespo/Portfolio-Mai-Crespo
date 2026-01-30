import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/Head@300x.png"; // Confirm this path matches your sidebar
import me from "./assets/misc/me.webp";

function App() {
  const [view, setView] = useState("landing");

  return (
    <div className="app-wrapper">
      {/* New Rounded Top Nav Bar */}
      <nav className="top-nav-bar">
        <div className="nav-links">
          <span onClick={() => setView("landing")}>Home</span>
          <div className="nav-separator"></div>
          <span onClick={() => setView("gallery")}>Works</span>
          <div className="nav-separator"></div>
          <span onClick={() => setView("about")}>About Me</span>
        </div>
        <img src={logo} className="nav-mini-logo" alt="mini-logo" />
      </nav>

      <AnimatePresence mode="wait">
        {view === "landing" && (
          <motion.main
            key="landing"
            className="landing-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="landing-content">
              {/* Left Side: Logo and Name */}
              <div className="landing-left">
                <img src={logo} className="landing-hero-logo" alt="Hero Logo" />
                <h1 className="landing-name">
                  MAI
                  <br />
                  CRESPO
                </h1>
              </div>

              {/* Right Side: Intro and Profile */}
              <div className="landing-right">
                <p className="landing-intro">
                  Hello, I'm a <strong>UI/UX Designer</strong> with a strong
                  background in
                  <strong> Illustration and Graphic Design</strong>. Aside from
                  problem-solving through tech, I like to draw crazy weird dark
                  things.
                </p>
                <button
                  className="pill-button"
                  onClick={() => setView("gallery")}
                >
                  PICK A CARD
                </button>

                <div className="profile-section">
                  <div className="profile-circle-container">
                    <img src={me} className="profile-img" alt="Mai Crespo" />
                    {/* Curved Text Path */}
                    <svg className="curved-text-svg" viewBox="0 0 100 100">
                      <path
                        id="circlePath"
                        d="M 10,50 A 40,40 0 1,1 90,50"
                        fill="transparent"
                      />
                      <text className="curved-text">
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
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
