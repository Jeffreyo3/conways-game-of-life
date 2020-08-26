import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./App.css";

import Display from "./components/gridDisplay/Display";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Conway's Game of Life</h1>
        <AiOutlineInfoCircle />
      </header>
      <Settings />
      <Display />
    </div>
  );
}

export default App;
