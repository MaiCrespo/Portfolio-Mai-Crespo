import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/Head@300x.png";
import cardUI from "./assets/Card - UI:UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustration from "./assets/Card - Illustrations.png";

// Asset Imports
const illustrationImages = import.meta.glob(
  "./assets/Illustrations/*.{png,jpg,jpeg,svg}",
  { eager: true }
);
const graphicImages = import.meta.glob(
  "./assets/Graphic Design/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

// Specific sequence from your Figma frame
const manualOrderGraphic = [
  "Hermit",
  "Goose",
  "Superhero",
  "3rd",
  "2nd",
  "1st",
  "Wormhole", // Note: Ensure this is a PNG/JPG in assets to show up
  "Gerard Way_",
  "Swaolamb",
  "Travel Brochure",
  "pencil art",
  "BEEF",
  "CHICKEN",
  "SHRIMP",
  "Can Mock-Up",
  "Yungblud",
  "Yungblud2",
];

// Processing Graphic Design Assets
const graphics = Object.entries(graphicImages)
  .filter(([path]) => !path.endsWith(".pdf")) // Skip PDFs for the image gallery
  .map(([path, mod]) => ({
    src: mod.default,
    name: path.split("/").pop().split(".")[0],
  }))
  .sort((a, b) => {
    const indexA = manualOrderGraphic.indexOf(a.name);
    const indexB = manualOrderGraphic.indexOf(b.name);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    return 0;
  });

// ... (Illustrations processing remains the same as previous)

function App() {
  const [view, setView] = useState("landing");

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        {view === "landing" && (
          <motion.main
            key="landing"
            className="landing-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={logo}
              className="landing-logo"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              whileHover={{
                x: [0, -2, 2, -2, 2, 0],
                y: [0, 1, -1, 1, -1, 0],
                rotate: [0, -1, 1, -1, 1, 0],
                transition: { duration: 0.1, repeat: Infinity },
              }}
            />
            <h1 className="landing-title">MAI CRESPO</h1>
            <p className="landing-description">
              Hello, I'm a UI/UX Designer with a strong background in <br />{" "}
              Illustration and Graphic Design...
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
              <h1
                className="header-name-left"
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
            <h2 className="choose-one-text">Choose one</h2>
            <div className="cards-flex-container">
              <motion.img
                src={cardUI}
                className="tarot-card"
                whileHover={{ y: -30 }}
                initial={{ y: 500 }}
                animate={{ y: 0, rotate: -10 }}
              />
              <motion.img
                src={cardGraphic}
                className="tarot-card"
                whileHover={{ y: -30 }}
                initial={{ y: 500 }}
                animate={{ y: 0, rotate: 0 }}
                onClick={() => setView("graphicDesign")}
              />
              <motion.img
                src={cardIllustration}
                className="tarot-card"
                whileHover={{ y: -30 }}
                initial={{ y: 500 }}
                animate={{ y: 0, rotate: 10 }}
                onClick={() => setView("illustrations")}
              />
            </div>
          </motion.div>
        )}

        {view === "graphicDesign" && (
          <motion.div
            key="graphicDesign"
            className="horizontal-gallery-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="card-screen-header">
              <div
                className="header-back-link"
                onClick={() => setView("gallery")}
              >
                &lt; GRAPHIC DESIGN
              </div>
              <h1
                className="header-name-center"
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

            <div className="horizontal-scroll-container">
              {graphics.map((item, i) => (
                <motion.div
                  key={i}
                  className="horizontal-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="horizontal-img"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Illustrations view remains unchanged */}
      </AnimatePresence>
    </div>
  );
}

export default App;
