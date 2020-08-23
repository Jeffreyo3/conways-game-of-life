import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Cell from "./components/Cell";
import { gridDisplay } from "./grid/display";

function App() {
  const [grid, setGrid] = useState([]);
  const [size, setSize] = useState(15);
  useEffect(() => {
    const array = [];
    // loop through grid size for width
    for (let i = 0; i < size; i++) {
      // loop through grid size for height
      for (let j = 0; j < size; j++) {
        array.push({
          column: i + 1,
          row: j + 1,
          alive: false,
          clickable: true,
        });
      }
    }
    setGrid(array);
  }, [size]);
  console.log(grid);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Conway's Game of Life</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div style={gridDisplay(size)}>
        {grid.map((cell) => {
          return <Cell cell={cell} gridSize={size} />;
        })}
      </div>
    </div>
  );
}

export default App;
