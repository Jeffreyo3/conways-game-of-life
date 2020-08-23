import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import { gridDisplay } from "../../grid/displayStyles";
import { randomGridArray, blankGridArray } from "../../grid/gridHelpers";

const Display = () => {
  const [grid, setGrid] = useState([]);
  const [size, setSize] = useState(25);
  const [input, setInput] = useState(25);

  useEffect(() => {
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
  const clearGrid = (e) => {
    e.preventDefault();
    setGrid(blankGridArray(size));
  };
  const randomGrid = e => {
      e.preventDefault()
      setGrid(randomGridArray(size));
  }
  const toggleLife = (id) => {
    const copyGrid = [...grid];
    copyGrid[id] = {
      ...copyGrid[id],
      alive: !copyGrid[id].alive,
    };
    setGrid(copyGrid);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          Grid Size:
          <input
            type="number"
            name="size"
            max="40"
            onChange={changeHandler}
            value={input}
          />
        </label>
        {/* <input type="submit" /> */}
        <label>
          <input type="button" value="Clear Grid" onClick={clearGrid}/>
        </label>
        <label>
          <input type="button" value="Random Grid" onClick={randomGrid}/>
        </label>
      </form>
      <div style={gridDisplay(size)}>
        {grid.map((cell, idx) => {
          return (
            <Cell
              key={idx}
              idx={idx}
              cell={cell}
              gridSize={size}
              toggleLife={toggleLife}
            />
          );
        })}
      </div>
    </>
  );
};

export default Display;
