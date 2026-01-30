import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/Head@300x.png";
import cardUI from "./assets/Card - UI:UX.png";
import cardGraphic from "./assets/Card - Graphic Design.png";
import cardIllustration from "./assets/Card - Illustrations.png";

function App() {
  const [showCards, setShowCards] = useState(false);

  // Entrance animation for landing page items
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
    hidden: { opacity: 0, y: 500, rotate: 20, x: -100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      x: 0,
      rotate: i === 0 ? -15 : i === 1 ? 5 : 15,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    }),
  };

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        {!showCards ? (
          <motion.main
            key="landing"
            className="container"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            // This ensures children (logo, h1, etc) animate in sequence
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.img
              layoutId="logo"
              src={logo}
              className="logo"
              variants={itemVariants}
              whileHover={{ rotate: [0, -5, 5, -5, 5, 0] }}
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
              onClick={() => setShowCards(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              PICK A CARD
            </motion.button>
          </motion.main>
        ) : (
          <motion.div key="gallery" className="gallery-screen">
            <div className="card-screen-header">
              <motion.h1
                layoutId="main-title"
                className="title"
                style={{ fontSize: "2rem", cursor: "pointer" }}
                onClick={() => setShowCards(false)}
              >
                MAI CRESPO
              </motion.h1>

              <motion.img
                layoutId="logo"
                src={logo}
                className="logo"
                style={{ width: "50px", cursor: "pointer" }}
                onClick={() => setShowCards(false)}
                whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
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
                  exit={{ y: 800, opacity: 0 }}
                  custom={i}
                  whileHover={{ y: -30, rotate: 0, scale: 1.1, zIndex: 10 }}
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
