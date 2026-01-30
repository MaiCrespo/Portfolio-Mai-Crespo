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
  const [view, setView] = useState("landing"); // 'landing', 'gallery', 'illustrations'

  const cardFlick = {
    hidden: { opacity: 0, y: 600, rotate: 25, x: -150 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      x: 0,
      rotate: i === 0 ? -12 : i === 1 ? 2 : 12,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 50,
        damping: 14,
      },
    }),
  };

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
          <p style={{ maxWidth: "600px", marginBottom: "30px" }}>
            Hello, I'm a UI/UX Designer with a strong background in Illustration
            and Graphic Design.
          </p>
          <button className="cta-button" onClick={() => setView("gallery")}>
            PICK A CARD
          </button>
        </motion.div>
      )}

      {view === "gallery" && (
        <motion.div
          key="gallery"
          className="gallery-screen"
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
              className="nav-logo-small"
              onClick={() => setView("landing")}
            />
          </header>

          <h2 className="sub-header">choose one</h2>
          <div className="cards-container">
            <motion.img
              src={cardUI}
              className="card"
              variants={cardFlick}
              initial="hidden"
              animate="visible"
              custom={0}
              whileHover={{ y: -30, scale: 1.05 }}
            />
            <motion.img
              src={cardGraphic}
              className="card"
              variants={cardFlick}
              initial="hidden"
              animate="visible"
              custom={1}
              whileHover={{ y: -30, scale: 1.05 }}
            />
            <motion.img
              src={cardIllustration}
              className="card"
              variants={cardFlick}
              initial="hidden"
              animate="visible"
              custom={2}
              whileHover={{ y: -30, scale: 1.05 }}
              onClick={() => setView("illustrations")}
            />
          </div>
        </motion.div>
      )}

      {view === "illustrations" && (
        <motion.div
          key="illustrations"
          className="gallery-screen"
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
              className="nav-logo-small"
              onClick={() => setView("landing")}
            />
          </header>

          <div className="illustrations-grid">
            {illustrations.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                className="illustration-item"
                whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 3 : -3 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
