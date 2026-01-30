import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/Head red@300x.png"; // Maroon logo for the landing page
import whiteLogo from "./assets/Head@300x.png"; // White logo for the top nav
import me from "./assets/misc/me.webp";

function App() {
  const [view, setView] = useState("landing");

  return (
    <div className="app-wrapper">
      {/* Top Rounded Nav Bar */}
      <nav className="top-nav-bar">
        <div className="nav-links">
          <span onClick={() => setView("landing")}>Home</span>
          <div className="nav-separator"></div>
          <span onClick={() => setView("gallery")}>Works</span>
          <div className="nav-separator"></div>
          <span onClick={() => setView("about")}>About Me</span>
        </div>
        <img src={whiteLogo} className="nav-mini-logo" alt="logo" />
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
              <div className="landing-left">
                <img src={logo} className="landing-hero-logo" alt="Mai Logo" />
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
                <div className="cta-area">
                  <button
                    className="pill-button"
                    onClick={() => setView("gallery")}
                  >
                    PICK A CARD
                  </button>
                </div>

                <div className="profile-wrapper">
                  <div className="profile-circle">
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
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
