import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GotItCaseStudy.css";

// Assets
import whiteLogo from "./assets/Head@300x.png";
import fullCaseStudyImage from "./assets/GotItContent.png"; // Simple path!

function GotItCaseStudy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-layout">
      {/* Universal Nav */}
      <nav className="nav-pill">
        <div
          className="nav-links"
          style={{ display: "flex", gap: "20px", color: "#fff" }}
        >
          <span
            onClick={() => navigate("/")}
            style={{ cursor: "pointer", opacity: 0.6 }}
          >
            Home
          </span>
          <span style={{ opacity: 0.2 }}>|</span>
          <span style={{ fontWeight: "bold" }}>Works</span>
          <span style={{ opacity: 0.2 }}>|</span>
          <span style={{ opacity: 0.6 }}>About Me</span>
        </div>
        <img
          src={whiteLogo}
          style={{ position: "absolute", right: "40px", width: "35px" }}
          alt="logo"
        />
      </nav>

      {/* The Single Image Content Area */}
      <main className="content-area" style={{ overflowY: "auto" }}>
        <img
          src={fullCaseStudyImage}
          style={{ width: "100%", display: "block" }}
          alt="Case Study Content"
        />
      </main>

      {/* Universal Footer */}
      <footer className="footer-pill">
        <h2 style={{ color: "#fff", fontFamily: "serif", fontSize: "2rem" }}>
          Don't be a stranger!
        </h2>
        <div
          style={{
            display: "flex",
            gap: "15px",
            color: "#fff",
            opacity: 0.7,
            fontSize: "0.9rem",
          }}
        >
          <span>Email</span> <span>|</span> <span>LinkedIn</span> <span>|</span>{" "}
          <span>Instagram</span>
        </div>
        <button
          style={{
            background: "transparent",
            border: "1px solid #fff",
            color: "#fff",
            padding: "10px 25px",
            borderRadius: "50px",
            cursor: "pointer",
          }}
        >
          MY RESUME
        </button>
      </footer>
    </div>
  );
}

export default GotItCaseStudy;
