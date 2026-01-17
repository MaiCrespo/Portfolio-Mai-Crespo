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
  "Abomination",
  "Satanic_Panic",
  "Frog_Tarot",
  "Mushroom_Friends",
  "Zombie_Food_Die_Cut",
  "Bento",
  "Pinot_Snacks",
  "Pride_Month",
  "Catholicore_Die_Cut",
  "Jujumagic_Die_Cut",
  "Moths_Die_Cut",
  "Mul_Naengmyun",
  "Find_Your_Tribe",
  "Patrick_Stump_Chibi",
  "Pearl-Of-The-Orient",
  "Scary_Ladies_Die_Cut",
  "Food_Die_Cut",
  "Monster_Head",
  "Realistic_Gerard",
  "Ghost",
  "Gerard_Way_Chibi",
  "Gerard_Way_Danger_Things",
  "Gadget",
  "Death",
  "Delirium",
  "Desire",
  "Dream",
  "Corinthian",
  "Aziraphale",
  "Flaming_Sword_Aziraphale_",
];

const illustrations = Object.entries(illustrationImages)
  .map(([path, mod]) => {
    const fileName = path.split("/").pop().split(".")[0];
    return {
      src: mod.default,
      name: fileName,
      isDieCut: fileName.includes("_Die_Cut"),
      isSpecialLarge:
        fileName === "Pearl-Of-The-Orient" || fileName === "Ghost",
    };
  })
  .sort((a, b) => {
    const indexA = manualOrder.indexOf(a.name);
    const indexB = manualOrder.indexOf(b.name);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return 0;
  });

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
              whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
            />

            <motion.h1
              className="landing-title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              MAI CRESPO
            </motion.h1>

            <motion.p
              className="landing-description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hello, I'm a UI/UX Designer with a strong background in <br />
              Illustration and Graphic Design. Aside from problem-solving <br />
              through tech, I like to draw crazy weird dark things.
            </motion.p>

            <motion.button
              className="cta-button"
              onClick={() => setView("gallery")}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              {[cardUI, cardGraphic, cardIllustration].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  className="tarot-card"
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
          <motion.div
            key="illustrations"
            className="gallery-screen-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="card-screen-header">
              <div
                className="header-back-link"
                onClick={() => setView("gallery")}
              >
                &lt; ILLUSTRATIONS
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

            <div className="header-text-container">
              <h2 className="illustration-title">Estranged Amalgamations</h2>
              <p className="illustration-body">
                An assortment of drawings, fan art, sticker ideas, and
                spontaneous inspirations. Some are <br />
                deliberate. Some happened accidentally. All of them felt
                necessary at the time. <br />
                Thank you for witnessing the results.
              </p>
            </div>

            <div className="zigzag-layout">
              {illustrations.map((item, i) => (
                <div
                  key={i}
                  className={`zigzag-row ${
                    i % 2 === 0 ? "row-left" : "row-right"
                  }`}
                >
                  <motion.img
                    src={item.src}
                    className={`illustration-img 
                      ${item.isDieCut ? "img-die-cut" : ""} 
                      ${item.isSpecialLarge ? "img-orient-large" : ""}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
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
