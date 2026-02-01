import React from "react";
import { useNavigate } from "react-router-dom";
import whiteLogo from "./assets/Head@300x.png";
import tarotMat from "./assets/misc/tarot-mat.avif";
import card1 from "./assets/Card - UI-UX.png";
import card2 from "./assets/Card - Graphic Design.png";
import card3 from "./assets/Card - Illustrations.png";

function Cardselection() {
  const navigate = useNavigate();

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

      <main
        className="content-area"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "radial-gradient(circle, #2e1208 0%, #000 80%)",
        }}
      >
        <img
          src={tarotMat}
          style={{ position: "absolute", width: "1000px", opacity: "0.2" }}
          alt=""
        />
        <div style={{ display: "flex", gap: "20px", zIndex: 10 }}>
          <div
            style={{
              transform: "rotate(-8deg) translateY(20px)",
              width: "280px",
            }}
            onClick={() => navigate("/got-it")}
          >
            <img src={card1} style={{ width: "100%" }} />
          </div>
          <div style={{ transform: "translateY(-10px)", width: "280px" }}>
            <img src={card2} style={{ width: "100%" }} />
          </div>
          <div
            style={{
              transform: "rotate(8deg) translateY(20px)",
              width: "280px",
            }}
          >
            <img src={card3} style={{ width: "100%" }} />
          </div>
        </div>
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
export default Cardselection;
