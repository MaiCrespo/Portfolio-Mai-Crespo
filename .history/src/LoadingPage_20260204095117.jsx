import React from "react";
import whiteLogo from "./assets/Head@300x.png";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div className="loading-container">
      {/* Spinning Orbs Background */}
      <div className="loading-orb-canvas">
        <div className="loading-orb loading-orb-1"></div>
        <div className="loading-orb loading-orb-2"></div>
        <div className="loading-orb loading-orb-3"></div>
      </div>

      {/* Pulsing Logo */}
      <img src={whiteLogo} className="pulsing-logo" alt="Loading Logo" />
    </div>
  );
};

export default LoadingPage;
