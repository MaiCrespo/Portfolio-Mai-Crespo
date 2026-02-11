import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import CardSelection from "./Cardselection";
import GotItCaseStudyNew from "./GotItCaseStudyNew";
import GraphicDesignPage from "./GraphicDesignPage";
import Underbroth from "./Underbroth";
import AceOfCups from "./AceOfCups";
import LoadingPage from "./LoadingPage";
import AboutMe from "./AboutMe";

function AppWrapper() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <LoadingPage />;
  }

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pick-a-card" element={<CardSelection />} />
      <Route path="/project/gotit" element={<GotItCaseStudyNew />} />
      <Route path="/graphic-design" element={<GraphicDesignPage />} />
      <Route path="/underbroth" element={<Underbroth />} /> {/* New Route */}
      <Route path="/aceofcups" element={<AceOfCups />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  );
}

export default AppWrapper;
