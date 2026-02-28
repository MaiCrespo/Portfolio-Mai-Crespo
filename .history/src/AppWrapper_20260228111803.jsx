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
import TheDescentCaseStudy from "./TheDescentCaseStudy";
import DaybreakCaseStudy from "./DaybreakCaseStudy";

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

    const handleMouseMove = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.backgroundImage = `url(${onClickCursor})`;
      cursorRef.current.style.transform = `translate(-50%, -50%) rotate(45deg) scale(0.9)`;
    };

    const handleMouseUp = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.backgroundImage = `url(${defaultCursor})`;
      cursorRef.current.style.transform = `translate(-50%, -50%) rotate(45deg)`;
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

  return (
    <>
      {/* Global Custom Cursor - always rendered */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          left: "-100px",
          top: "-100px",
          width: "72px",
          height: "72px",
          backgroundImage: `url(${defaultCursor})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%) rotate(45deg)",
          transition: "transform 0.05s ease",
        }}
      />

      {showLoading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pick-a-card" element={<CardSelection />} />
          <Route path="/project/gotit" element={<GotItCaseStudyNew />} />
          <Route path="/graphic-design" element={<GraphicDesignPage />} />
          <Route path="/underbroth" element={<Underbroth />} />
          <Route path="/ace-of-cups" element={<AceOfCups />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/project/descent" element={<TheDescentCaseStudy />} />
          <Route path="/project/daybreak" element={<DaybreakCaseStudy />} />
        </Routes>
      )}
    </>
  );
}

export default AppWrapper;
