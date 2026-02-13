import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import CardSelection from "./Cardselection";
import GotItCaseStudyNew from "./GotItCaseStudyNew";
import GraphicDesignPage from "./GraphicDesignPage";
import Underbroth from "./Underbroth";
import AceOfCups from "./AceOfCups";
import LoadingPage from "./LoadingPage";
import AboutMe from "./AboutMe";

import defaultCursor from "./assets/misc/Default.png";
import onClickCursor from "./assets/misc/OnClick.png";

function AppWrapper() {
  const [showLoading, setShowLoading] = useState(true);
  const cursorRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Custom cursor - applied globally
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "hide-cursor";
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      cursor.style.backgroundImage = `url(${onClickCursor})`;
      cursor.style.transform = `translate(-4px, -4px) rotate(45deg) scale(0.9)`;
    };

    const handleMouseUp = () => {
      cursor.style.backgroundImage = `url(${defaultCursor})`;
      cursor.style.transform = `translate(-4px, -4px) rotate(45deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      style?.remove();
    };
  }, []);

  if (showLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      {/* Global Custom Cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "72px",
          height: "72px",
          backgroundImage: `url(${defaultCursor})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-4px, -4px) rotate(45deg)",
          transition: "transform 0.05s ease",
        }}
      />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pick-a-card" element={<CardSelection />} />
        <Route path="/project/gotit" element={<GotItCaseStudyNew />} />
        <Route path="/graphic-design" element={<GraphicDesignPage />} />
        <Route path="/underbroth" element={<Underbroth />} />
        <Route path="/ace-of-cups" element={<AceOfCups />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default AppWrapper;
