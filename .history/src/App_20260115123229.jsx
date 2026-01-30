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

  const cardFlick = {
    hidden: { opacity: 0, y: 600, rotate: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: i === 0 ? -12 : i === 1 ? 2 : 12,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 50,
        damping: 14,
      },
    }),
  };

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
            <img src={logo} className="landing-logo" alt="Logo" />
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
              <h1 className="header-name" onClick={() => setView("landing")}>
                MAI CRESPO
              </h1>
              <img
                src={logo}
                className="header-logo-small"
                onClick={() => setView("landing")}
              />
            </div>

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="card-screen-header">
              <div
                style={{
                  color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontFamily: "Hellishy",
                  fontSize: "1.5rem",
                }}
                onClick={() => setView("gallery")}
              >
                &lt; ILLUSTRATIONS
              </div>
              <h1 className="header-name" onClick={() => setView("landing")}>
                MAI CRESPO
              </h1>
              <img
                src={logo}
                className="header-logo-small"
                onClick={() => setView("landing")}
              />
            </div>

            <div className="illustrations-grid">
              {illustrations.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  className="illustration-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 3 : -3 }}
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
