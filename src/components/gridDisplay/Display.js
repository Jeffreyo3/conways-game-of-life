import React, { useEffect } from "react";
import Cell from "./Cell";
import { gridDisplay } from "../../grid/displayStyles";
import {
  randomGridArray,
  blankGridArray,
  setSize,
  setInput,
  clickableOff,
  cycleLife,
} from "../../actions/gridAction";

import { useSelector, useDispatch } from "react-redux";

const Display = () => {
  const dispatch = useDispatch();
  const { grid, nextGrid, size, input } = useSelector((state) => state);

  useEffect(() => {
    dispatch(randomGridArray(size));
  }, [size]);

  const changeHandler = (e) => {
    e.preventDefault();
    dispatch(setInput(Number(e.target.value)));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setSize(input));
  };
  const clearGrid = (e) => {
    e.preventDefault();
    dispatch(blankGridArray(size));
  };
  const randomGrid = (e) => {
    e.preventDefault();
    dispatch(randomGridArray(size));
  };

  const stepClick = async (e) => {
    e.preventDefault();
    dispatch(clickableOff());
    dispatch(cycleLife(nextGrid, size));
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
        <input type="submit" />
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div style={gridDisplay(size)}>
          {grid.map((cell, idx) => {
            return <Cell key={idx} idx={idx} cell={cell} />;
          })}
        </div>
        <div style={gridDisplay(size)}>
          {nextGrid.map((cell, idx) => {
            return <Cell key={idx} idx={idx} cell={cell} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Display;
