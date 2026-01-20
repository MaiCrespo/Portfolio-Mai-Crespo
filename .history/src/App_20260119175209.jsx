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

const manualOrderIllustration = [
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
  .sort(
    (a, b) =>
      manualOrderIllustration.indexOf(a.name) -
      manualOrderIllustration.indexOf(b.name)
  );

const graphics = getGraphicData();

function App() {
  const [view, setView] = useState("landing");
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const menuItems = [
    { label: "Home", view: "landing" },
    { label: "Gallery", view: "gallery" },
    { label: "Illustrations", view: "illustrations" },
    { label: "Graphic Design", view: "graphicDesign" },
  ];

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        {/* LANDING PAGE */}
        {view === "landing" && (
          <motion.main
            key="landing"
            className="landing-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="logo-dropdown-container"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <motion.img
                src={logo}
                className="landing-logo-centered"
                whileHover={{
                  x: [0, -2, 2, -2, 2, 0],
                  y: [0, 1, -1, 1, -1, 0],
                  rotate: [0, -1, 1, -1, 1, 0],
                  transition: { duration: 0.1, repeat: Infinity },
                }}
              />
              {isLogoHovered && (
                <motion.div
                  className="logo-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuItems.map((item) => (
                    <div
                      key={item.view}
                      className="dropdown-item"
                      onClick={() => {
                        setView(item.view);
                        setIsLogoHovered(false);
                      }}
                    >
                      {item.label}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
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

        {/* SELECTION SCREEN */}
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
              <div
                className="logo-dropdown-container header-logo-wrapper"
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
              >
                <img
                  src={logo}
                  className="header-logo-right"
                  onClick={() => setView("landing")}
                />
                {isLogoHovered && (
                  <motion.div
                    className="logo-dropdown dropdown-right"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {menuItems.map((item) => (
                      <div
                        key={item.view}
                        className="dropdown-item"
                        onClick={() => {
                          setView(item.view);
                          setIsLogoHovered(false);
                        }}
                      >
                        {item.label}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
            <h2 className="choose-one-text">Choose one</h2>
            <div className="cards-flex-container">
              <motion.img
                src={cardUI}
                className="tarot-card"
                animate={{ y: 40, rotate: -8 }}
                whileHover={{ y: -20, rotate: 0, scale: 1.05 }}
              />
              <motion.img
                src={cardGraphic}
                className="tarot-card"
                animate={{ y: -20, rotate: 3 }}
                whileHover={{ y: -50, rotate: 0, scale: 1.05 }}
                onClick={() => setView("graphicDesign")}
              />
              <motion.img
                src={cardIllustration}
                className="tarot-card"
                animate={{ y: 60, rotate: 12 }}
                whileHover={{ y: 10, rotate: 0, scale: 1.05 }}
                onClick={() => setView("illustrations")}
              />
            </div>
          </motion.div>
        )}

        {/* ILLUSTRATIONS (ZIGZAG) */}
        {view === "illustrations" && (
          <motion.div
            key="illustrations"
            className="gallery-screen-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="card-screen-header fixed-header">
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
              <div
                className="logo-dropdown-container header-logo-wrapper"
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
              >
                <img
                  src={logo}
                  className="header-logo-right"
                  onClick={() => setView("landing")}
                />
                {isLogoHovered && (
                  <motion.div
                    className="logo-dropdown dropdown-right"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {menuItems.map((item) => (
                      <div
                        key={item.view}
                        className="dropdown-item"
                        onClick={() => {
                          setView(item.view);
                          setIsLogoHovered(false);
                        }}
                      >
                        {item.label}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
            <div className="illustrations-intro">
              <h1 className="intro-title">Estranged Amalgamations</h1>
              <p className="intro-desc">
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
                    className={`illustration-img ${
                      item.isDieCut ? "img-die-cut" : ""
                    } ${item.isSpecialLarge ? "img-orient-large" : ""}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* GRAPHIC DESIGN (HORIZONTAL + NUMBERS) */}
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
              <div
                className="logo-dropdown-container header-logo-wrapper"
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
              >
                <img
                  src={logo}
                  className="header-logo-right"
                  onClick={() => setView("landing")}
                />
                {isLogoHovered && (
                  <motion.div
                    className="logo-dropdown dropdown-right"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {menuItems.map((item) => (
                      <div
                        key={item.view}
                        className="dropdown-item"
                        onClick={() => {
                          setView(item.view);
                          setIsLogoHovered(false);
                        }}
                      >
                        {item.label}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
            <div className="horizontal-scroll-container">
              {graphics.map((item, i) => (
                <div key={i} className="horizontal-item-container">
                  <span className="item-number">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <img
                    src={item.imgSrc}
                    className="horizontal-img"
                    onClick={() =>
                      item.pdfSrc && window.open(item.pdfSrc, "_blank")
                    }
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
