import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/Head@300x.png";
import cardUI from "./assets/Card - UI:UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustration from "./assets/Card - Illustrations.png";

// Import All Assets
const illustrationImages = import.meta.glob("./assets/Illustrations/*.{png,jpg,jpeg,svg}", { eager: true });
const graphicImages = import.meta.glob("./assets/Graphic Design/*.{png,jpg,jpeg,svg,pdf}", { eager: true });

const manualOrderIllustration = [
  "Abomination", "Satanic_Panic", "Frog_Tarot", "Mushroom_Friends", "Zombie_Food_Die_Cut",
  "Bento", "Pinot_Snacks", "Pride_Month", "Catholicore_Die_Cut", "Jujumagic_Die_Cut",
  "Moths_Die_Cut", "Mul_Naengmyun", "Find_Your_Tribe", "Patrick_Stump_Chibi",
  "Pearl-Of-The-Orient", "Scary_Ladies_Die_Cut", "Food_Die_Cut", "Monster_Head",
  "Realistic_Gerard", "Ghost", "Gerard_Way_Chibi", "Gerard_Way_Danger_Things",
  "Gadget", "Death", "Delirium", "Desire", "Dream", "Corinthian", "Aziraphale",
  "Flaming_Sword_Aziraphale_"
];

const manualOrderGraphic = [
  "Hermit", "Goose", "Superhero", "1st", "2nd", "3rd", "Wormhole", 
  "Gerard Way_", "Swaolamb", "Travel Brochure", "pencil art", 
  "BEEF", "CHICKEN", "SHRIMP", "Can Mock-Up", "Yungblud", "Yungblud2"
];

// Process Data
const illustrations = Object.entries(illustrationImages).map(([path, mod]) => {
  const fileName = path.split('/').pop().split('.')[0];
  return { src: mod.default, name: fileName, isDieCut: fileName.includes("_Die_Cut"), isSpecialLarge: fileName === "Pearl-Of-The-Orient" || fileName === "Ghost" };
}).sort((a, b) => manualOrderIllustration.indexOf(a.name) - manualOrderIllustration.indexOf(b.name));

const graphics = Object.entries(graphicImages).map(([path, mod]) => {
  const fileName = path.split('/').pop().split('.')[0];
  return { src: mod.default, name: fileName, isPDF: path.toLowerCase().endsWith(".pdf") };
}).sort((a, b) => {
  const indexA = manualOrderGraphic.indexOf(a.name);
  const indexB = manualOrderGraphic.indexOf(b.name);
  return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
});

function App() {
  const [view, setView] = useState("landing");

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        
        {/* LANDING */}
        {view === "landing" && (
          <motion.main key="landing" className="landing-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.img 
              src={logo} className="landing-logo" 
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              whileHover={{ 
                x: [0, -2, 2, -2, 2, 0], y: [0, 1, -1, 1, -1, 0], rotate: [0, -1, 1, -1, 1, 0],
                transition: { duration: 0.1, repeat: Infinity }
              }} 
            />
            <h1 className="landing-title">MAI CRESPO</h1>
            <p className="landing-description">UI/UX Designer & Illustrator</p>
            <button className="cta-button" onClick={() => setView("gallery")}>PICK A CARD</button>
          </motion.main>
        )}

        {/* GALLERY SELECTION */}
        {view === "gallery" && (
          <motion.div key="gallery" className="gallery-screen" exit={{ opacity: 0 }}>
            <div className="card-screen-header">
              <h1 className="header-name-left" onClick={() => setView("landing")}>MAI CRESPO</h1>
              <img src={logo} className="header-logo-right" onClick={() => setView("landing")} />
            </div>
            <h2 className="choose-one-text">Choose one</h2>
            <div className="cards-flex-container">
              <motion.img src={cardUI} className="tarot-card" initial={{ y: 500 }} animate={{ y: 0, rotate: -10 }} whileHover={{ y: -30, rotate: 0 }} />
              <motion.img src={cardGraphic} className="tarot-card" initial={{ y: 500 }} animate={{ y: 0, rotate: 0 }} whileHover={{ y: -30 }} onClick={() => setView("graphicDesign")} />
              <motion.img src={cardIllustration} className="tarot-card" initial={{ y: 500 }} animate={{ y: 0, rotate: 10 }} whileHover={{ y: -30, rotate: 0 }} onClick={() => setView("illustrations")} />
            </div>
          </motion.div>
        )}

        {/* GRAPHIC DESIGN GALLERY */}
        {view === "graphicDesign" && (
          <motion.div key="graphicDesign" className="horizontal-gallery-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="card-screen-header fixed-header">
              <div className="header-back-link" onClick={() => setView("gallery")}>&lt; GRAPHIC DESIGN</div>
              <h1 className="header-name-center" onClick={() => setView("landing")}>MAI CRESPO</h1>
              <img src={logo} className="header-logo-right" onClick={() => setView("landing")} />
            </div>
            <div className="horizontal-scroll-container">
              {graphics.map((item, i) => (
                <motion.div key={i} className="horizontal-item" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  {item.isPDF ? (
                    /* PDF CARD: Clean look that doesn't break the page */
                    <div className="pdf-card" onClick={() => window.open(item.src, "_blank")}>
                       <div className="pdf-card-content">
                          <span className="pdf-icon">📄</span>
                          <p className="pdf-title">{item.name}</p>
                          <span className="pdf-action">CLICK TO VIEW</span>
                       </div>
                    </div>