import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/Head@300x.png";
import cardUI from "./assets/Card - UI:UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustration from "./assets/Card - Illustrations.png";

// Import Assets
const illustrationImages = import.meta.glob(
  "./assets/Illustrations/*.{png,jpg,jpeg,svg}",
  { eager: true }
);
const graphicAssets = import.meta.glob(
  "./assets/Graphic Design/*.{png,jpg,jpeg,svg,pdf}",
  { eager: true }
);

const manualOrderGraphic = [
  "Hermit",
  "Goose",
  "Superhero",
  "1st",
  "2nd",
  "3rd",
  "Wormhole",
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

const getGraphicData = () => {
  const assets = Object.entries(graphicAssets);
  const data = {};
  assets.forEach(([path, mod]) => {
    const fileName = path.split("/").pop().split(".")[0];
    const extension = path.split(".").pop().toLowerCase();
    if (!data[fileName]) data[fileName] = { name: fileName };
    if (extension === "pdf") data[fileName].pdfSrc = mod.default;
    else data[fileName].imgSrc = mod.default;
  });
  return Object.values(data).sort((a, b) => {
    const indexA = manualOrderGraphic.indexOf(a.name);
    const indexB = manualOrderGraphic.indexOf(b.name);
    return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
  });
};

const graphics = getGraphicData();

function App() {
  const [view, setView] = useState("landing");

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        {/* LANDING - LOGO CENTERED WITH SHAKE */}
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
              className="landing-logo-centered"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              whileHover={{
                x: [0, -2, 2, -2, 2, 0],
                y: [0, 1, -1, 1, -1, 0],
                rotate: [0, -1, 1, -1, 1, 0],
                transition: { duration: 0.1, repeat: Infinity },
              }}
            />
            <h1 className="landing-title">MAI CRESPO</h1>
            <p className="landing-description">
              Hello, I'm a UI/UX Designer with a strong background in <br />
              Illustration and Graphic Design. Aside from problem-solving <br />
              through tech, I like to draw crazy weird dark things.
            </p>
            <button className="cta-button" onClick={() => setView("gallery")}>
              PICK A CARD
            </button>
          </motion.main>
        )}

        {/* SELECTION SCREEN - LOGO ON RIGHT */}
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
              />
              <motion.img
                src={cardGraphic}
                className="tarot-card"
                whileHover={{ y: -30 }}
                onClick={() => setView("graphicDesign")}
              />
              <motion.img
                src={cardIllustration}
                className="tarot-card"
                whileHover={{ y: -30 }}
                onClick={() => setView("illustrations")}
              />
            </div>
          </motion.div>
        )}

        {/* GRAPHIC DESIGN GALLERY - LOGO ON RIGHT */}
        {view === "graphicDesign" && (
          <motion.div
            key="graphicDesign"
            className="horizontal-gallery-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="card-screen-header fixed-header">
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
                <div key={i} className="horizontal-item">
                  <img
                    src={item.imgSrc}
                    className="horizontal-img"
                    onClick={() =>
                      item.pdfSrc && window.open(item.pdfSrc, "_blank")
                    }
                    style={{ cursor: item.pdfSrc ? "pointer" : "default" }}
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
