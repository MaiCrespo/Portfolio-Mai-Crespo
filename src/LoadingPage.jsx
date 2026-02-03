import React from "react";
import whiteLogo from "./assets/Head@300x.png";

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <img src={whiteLogo} className="spinning-logo" alt="Loading Logo" />
    </div>
  );
};

export default LoadingPage;
