:root {
  --maroon: #70060e;
  --cream: #ffe3a4;
  --black: #000000;
}

body {
  margin: 0;
  background-color: var(--cream);
  color: var(--maroon);
  font-family: sans-serif;
  overflow-x: hidden;
}

.top-nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: var(--maroon);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.nav-links {
  display: flex;
  gap: 40px;
  color: white;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.nav-links span { cursor: pointer; }

.nav-mini-logo {
  position: absolute;
  right: 40px;
  width: 30px;
  filter: brightness(0) invert(1);
  cursor: pointer;
}

.landing-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
}

.landing-content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
}

.landing-hero-logo {
  width: 250px;
  margin-bottom: -20px;
}

.landing-name {
  font-size: 8rem;
  line-height: 0.8;
  margin: 0;
  font-weight: 900;
}

.landing-right {
  max-width: 450px;
  text-align: right;
}

.landing-intro {
  font-size: 1.2rem;
  line-height: 1.4;
}

.pill-button {
  background: transparent;
  border: 1px solid var(--maroon);
  color: var(--maroon);
  padding: 10px 30px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  margin: 20px 0;
}

.profile-section {
  position: relative;
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
}

.profile-circle-container {
  position: relative;
  width: 220px;
  height: 220px;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 8px solid var(--maroon);
}

.curved-text-svg {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 260px;
  height: 260px;
  pointer-events: none;
}

.curved-text {
  fill: white;
  font-size: 8px;
  text-transform: uppercase;
  font-weight: bold;
}

.or-not {
  position: absolute;
  bottom: -20px;
  right: 0;
  font-size: 0.8rem;
}

.gallery-screen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cards-container {
  display: flex;
  gap: 30px;
}

.tarot-card {
  width: 200px;
  cursor: pointer;
}

.scroll-gallery { padding-top: 100px; }
.zigzag-grid { display: flex; flex-direction: column; gap: 100px; padding-bottom: 100px;}
.zigzag-item img { width: 40%; }
.zigzag-item.left { padding-left: 10%; }
.zigzag-item.right { display: flex; justify-content: flex-end; padding-right: 10%; }

.horizontal-gallery { height: 100vh; display: flex; align-items: center; }
.horizontal-scroll { display: flex; gap: 50px; padding: 0 100px; overflow-x: auto; }
.horizontal-card img { height: 70vh; cursor: pointer; }