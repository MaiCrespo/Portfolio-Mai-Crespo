import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import CardSelection from "./Cardselection";
import GotItCaseStudy from "./GotItCaseStudy";
import GotItCaseStudyNew from "./GotItCaseStudyNew";
import GraphicDesignPage from "./GraphicDesignPage";
import LoadingPage from "./LoadingPage";

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
      <Route path="/project/gotit-new" element={<GotItCaseStudyNew />} />
      <Route path="/project/gotit" element={<GotItCaseStudy />} />
      <Route path="/graphic-design" element={<GraphicDesignPage />} />
    </Routes>
  );
}

export default AppWrapper;
