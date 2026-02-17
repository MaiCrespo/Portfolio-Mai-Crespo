import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Assets
import whiteLogo from "./assets/Head@300x.png";
import gotItThumb from "./assets/UI-UX/GotIt/GotItThumbnail.png";
import daybreakThumb from "./assets/UI-UX/Daybreak/DaybreakThumbnail.png";
import descentThumb from "./assets/UI-UX/TheDescent/TheDescentThumbnail.png";
import face1 from "./assets/faces/Face1.png";
import face2 from "./assets/faces/Face2.png";
import face3 from "./assets/faces/Face3.png";
import face4 from "./assets/faces/Face4.png";
import face5 from "./assets/faces/Face5.png";
import face6 from "./assets/faces/Face6.png";

const INITIAL_FACES = [
  { id: 1, src: face1, x: -50, y: 80, rot: -15, size: 480 }, // 2 inches, tilted left
  { id: 2, src: face2, x: null, y: 20, rot: 12, size: 380, fromRight: 80 }, // 1.5 inches, tilted right
  { id: 3, src: face3, x: -80, y: 550, rot: 8, size: 520 }, // Large, below Face1
  { id: 4, src: face4, x: null, y: 500, rot: -10, size: 600, fromRight: 60 }, // 2.5 inches, below Face2
  { id: 5, src: face5, x: -60, y: 1100, rot: 5, size: 550 }, // Large, bottom left
  { id: 6, src: face6, x: null, y: 80, rot: 15, size: 480, fromRight: 100 }, // Same level as Face1, opposite tilt
];

function DraggableFace({ face, zIndex, onDragStart, containerWidth }) {
  const imgRef = useRef(null);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const initX =
    face.fromRight != null
      ? containerWidth - face.size + face.fromRight
      : face.x;
  const posRef = useRef({ x: initX, y: face.y });

  const applyPos = useCallback((x, y) => {
    posRef.current = { x, y };
    if (imgRef.current) {
      imgRef.current.style.left = `${x}px`;
      imgRef.current.style.top = `${y}px`;
    }
  }, []);

  useEffect(() => {
    if (face.fromRight != null) {
      applyPos(containerWidth - face.size + face.fromRight, posRef.current.y);
    }
  }, [containerWidth, face.fromRight, face.size, applyPos]);

  const onMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      dragging.current = true;
      onDragStart(face.id);
      if (imgRef.current) imgRef.current.style.animationPlayState = "paused";
      offset.current = {
        x: e.clientX - posRef.current.x,
        y: e.clientY - posRef.current.y,
      };

      const onMouseMove = (e) => {
        if (!dragging.current) return;
        applyPos(e.clientX - offset.current.x, e.clientY - offset.current.y);
      };

      const onMouseUp = () => {
        dragging.current = false;
        if (imgRef.current) imgRef.current.style.animationPlayState = "running";
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    },
    [face.id, onDragStart, applyPos]
  );

  return (
    <img
      ref={imgRef}
      src={face.src}
      alt=""
      onMouseDown={onMouseDown}
      draggable={false}
      style={{
        position: "fixed",
        left: `${posRef.current.x}px`,
        top: `${posRef.current.y}px`,
        width: `${face.size}px`,
        height: "auto",
        transform: `rotate(${face.rot}deg)`,
        zIndex: zIndex,
        userSelect: "none",
        WebkitUserDrag: "none",
        cursor: "grab",
        filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))",
        animation: `creepy${face.id} ${7 + face.id * 0.7}s ease-in-out ${
          face.id * 0.6
        }s infinite`,
      }}
    />
  );
}

function App() {
  const navigate = useNavigate();
  const [faceOrder, setFaceOrder] = useState(INITIAL_FACES.map((f) => f.id));
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setContainerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const root = document.documentElement;
      root.style.setProperty("--mouse-x", `${e.clientX}px`);
      root.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const bringToFront = useCallback((id) => {
    setFaceOrder((prev) => [...prev.filter((i) => i !== id), id]);
  }, []);

  const projects = [
    {
      id: "gotit",
      title: "UI Design Lead and Product Designer",
      category: "STUDY GUIDE | WEBSITE",
      image: gotItThumb,
      desc: "Got It is a study guide website designed to support neurodiverse electrical trades students. I led the UI design, shaping the overall look and feel of the product and ensuring the app and marketing materials were cohesive and visually aligned.",
    },
    {
      id: "daybreak",
      title: "Art Director and UI Designer",
      category: "HORROR | GAME",
      image: daybreakThumb,
      desc: "Daybreak is an online multiplayer survival horror game centered on betrayal and sabotage as players compete to reach the finish line. I led the visual direction of the game, designing the world map, villain characters, and promotional materials.",
    },
    {
      id: "descent",
      title: "Creative Director & Prototyper",
      category: "HORROR | INTERACTIVE LEARNING GAME",
      image: descentThumb,
      desc: "The Descent is an interactive learning game inspired by Dante's Inferno, guiding players through the nine circles of Hell while exploring morality, choice, and transformation. This was a solo project in which I handled illustration, prototyping, and asset production from start to finish.",
    },
  ];

  return (
    <>
      <div className="orb-canvas">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      {/* Faces — fixed, above orbs (z-index 1), below page content (z-index 2+) */}
      {INITIAL_FACES.map((face) => (
        <DraggableFace
          key={face.id}
          face={face}
          zIndex={faceOrder.indexOf(face.id) + 1}
          onDragStart={bringToFront}
          containerWidth={containerWidth}
        />
      ))}

      <div className="page-layout">
        <nav className="nav-pill">
          <div className="nav-links">
            <span className="nav-item active">Home</span>
            <span className="nav-sep">|</span>
            <span className="nav-item" onClick={() => navigate("/pick-a-card")}>
              Works
            </span>
            <span className="nav-sep">|</span>
            <span className="nav-item" onClick={() => navigate("/about-me")}>
              About Me
            </span>
          </div>
          <img src={whiteLogo} className="nav-logo" alt="logo" />
        </nav>

        <main className="hero-viewport">
          <div className="brand-title">
            <div className="text-layer blurred">
              <span>MAI</span>
              <span>CRESPO</span>
            </div>
            <div className="text-layer sharp">
              <span>MAI</span>
              <span>CRESPO</span>
            </div>
          </div>
          <p className="bio-text">
            Hello, I'm a <strong>UI/UX Designer</strong> with a strong
            background in <strong>Illustration and Graphic Design</strong>.
            Aside from <strong>problem-solving</strong> through tech, I like to
            draw <strong>crazy weird dark things</strong>.
          </p>
          <button className="pill-btn" onClick={() => navigate("/pick-a-card")}>
            PICK A CARD
          </button>
        </main>

        <section className="featured-projects">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-line"></div>
          <div className="projects-grid">
            {projects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                onClick={() => navigate(`/project/${p.id}`)}
              >
                <div className="img-container">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="project-info">
                  <span className="p-cat">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <button className="pill-btn view-more">VIEW MORE</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer-pill">
          <h3 className="footer-text">Don't be a stranger!</h3>
          <div className="nav-links">
            <a href="mailto:yomaicrespo@gmail.com" className="nav-item">
              Email
            </a>
            <span className="nav-sep">|</span>
            <a
              href="https://linkedin.com/in/mai-crespo/"
              target="_blank"
              rel="noreferrer"
              className="nav-item"
            >
              LinkedIn
            </a>
            <span className="nav-sep">|</span>
            <a
              href="https://instagram.com/heymaicomics/"
              target="_blank"
              rel="noreferrer"
              className="nav-item"
            >
              Instagram
            </a>
          </div>
          <a href="/MaiCrespoResume.pdf" target="_blank" rel="noreferrer">
            <button className="pill-btn">MY RESUME</button>
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
