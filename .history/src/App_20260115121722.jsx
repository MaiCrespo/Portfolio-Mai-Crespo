import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/Head@300x.png";
import cardUI from "./assets/Card - UI:UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustration from "./assets/Card - Illustrations.png";

const illustrationImages = import.meta.glob(
  "./assets/Illustrations/*.{png,jpg,jpeg,svg}",
  { eager: true }
);
const illustrations = Object.values(illustrationImages).map(
  (mod) => mod.default
);

function App() {
  const [view, setView] = useState("landing");

  return (
    <AnimatePresence mode="wait">
      {view === "landing" && (
        <motion.div
          key="landing"
          className="landing-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <img src={logo} className="landing-logo" alt="Logo" />
          <h1 className="landing-title">MAI CRESPO</h1>
          <p
            className="description"
            style={{ maxWidth: "600px", marginBottom: "30px" }}
          >
            Hello, I'm a UI/UX Designer with a strong background in <br />
            Illustration and Graphic Design. Aside from problem-solving <br />
            through tech, I like to draw crazy weird dark things.
          </p>
          <button className="cta-button" onClick={() => setView("gallery")}>
            PICK A CARD
          </button>
        </motion.div>
      )}

      {view === "gallery" && (
        <motion.div
          key="gallery"
          className="screen-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <header className="nav-header">
            <div />
            <h1 className="nav-name" onClick={() => setView("landing")}>
              MAI CRESPO
            </h1>
            <img
              src={logo}
              className="nav-logo"
              onClick={() => setView("landing")}
              alt="Logo"
            />
          </header>

          <h2 className="sub-header" style={{ marginTop: "160px" }}>
            choose one
          </h2>
          <div className="cards-container">
            <motion.img src={cardUI} className="card" whileHover={{ y: -20 }} />
            <motion.img
              src={cardGraphic}
              className="card"
              whileHover={{ y: -20 }}
            />
            <motion.img
              src={cardIllustration}
              className="card"
              onClick={() => setView("illustrations")}
              whileHover={{ y: -20 }}
            />
          </div>
        </motion.div>
      )}

      {view === "illustrations" && (
        <motion.div
          key="illustrations"
          className="screen-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <header className="nav-header">
            <div className="nav-back" onClick={() => setView("gallery")}>
              &lt; ILLUSTRATIONS
            </div>
            <h1 className="nav-name" onClick={() => setView("landing")}>
              MAI CRESPO
            </h1>
            <img
              src={logo}
              className="nav-logo"
              onClick={() => setView("landing")}
              alt="Logo"
            />
          </header>

          <div className="illustrations-grid">
            {illustrations.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                className="illustration-item"
                whileHover={{ scale: 1.1, rotate: 2 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
