import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import { gridDisplay } from "../../grid/displayStyles";
import {
  simulate,
  randomGridArray,
  blankGridArray,
  findNeighborIdx,
} from "../../grid/gridHelpers";

const Display = () => {
  const [grid, setGrid] = useState([]);
  const [next, setNext] = useState([]);
  const [size, setSize] = useState(25);
  const [input, setInput] = useState(25);

  useEffect(() => {
    const startGrid = randomGridArray(size);
    setGrid(startGrid);
    setNext(startGrid);
  }, [size]);

  useEffect(() => {
    async function step() {
      return await simulate([...grid], size);
    }

    const nextStep = step();
    console.log(nextStep);
    setNext(nextStep);
  }, [grid, size]);

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
  const randomGrid = (e) => {
    e.preventDefault();
    setGrid(randomGridArray(size));
  };
  const toggleLife = (id) => {
    const copyGrid = [...grid];
    copyGrid[id] = {
      ...copyGrid[id],
      alive: !copyGrid[id].alive,
    };
    console.log(copyGrid[id]);
    console.log(findNeighborIdx(size, id, copyGrid));
    setGrid(copyGrid);
  };

  const stepClick = async (e) => {
    e.preventDefault();
    const click = await next;
    const clickoff = click.map((obj) => {
      return { ...obj, clickable: false };
    });
    console.log(clickoff);
    setNext(clickoff);
    setGrid(click);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          Grid Size (max 50):
          <input
            type="number"
            name="size"
            max="50"
            onChange={changeHandler}
            value={input}
          />
        </label>
        {/* <input type="submit" /> */}
        <label>
          <input type="button" value="Clear Grid" onClick={clearGrid} />
        </label>
        <label>
          <input type="button" value="Random Grid" onClick={randomGrid} />
        </label>
        <label>
          <input type="button" value="Step forward" onClick={stepClick} />
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
