import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CardSelection from "./Cardselection";
import GotItCaseStudy from "./GotItCaseStudy";
import GraphicDesignPage from "./GraphicDesignPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pick-a-card" element={<CardSelection />} />
        <Route path="/project/gotit" element={<GotItCaseStudy />} />
        <Route path="/graphic-design" element={<GraphicDesignPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
