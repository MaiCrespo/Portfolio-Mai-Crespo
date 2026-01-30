import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/Head@300x.png";
import me from "./assets/misc/me.webp";
import cardUI from "./assets/Card - UI:UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustration from "./assets/Card - Illustrations.png";

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
    return { src: mod.default, name: fileName };
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

  useEffect(() => {
    if (!activeLightbox) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeLightbox]);

  const NavMenu = () => (
    <nav className="top-nav-bar">
      <div className="nav-links">
        <span onClick={() => setView("landing")}>Home</span>
        <span onClick={() => setView("gallery")}>Works</span>
        <span onClick={() => setView("landing")}>About Me</span>
      </div>
      <img
        src={logo}
        className="nav-mini-logo"
        alt="logo"
        onClick={() => setView("landing")}
      />
    </nav>
  );

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
            <NavMenu />
            <div className="landing-content">
              <div className="landing-left">
                <img src={logo} className="landing-hero-logo" alt="Main Logo" />
                <h1 className="landing-name">
                  MAI
                  <br />
                  CRESPO
                </h1>
              </div>
              <div className="landing-right">
                <p className="landing-intro">
                  Hello, I'm a <strong>UI/UX Designer</strong> with a strong
                  background in
                  <strong> Illustration and Graphic Design</strong>. Aside from
                  problem-solving through tech, I like to draw crazy weird dark
                  things.
                </p>
                <div className="cta-wrapper">
                  <button
                    className="pill-button"
                    onClick={() => setView("gallery")}
                  >
                    PICK A CARD
                  </button>
                </div>
                <div className="profile-section">
                  <div className="profile-circle-container">
                    <img src={me} className="profile-img" alt="Mai Crespo" />
                    <svg className="curved-text-svg" viewBox="0 0 100 100">
                      <path
                        id="circlePath"
                        d="M 10,50 A 40,40 0 1,1 90,50"
                        fill="transparent"
                      />
                      <text className="curved-text">
                        <textPath xlinkHref="#circlePath">
                          Learn more about me!
                        </textPath>
                      </text>
                    </svg>
                    <span className="or-not">or not...</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.main>
        )}

        {view === "gallery" && (
          <motion.div
            key="gallery"
            className="gallery-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NavMenu />
            <h2 className="choose-text">Choose One</h2>
            <div className="cards-container">
              <motion.img
                src={cardUI}
                className="tarot-card"
                whileHover={{ y: -20, scale: 1.05 }}
              />
              <motion.img
                src={cardGraphic}
                className="tarot-card"
                whileHover={{ y: -20, scale: 1.05 }}
                onClick={() => setView("graphicDesign")}
              />
              <motion.img
                src={cardIllustration}
                className="tarot-card"
                whileHover={{ y: -20, scale: 1.05 }}
                onClick={() => setView("illustrations")}
              />
            </div>
          </motion.div>
        )}

        {view === "illustrations" && (
          <motion.div
            key="illustrations"
            className="scroll-gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <NavMenu />
            <div className="gallery-intro">
              <h1>ILLUSTRATIONS</h1>
              <p>
                Estranged Amalgamations: An assortment of drawings and dark
                inspirations.
              </p>
            </div>
            <div className="zigzag-grid">
              {illustrations.map((item, i) => (
                <motion.div
                  key={i}
                  className={`zigzag-item ${i % 2 === 0 ? "left" : "right"}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <img src={item.src} alt={item.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {view === "graphicDesign" && (
          <motion.div
            key="graphicDesign"
            className="horizontal-gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <NavMenu />
            <div className="horizontal-scroll">
              {graphics.map((item, i) => (
                <div key={i} className="horizontal-card">
                  <img
                    src={item.imgSrc}
                    onClick={() =>
                      setActiveLightbox({
                        imgSrc: item.imgSrc,
                        pdfSrc: item.pdfSrc,
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
        {activeLightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
          >
            <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
              <img src={activeLightbox.imgSrc} alt="Lightbox" />
              {activeLightbox.pdfSrc && (
                <button onClick={() => window.open(activeLightbox.pdfSrc)}>
                  View PDF
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
