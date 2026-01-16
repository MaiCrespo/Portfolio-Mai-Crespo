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

const manualOrder = [
  "Die_Cut_Stickers_1",
  "Die_Cut_Stickers_2",
  "Food_Stickers",
  "Character_Art",
];

const illustrations = Object.entries(illustrationImages)
  .map(([path, mod]) => ({
    src: mod.default,
    name: path.split("/").pop().split(".")[0],
    isDieCut: path.includes("_Die_Cut"),
  }))
  .sort((a, b) => {
    const indexA = manualOrder.indexOf(a.name);
    const indexB = manualOrder.indexOf(b.name);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return b.isDieCut - a.isDieCut;
  });

function App() {
  const [view, setView] = useState("landing");

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        {view === "landing" && (
          <motion.main
            key="landing"
            className="container"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={logo}
              className="landing-logo"
              whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.3 }}
            />
            <motion.h1 className="title" variants={itemVariants}>
              MAI CRESPO
            </motion.h1>
            <motion.p className="description" variants={itemVariants}>
              Hello, I'm a UI/UX Designer with a strong background in <br />
              Illustration and Graphic Design. Aside from problem-solving <br />
              through tech, I like to draw crazy weird dark things.
            </motion.p>
            <motion.button
              className="cta-button"
              onClick={() => setView("gallery")}
            >
              PICK A CARD
            </motion.button>
          </motion.main>
        )}

        {view === "gallery" && (
          <motion.div
            key="gallery"
            className="gallery-screen"
            exit={{ opacity: 0 }}
          >
            <div className="card-screen-header">
              <h1
                className="header-name left"
                onClick={() => setView("landing")}
              >
                MAI CRESPO
              </h1>
              <img
                src={logo}
                className="header-logo-small"
                onClick={() => setView("landing")}
              />
            </div>
            <h2 className="sub-header">Choose one</h2>
            <div className="cards-container">
              {[cardUI, cardGraphic, cardIllustration].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  className="card"
                  initial={{ y: 500, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    rotate: i === 0 ? -10 : i === 2 ? 10 : 0,
                  }}
                  whileHover={{ y: -30, rotate: 0, scale: 1.05 }}
                  onClick={() => i === 2 && setView("illustrations")}
                />
              ))}
            </div>
          </motion.div>
        )}

        {view === "illustrations" && (
          <motion.div key="illustrations" className="gallery-screen scrollable">
            <div className="card-screen-header">
              <div className="header-back" onClick={() => setView("gallery")}>
                &lt; ILLUSTRATIONS
              </div>
              <h1
                className="header-name center"
                onClick={() => setView("landing")}
              >
                MAI CRESPO
              </h1>
              <img
                src={logo}
                className="header-logo-small"
                onClick={() => setView("landing")}
              />
            </div>
            <div className="zigzag-grid">
              {illustrations.map((item, i) => (
                <div
                  key={i}
                  className={`zigzag-row ${
                    i % 2 === 0 ? "left-row" : "right-row"
                  }`}
                >
                  <motion.img
                    src={item.src}
                    className={`large-illustration ${
                      item.isDieCut ? "die-cut-large" : ""
                    }`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
