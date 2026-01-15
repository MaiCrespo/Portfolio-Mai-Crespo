import React from "react";
import logo from "./assets/Head@300x.png";

function App() {
  return (
    <main className="container">
      <img src={logo} alt="Logo" className="logo" />

      <h1 className="title">MAI CRESPO</h1>

      <p className="description">
        Hello, I'm a UI/UX Designer with a strong background in <br />
        Illustration and Graphic Design. Aside from problem-solving <br />
        through tech, I like to draw crazy weird dark things.
      </p>

      <button className="cta-button">PICK A CARD</button>
    </main>
  );
}

export default App;
