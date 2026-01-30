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
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        {view === "landing" && (
          <motion.main
            key="landing"
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img src={logo} className="landing-logo" />
            <h1 className="title">MAI CRESPO</h1>
            <p className="description">
              Hello, I'm a UI/UX Designer with a strong background in <br />
              Illustration and Graphic Design. Aside from problem-solving <br />
              through tech, I like to draw crazy weird dark things.
            </p>
            <button className="cta-button" onClick={() => setView("gallery")}>
              PICK A CARD
            </button>
          </motion.main>
        )}

        {view === "gallery" && (
          <motion.div
            key="gallery"
            className="gallery-screen"
            exit={{ opacity: 0 }}
          >
            <div className="card-screen-header">
              <div></div>
              <h1
                className="header-title-centered"
                onClick={() => setView("landing")}
              >
                MAI CRESPO
              </h1>
              <img
                src={logo}
                className="header-logo-right"
                onClick={() => setView("landing")}
              />
            </div>

            <h2 className="sub-header">choose one</h2>

            <div className="cards-container">
              <motion.img
                src={cardUI}
                className="card"
                whileHover={{ y: -20, scale: 1.05 }}
              />
              <motion.img
                src={cardGraphic}
                className="card"
                whileHover={{ y: -20, scale: 1.05 }}
              />
              <motion.img
                src={cardIllustration}
                className="card"
                whileHover={{ y: -20, scale: 1.05 }}
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
            <div className="card-screen-header">
              <div className="back-link" onClick={() => setView("gallery")}>
                &lt; ILLUSTRATIONS
              </div>
              <h1
                className="header-title-centered"
                onClick={() => setView("landing")}
              >
                MAI CRESPO
              </h1>
              <img
                src={logo}
                className="header-logo-right"
                onClick={() => setView("landing")}
              />
            </div>

            <div className="illustrations-grid">
              {illustrations.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  className="illustration-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
