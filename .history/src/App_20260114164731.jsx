import logo from "./assets/Head@300x.png";

function App() {
  return (
    <main className="container">
      {/* Logo Asset */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Main Header */}
      <h1 className="title">MAI CRESPO</h1>

      {/* Subtext */}
      <p className="description">
        Hello, I'm a UI/UX Designer with a strong background in <br />
        Illustration and Graphic Design. Aside from problem-solving <br />
        through tech, I like to draw crazy weird dark things.
      </p>

      {/* CTA Button */}
      <button className="cta-button">PICK A CARD</button>

      <style jsx>{`
        .container {
          text-align: center;
          max-width: 800px;
          padding: 20px;
        }
        .logo {
          width: 80px;
          margin-bottom: 20px;
        }
        .title {
          font-family: "Hellishy", serif;
          /* Use a slightly smaller max-width (e.g., 12vw) to ensure it fits the width of the screen on one line */
          font-size: clamp(3rem, 12vw, 12rem);

          /* This prevents the text from ever wrapping to a second line */
          white-space: nowrap;

          /* Ensures that if the screen is EXTREMELY narrow, the text stays centered and doesn't clip weirdly */
          display: inline-block;
          width: 100%;

          letter-spacing: 0.02em;
          margin: 10px 0;
          text-transform: uppercase;
          line-height: 1;
        }
        .description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #e0e0e0;
          margin-bottom: 40px;
          font-weight: 300;
        }
        .cta-button {
          background: transparent;
          color: white;
          border: 1px solid white;
          padding: 12px 30px;
          border-radius: 50px;
          font-family: "NeuePlak", sans-serif;
          font-weight: bold;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          background: white;
          color: #4a0404;
        }
      `}</style>
    </main>
  );
}

export default App;
