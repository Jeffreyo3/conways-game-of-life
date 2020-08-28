import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./App.css";

import Display from "./components/gridDisplay/Display";
import Settings from "./components/Settings";
import Rules from "./components/about/Rules";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Conway's
          <span className="header-divider" /> Game of Life
        </h1>
        <nav id="info">
          <a href="#">
            <AiOutlineInfoCircle />
          </a>
        </nav>
      </header>
      <div className="section">
        <Settings />
      </div>
      <div className="section">
        <Display />
      </div>
      <div className="section">
        <Rules />
      </div>
      <div className="section">
        <About />
      </div>
    </div>
  );
}

export default App;
