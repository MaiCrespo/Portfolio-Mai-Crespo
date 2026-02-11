import React from "react";
import { useNavigate } from "react-router-dom";
import "./Underbroth.css";
import whiteLogo from "./assets/Head@300x.png";
import CanMockUp from "./assets/GraphicDesign/CanMockUp.png";
import One from "./assets/GraphicDesign/1st.png";
import Two from "./assets/GraphicDesign/2nd.png";
import Three from "./assets/GraphicDesign/3rd.png";

const Underbroth = () => {
  const navigate = useNavigate();

  return (
    <div className="underbroth-page">
      {/* Navigation Header */}
      <nav className="nav-pill">
        <div className="nav-links">
          <span onClick={() => navigate("/")}>Home</span>
          <span className="active">Works</span>
          <span onClick={() => navigate("/about")}>About Me</span>
        </div>
        <img src={whiteLogo} alt="Logo" className="nav-logo" />
      </nav>

      <header className="project-hero">
        <button className="next-project-btn">NEXT PROJECT</button>
        <h1 className="project-main-title">Underbroth</h1>
        <p className="project-subtitle">Infernal Soup from Hell</p>
      </header>

      <section className="project-details">
        <div className="detail-group">
          <h3>About the Project</h3>
          <p>
            Underbroth is a packaging design project for a spicy instant soup
            brand positioned for urbanites on the go. Inspired by nightmares and
            traditional hellish folklore, the packaging features illustrative
            elements that represent the heat levels of each flavor.
          </p>
        </div>

        <div className="detail-group">
          <h3>Tools Used</h3>
          <div className="tool-tags">
            <span>Adobe Illustrator</span>
            <span>Adobe Photoshop</span>
            <span>Procreate</span>
          </div>
        </div>
      </section>

      <section className="main-mockup">
        <img src={CanMockUp} alt="Underbroth Cans" />
      </section>

      <section className="flavor-showcase">
        {/* Flavor 1 */}
        <div className="flavor-row">
          <img src={One} alt="Spicy Beef Malatang" className="label-img" />
          <div className="flavor-info">
            <h4>Spicy Beef Malatang</h4>
            <p>
              The most intense flavor in our line-up. Inspired by Chinese
              Malatang hot pots, this soup delivers a deep beef broth base
              layered with heavy Szechuan peppercorns and burning spice.
            </p>
          </div>
        </div>

        {/* Flavor 2 */}
        <div className="flavor-row">
          <img src={Two} alt="Tom Yum Shrimp" className="label-img" />
          <div className="flavor-info">
            <h4>Tom Yum Shrimp</h4>
            <p>
              A classic, sharp, and aromatic broth inspired by Thai cuisine.
              Bright citrus acidity meets savory shrimp and chili heat, creating
              a sharp, refreshing bite.
            </p>
          </div>
        </div>

        {/* Flavor 3 */}
        <div className="flavor-row">
          <img src={Three} alt="Creamy Pepper Chicken" className="label-img" />
          <div className="flavor-info">
            <h4>Creamy Pepper Chicken</h4>
            <p>
              A milder flavor in the Underbroth line. Inspired by creamy
              peppercorn sauces, featuring a rich, velvety chicken broth with a
              kick of black pepper.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer-pill">
        <h2 className="footer-text">Don't be a stranger!</h2>
        <div className="footer-links">
          <span>Email</span>
          <span>LinkedIn</span>
          <span>Instagram</span>
        </div>
        <button className="resume-btn">MY RESUME</button>
      </footer>
    </div>
  );
};

export default Underbroth;
