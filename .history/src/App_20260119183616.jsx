import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/Head@300x.png";
import cardUI from "./assets/Card - UI:UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustration from "./assets/Card - Illustrations.png";

// Asset imports
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
  return Object.values(data).sort(
    (a, b) =>
      (manualOrderGraphic.indexOf(a.name) === -1
        ? 99
        : manualOrderGraphic.indexOf(a.name)) -
      (manualOrderGraphic.indexOf(b.name) === -1
        ? 99
        : manualOrderGraphic.indexOf(b.name))
  );
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
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLightbox, setActiveLightbox] = useState(null);

  const navItems = [
    { label: "About Me", target: "landing" },
    { label: "Illustrations", target: "illustrations" },
    { label: "Graphic Design", target: "graphicDesign" },
    { label: "UI/UX Design", target: "gallery" },
  ];

  useEffect(() => {
    if (!activeLightbox) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeLightbox]);

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        {/* REFINED NAVIGATION HEADER */}
        {view !== "landing" && view !== "graphicDesign" && (
          <div className="card-screen-header">
            <h1 className="header-name-left" onClick={() => setView("landing")}>
              MAI CRESPO
            </h1>
            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setIsNavOpen(true)}
              onMouseLeave={() => setIsNavOpen(false)}
            >
              <img src={logo} className="header-logo-trigger" alt="logo" />
              <AnimatePresence>
                {isNavOpen && (
                  <motion.div
                    className="nav-menu-container"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="nav-separator"></div>
                    <ul className="nav-menu-list">
                      {navItems.map((item, i) => (
                        <motion.li
                          key={item.label}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => {
                            setView(item.target);
                            setIsNavOpen(false);
                          }}
                        >
                          {item.label}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* LANDING */}
        {view === "landing" && (
          <motion.main
            key="landing"
            className="landing-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img src={logo} className="landing-logo-centered" />
            <h1 className="landing-title">MAI CRESPO</h1>
            <p className="landing-description">
              Hello, I'm a UI/UX Designer with a strong background in <br />{" "}
              Illustration and Graphic Design. Aside from problem-solving <br />{" "}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="choose-one-text">Choose One</h2>
            <div className="cards-flex-container">
              <motion.img
                src={cardUI}
                className="tarot-card"
                initial={{
                  opacity: 0,
                  x: -220,
                  y: -260,
                  rotate: -28,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 40,
                  rotate: -8,
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  mass: 0.9,
                  delay: 0.05,
                }}
                whileHover={{ y: -20, rotate: 0, scale: 1.05 }}
              />
              <motion.img
                src={cardGraphic}
                className="tarot-card"
                initial={{ opacity: 0, x: 0, y: -320, rotate: 22, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: -20,
                  rotate: 3,
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 20,
                  mass: 0.9,
                  delay: 0.12,
                }}
                whileHover={{ y: -50, rotate: 0, scale: 1.05 }}
                onClick={() => setView("graphicDesign")}
              />
              <motion.img
                src={cardIllustration}
                className="tarot-card"
                initial={{
                  opacity: 0,
                  x: 220,
                  y: -240,
                  rotate: 34,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 60,
                  rotate: 12,
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                  mass: 0.9,
                  delay: 0.19,
                }}
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
            <div className="illustrations-intro">
              <h1 className="intro-title">Estranged Amalgamations</h1>
              <p className="intro-desc">
                An assortment of drawings, fan art, sticker ideas, and
                spontaneous inspirations.
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
                    className="illustration-img"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* GRAPHIC DESIGN (HORIZONTAL) */}
        {view === "graphicDesign" && (
          <motion.div
            key="graphicDesign"
            className="horizontal-gallery-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="graphic-header">
              <div
                className="header-back-link"
                onClick={() => setView("gallery")}
              >
                &lt;{" "}
                <span className="header-back-link-text">GRAPHIC DESIGN</span>
              </div>
              <h1
                className="header-name-center"
                onClick={() => setView("landing")}
              >
                MAI CRESPO
              </h1>

              <div
                className="nav-dropdown-wrapper"
                onMouseEnter={() => setIsNavOpen(true)}
                onMouseLeave={() => setIsNavOpen(false)}
              >
                <img src={logo} className="header-logo-trigger" alt="logo" />
                <AnimatePresence>
                  {isNavOpen && (
                    <motion.div
                      className="nav-menu-container"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="nav-separator"></div>
                      <ul className="nav-menu-list">
                        {navItems.map((item, i) => (
                          <motion.li
                            key={item.label}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => {
                              setView(item.target);
                              setIsNavOpen(false);
                            }}
                          >
                            {item.label}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                      setActiveLightbox({
                        imgSrc: item.imgSrc,
                        pdfSrc: item.pdfSrc ?? null,
                        title: item.name ?? null,
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeLightbox?.imgSrc && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setActiveLightbox(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeLightbox.imgSrc}
                className="lightbox-image"
                alt={activeLightbox.title ?? "Graphic design work"}
              />

              <div className="lightbox-actions">
                {activeLightbox.pdfSrc && (
                  <button
                    className="lightbox-action-btn"
                    type="button"
                    onClick={() => window.open(activeLightbox.pdfSrc, "_blank")}
                  >
                    Open PDF
                  </button>
                )}
                <button
                  className="lightbox-action-btn"
                  type="button"
                  onClick={() => setActiveLightbox(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
