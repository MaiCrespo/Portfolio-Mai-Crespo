import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import headerImg from "./assets/UI:UX/Got It/Case study headers_Got It.png";
import homepageImg from "./assets/UI:UX/Got It/Homepage.png";

function GotItCaseStudy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="case-study-container"
      style={{ background: "#0a0a0a", minHeight: "100vh" }}
    >
      <header>
        <img src={headerImg} alt="Header" style={{ width: "100%" }} />
      </header>
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <img
          src={homepageImg}
          alt="Homepage"
          style={{ width: "100%", maxWidth: "1200px" }}
        />
        {/* Add more images from your folder here */}
      </main>
      <footer style={{ padding: "4rem", textAlign: "center" }}>
        <button className="pill-btn" onClick={() => navigate("/")}>
          BACK HOME
        </button>
      </footer>
    </div>
  );
}

export default GotItCaseStudy;
