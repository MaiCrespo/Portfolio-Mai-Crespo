import React from "react";
import { motion } from "framer-motion";
import logo from "./assets/Head@300x.png";

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.main
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src={logo}
        alt="Logo"
        className="logo"
        variants={itemVariants}
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
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        PICK A CARD
      </motion.button>
    </motion.main>
  );
}

export default App;
