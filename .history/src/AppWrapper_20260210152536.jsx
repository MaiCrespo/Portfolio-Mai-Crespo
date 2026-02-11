import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import LoadingPage from "./LoadingPage";
import CardSelection from "./Cardselection";
import GraphicDesignPage from "./GraphicDesignPage";
import GotItCaseStudy from "./GotItCaseStudy";
import AboutMe from "./AboutMe";

function AppWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pick-a-card" element={<CardSelection />} />
      <Route path="/graphic-design" element={<GraphicDesignPage />} />
      <Route path="/project/gotit" element={<GotItCaseStudy />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  );
}

export default AppWrapper;
