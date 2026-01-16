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

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        {view === "landing" && (
          <motion.main
            key="landing"
            className="landing-container"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.img
              layoutId="logo"
              src={logo}
              className="landing-logo"
              variants={itemVariants}
            />
            <motion.h1
              layoutId="main-title"
              className="title"
              variants={itemVariants}
            >
              MAI CRESPO
            </motion.h1>
            <motion.p className="description" variants={itemVariants}>
              Hello, I'm a UI/UX Designer with a strong background in <br />
              Illustration and Graphic Design. Aside from problem-solving <br />
              through tech, I like to draw crazy weird dark things.
            </motion.p>
            <motion.button
              className="cta-button"
              variants={itemVariants}
              onClick={() => setView("gallery")}
            >
              PICK A CARD
            </motion.button>
          </motion.main>
        )}

        {view === "gallery" && (
          <motion.div
            key="gallery"
            className="screen-content"
            exit={{ opacity: 0 }}
          >
            <header className="nav-header">
              <div />
              <motion.h1
                layoutId="main-title"
                className="nav-name"
                onClick={() => setView("landing")}
              >
                MAI CRESPO
              </motion.h1>
              <motion.img
                layoutId="logo"
                src={logo}
                className="nav-logo"
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
                whileHover={{ y: -40, rotate: 0, scale: 1.1 }}
              />
              <motion.img
                src={cardGraphic}
                className="card"
                variants={cardFlick}
                initial="hidden"
                animate="visible"
                custom={1}
                whileHover={{ y: -40, rotate: 0, scale: 1.1 }}
              />
              <motion.img
                src={cardIllustration}
                className="card"
                variants={cardFlick}
                initial="hidden"
                animate="visible"
                custom={2}
                whileHover={{ y: -40, rotate: 0, scale: 1.1 }}
                onClick={() => setView("illustrations")}
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
              />
            </header>
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
