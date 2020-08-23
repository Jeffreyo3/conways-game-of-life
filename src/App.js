import React, { useState, useEffect } from "react";
import "./App.css";

import Cell from "./components/Cell";
import { gridDisplay } from "./grid/display";
import { blankGridArray, randomGridArray } from "./grid/createGrid";

function App() {
  const [grid, setGrid] = useState([]);
  const [size, setSize] = useState(25);
  const [input, setInput] = useState(25);
  useEffect(() => {
    // setGrid(blankGridArray(size));
    setGrid(randomGridArray(size));
  }, [size]);

  const changeHandler = (e) => {
    e.preventDefault();
    setInput(Number(e.target.value));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setSize(input);
  };
  const toggleLife = (id) => {
    const copyGrid = [...grid];
    copyGrid[id] = {
      ...copyGrid[id],
      alive: !copyGrid[id].alive,
    };
    setGrid(copyGrid);
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>
          Grid Size:
          <input
            type="number"
            name="size"
            onChange={changeHandler}
            value={input}
          />
        </label>
        <input type="submit" />
      </form>
      <div style={gridDisplay(size)}>
        {grid.map((cell) => {
          return (
            <Cell
              key={cell.id}
              cell={cell}
              gridSize={size}
              toggleLife={toggleLife}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
