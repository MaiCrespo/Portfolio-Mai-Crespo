import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OddsAndEnds.css";
import logo from "./assets/Head@300x.png";

// Put your artwork inside src/assets/OddsAndEnds/.
// Images in that folder will appear automatically in this gallery.
const imageModules = import.meta.glob(
  "./assets/OddsAndEnds/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP}",
  { eager: true, query: "?url", import: "default" },
);

const categories = [
  { id: "all", label: "ALL WORK" },
  { id: "experiments", label: "DESIGN & EXPERIMENTS" },
  { id: "characters", label: "CHARACTERS & FAN ART" },
  { id: "stickers", label: "STICKERS & ILLUSTRATIONS" },
];

// Curated project descriptions: change or expand these as you add work.
const details = [
  {
    test: /3d slice|cwh 3d|montane 3d|mountain hemlock 3d/i,
    category: "experiments",
    collection: "Environmental studies",
    description:
      "Miniature environments exploring scale, form, and layered landscapes.",
  },
  {
    test: /bulk|milk|gadget|mural|section03/i,
    category: "experiments",
    collection: "Visual explorations",
    description:
      "Experiments in product imagery, layout, branding, and visual storytelling.",
  },
  {
    test: /gerard|corinthian|death|desire|dream|delirium|ghost|aziraphale|patrick stump/i,
    category: "characters",
    collection: "Fan art",
    description:
      "A personal interpretation of a familiar character, drawn in my own visual language.",
  },
  {
    test: /flaming sword|catholicore|pearl-of-the-orient|abomination|monster_head|monster head|scary_ladies/i,
    category: "characters",
    collection: "Character explorations",
    description:
      "A character study built around expression, color, and unusual personalities.",
  },
  {
    test: /die.cut|stickers?|moths|zombie.food|pinot|food_die|jujumagic|heart_eyes|frog_tarot/i,
    category: "stickers",
    collection: "Stickers & die-cuts",
    description:
      "A playful, illustrated design created with a sticker or die-cut format in mind.",
  },
  {
    test: /bento|mul_naengmyun|mushroom_friends|satanic_panic/i,
    category: "stickers",
    collection: "Illustration studies",
    description:
      "An expressive illustration inspired by food, creatures, and everyday curiosities.",
  },
];

const titleOverrides = {
  "3D slice (SWB)": "3D Slice — SWB",
  "CWH 3D": "CWH — 3D Study",
  "Montane 3D": "Montane — 3D Study",
  "Mountain Hemlock 3D": "Mountain Hemlock — 3D Study",
  "Mai_Crespo - Milk": "Milk — Packaging Exploration",
  "BULK MOCK UP": "BULK — Mockup",
  "BULK UI": "BULK — UI Design",
  Mai_Crespo_Mural: "Mural Illustration",
  Mai_Crespo_Section03PNG: "Illustrated Landscape",
  "Pearl-Of-The-Orient": "Pearl of the Orient",
};

function artworkFromFile(path, src) {
  const filename = decodeURIComponent(path.split("/").pop() || "");
  const base = filename.replace(/\.[^.]+$/, "");
  const matched = details.find(({ test }) => test.test(base));
  const readable = base
    .replace(/_Die_Cut/gi, " — Die Cut")
    .replace(/_Chibi/gi, " — Chibi")
    .replace(/_Dan(g)?er_Things/gi, " — Danger Things")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return {
    id: path,
    src,
    title: titleOverrides[base] || readable,
    category: matched?.category || "characters",
    collection: matched?.collection || "Original illustrations",
    description:
      matched?.description ||
      "A personal illustration exploring character, mood, and visual storytelling.",
  };
}

const artwork = Object.entries(imageModules)
  .map(([path, src]) => artworkFromFile(path, src))
  .sort((a, b) => a.title.localeCompare(b.title));
function OddsAndEnds() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedArt, setSelectedArt] = useState(null);
  const visibleArtwork = useMemo(
    () =>
      artwork.filter(
        (item) => activeCategory === "all" || item.category === activeCategory,
      ),
    [activeCategory],
  );

  return (
    <div className="odds-page">
      <header className="odds-header">
        <button
          type="button"
          className="odds-brand"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <img src={logo} alt="" className="odds-logo" />
          <span>MAI CRESPO</span>
        </button>
        <button
          type="button"
          className="odds-nav-category"
          onClick={() => navigate("/")}
        >
          PORTFOLIO
        </button>
        <span className="odds-nav-project">ODDS & ENDS</span>
      </header>

      <main className="odds-main">
        <div className="odds-topline">
          <span>SELECTED WORK / THE ART ARCHIVE</span>
          <span>ILLUSTRATION • FAN ART • EXPERIMENTS</span>
        </div>

        <section className="odds-intro" aria-labelledby="odds-title">
          <p className="odds-eyebrow">
            THE PERSONAL STUFF / AN EVER-GROWING COLLECTION
          </p>
          <h1 id="odds-title">
            ODDS <span>&</span> ENDS
          </h1>
          <div className="odds-intro-bottom">
            <p className="odds-tagline">
              A little strange. A little chaotic. Entirely mine.
            </p>
            <p className="odds-intro-copy">
              A home for the things I draw just because I want to — fan art,
              character experiments, 3D studies, stickers, and the occasional
              wonderfully weird idea. Not everything needs a brief. Sometimes,
              curiosity is enough.
            </p>
          </div>
        </section>

        <section className="odds-gallery" aria-labelledby="odds-gallery-title">
          <div className="odds-gallery-heading">
            <div>
              <p className="odds-eyebrow">01 / THE COLLECTION</p>
              <h2 id="odds-gallery-title">THE ARTWORK</h2>
            </div>
            <span className="odds-count">
              {String(visibleArtwork.length).padStart(2, "0")} PIECES
            </span>
          </div>

          <div
            className="odds-filters"
            role="group"
            aria-label="Filter artwork"
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={
                  activeCategory === category.id
                    ? "odds-filter is-active"
                    : "odds-filter"
                }
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>

          {visibleArtwork.length ? (
            <div className="odds-art-grid">
              {visibleArtwork.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  className="odds-art-card"
                  onClick={() => setSelectedArt(item)}
                  aria-label={`View ${item.title}`}
                >
                  <span className="odds-image-wrap">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                    <span className="odds-view-hint">VIEW ARTWORK ↗</span>
                  </span>
                  <span className="odds-art-info">
                    <span className="odds-art-title">{item.title}</span>
                    <span className="odds-art-type">{item.collection}</span>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="odds-empty">
              <strong>
                {artwork.length
                  ? "NO ARTWORK IN THIS CATEGORY YET"
                  : "YOUR GALLERY IS READY"}
              </strong>
              <p>
                {artwork.length
                  ? "Try another filter."
                  : "Place your images in src/assets/OddsAndEnds/ and they'll appear here automatically."}
              </p>
            </div>
          )}
        </section>

        <section className="odds-outro">
          <span>KEEP EXPLORING</span>
          <button type="button" onClick={() => navigate("/")}>
            BACK TO THE CARDS <span aria-hidden="true">↗</span>
          </button>
        </section>
      </main>

      <footer className="odds-footer">
        <div className="odds-footer-links">
          <a href="mailto:yomaicrespo@gmail.com">Email</a>
          <span aria-hidden="true">|</span>
          <a
            href="https://linkedin.com/in/mai-crespo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span aria-hidden="true">|</span>
          <a
            href="https://instagram.com/heymaicomics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <button
          type="button"
          className="odds-footer-about"
          onClick={() => navigate("/about-me")}
        >
          ABOUT ME
        </button>
        <a
          className="odds-resume"
          href="/Mai_Crespo_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          MY RESUME
        </a>
      </footer>

      {selectedArt && (
        <div
          className="odds-lightbox"
          role="presentation"
          onClick={() => setSelectedArt(null)}
        >
          <div
            className="odds-lightbox-panel"
            role="dialog"
            aria-modal="true"
            aria-label={selectedArt.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="odds-lightbox-close"
              onClick={() => setSelectedArt(null)}
              aria-label="Close artwork"
            >
              ✕
            </button>
            <img src={selectedArt.src} alt={selectedArt.title} />
            <div className="odds-lightbox-caption">
              <div>
                <strong>{selectedArt.title}</strong>
                <span>{selectedArt.collection}</span>
              </div>
              <p>{selectedArt.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OddsAndEnds;
