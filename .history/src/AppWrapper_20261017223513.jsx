import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import GotItCaseStudyNew from "./GotItCaseStudyNew";
import GraphicDesignPage from "./GraphicDesignPage";
import UiuxPage from "./UiuxPage";
import Underbroth from "./Underbroth";
import AceOfCups from "./AceOfCups";
import RebelYourStyle from "./RebelYourStyle";
import Swaolamb from "./Swaolamb";
import ManilaElnido from "./ManilaElnido";
import LoadingPage from "./LoadingPage";
import AboutMe from "./AboutMe";
import TheDescentCaseStudy from "./TheDescentCaseStudy";
import DaybreakCaseStudy from "./DaybreakCaseStudy";
import OddsAndEnds from "./OddsAndEnds";

import defaultCursor from "./assets/misc/Default.png";
import onClickCursor from "./assets/misc/OnClick.png";

function AppWrapper() {
  const [showLoading, setShowLoading] = useState(true);
  const [hasMouse, setHasMouse] = useState(false);
  const cursorRef = useRef(null);

  // =========================================
  // LOADING SCREEN
  // =========================================
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // =========================================
  // DETECT DESKTOP MOUSE
  // =========================================
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateMouseSupport = () => {
      setHasMouse(mediaQuery.matches);
    };

    updateMouseSupport();

    mediaQuery.addEventListener("change", updateMouseSupport);

    return () => {
      mediaQuery.removeEventListener("change", updateMouseSupport);
    };
  }, []);

  // =========================================
  // CUSTOM CURSOR - DESKTOP ONLY
  // =========================================
  useEffect(() => {
    if (!hasMouse) return;

    // Hide the default cursor on desktop only
    const style = document.createElement("style");
    style.id = "hide-custom-cursor";
    style.textContent = `
      @media (hover: hover) and (pointer: fine) {
        * {
          cursor: none !important;
        }
      }
    `;

    document.head.appendChild(style);

    const handleMouseMove = (e) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      if (!cursorRef.current) return;

      cursorRef.current.style.backgroundImage = `url(${onClickCursor})`;
      cursorRef.current.style.transform =
        "translate(-50%, -50%) rotate(45deg) scale(0.9)";
    };

    const handleMouseUp = () => {
      if (!cursorRef.current) return;

      cursorRef.current.style.backgroundImage = `url(${defaultCursor})`;
      cursorRef.current.style.transform = "translate(-50%, -50%) rotate(45deg)";
    };

    // Reset cursor when the mouse leaves the browser
    const handleMouseLeave = () => {
      if (!cursorRef.current) return;

      cursorRef.current.style.left = "-100px";
      cursorRef.current.style.top = "-100px";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);

      style.remove();
    };
  }, [hasMouse]);

  return (
    <>
      {/* =====================================
          GLOBAL CUSTOM CURSOR
          Desktop only
      ===================================== */}
      {hasMouse && (
        <div
          ref={cursorRef}
          aria-hidden="true"
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
      )}

      {/* =====================================
          LOADING SCREEN & ROUTES
      ===================================== */}
      {showLoading ? (
        <LoadingPage />
      ) : (
        <Routes>
          {/* HOMEPAGE */}
          <Route path="/" element={<App />} />

          {/* Redirect old card selection URL */}
          <Route path="/pick-a-card" element={<Navigate to="/" replace />} />

          {/* UI/UX DESIGN */}
          <Route path="/uiux-design" element={<UiuxPage />} />

          <Route path="/got-it" element={<GotItCaseStudyNew />} />

          <Route path="/project/gotit" element={<GotItCaseStudyNew />} />

          <Route path="/project/descent" element={<TheDescentCaseStudy />} />

          <Route path="/project/daybreak" element={<DaybreakCaseStudy />} />

          {/* GRAPHIC DESIGN */}
          <Route path="/graphic-design" element={<GraphicDesignPage />} />

          <Route path="/underbroth" element={<Underbroth />} />

          <Route path="/ace-of-cups" element={<AceOfCups />} />

          <Route path="/rebel-your-style" element={<RebelYourStyle />} />

          <Route path="/manila-el-nido" element={<ManilaElnido />} />

          <Route path="/swaolamb" element={<Swaolamb />} />

          {/* ODDS & ENDS */}
          <Route path="/odds-and-ends" element={<OddsAndEnds />} />

          {/* Redirect old Illustrations URL */}
          <Route
            path="/illustrations"
            element={<Navigate to="/odds-and-ends" replace />}
          />

          {/* ABOUT ME */}
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      )}
    </>
  );
}

export default AppWrapper;
