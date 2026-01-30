import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/Head@300x.png";
import cardUI from "./assets/Card - UI:UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustration from "./assets/Card - Illustrations.png";

function App() {
  const [showCards, setShowCards] = useState(false);

  const cardFlick = {
    hidden: { opacity: 0, y: 500, rotate: 20, x: -100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      x: 0,
      rotate: i === 0 ? -15 : i === 1 ? 5 : 15, // Mimics a natural spread
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    }),
  };

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        {!showCards ? (
          /* LANDING PAGE */
          <motion.main
            key="landing"
            className="container"
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <motion.img
              layoutId="logo"
              src={logo}
              className="logo"
              whileHover={{ rotate: [0, -5, 5, -5, 5, 0] }}
            />
            <motion.h1 layoutId="main-title" className="title">
              MAI CRESPO
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="description"
            >
              Hello, I'm a UI/UX Designer with a strong background in <br />
              Illustration and Graphic Design.
            </motion.p>
            <motion.button
              className="cta-button"
              onClick={() => setShowCards(true)}
              whileHover={{ scale: 1.1 }}
            >
              PICK A CARD
            </motion.button>
          </motion.main>
        ) : (
          /* CARD GALLERY SCREEN */
          <motion.div key="gallery" className="gallery-screen">
            <div className="card-screen-header">
              <motion.h1
                layoutId="main-title"
                className="title"
                style={{ fontSize: "2.5rem" }}
              >
                MAI CRESPO
              </motion.h1>
              <motion.img
                layoutId="logo"
                src={logo}
                className="logo"
                style={{ width: "50px" }}
              />
            </div>

            <div className="cards-container">
              {[cardUI, cardGraphic, cardIllustration].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  className="card"
                  variants={cardFlick}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  whileHover={{ y: -20, rotate: 0, scale: 1.05 }}
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
