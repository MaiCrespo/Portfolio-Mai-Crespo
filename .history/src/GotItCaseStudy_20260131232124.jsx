import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import whiteLogo from "./assets/Head@300x.png";
import fullImage from "./assets/GotItContent.png"; // Fixed path

function GotItCaseStudy() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-layout">
      <nav className="nav-pill">
        <div
          className="nav-links"
          style={{ display: "flex", gap: "20px", color: "#fff" }}
        >
          <span onClick={() => navigate("/")}>Home</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span style={{ fontWeight: "bold" }}>Works</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span>About Me</span>
        </div>
        <img
          src={whiteLogo}
          style={{ position: "absolute", right: "40px", width: "35px" }}
          alt="logo"
        />
      </nav>

      <main className="content-area" style={{ overflowY: "auto" }}>
        <img
          src={fullImage}
          style={{ width: "100%", display: "block" }}
          alt="Case Study"
        />
      </main>

      <footer className="footer-pill">
        <h2 style={{ color: "#fff", fontFamily: "serif", fontSize: "2rem" }}>
          Don't be a stranger!
        </h2>
        <button className="resume-btn">MY RESUME</button>
      </footer>
    </div>
  );
}
export default GotItCaseStudy;
