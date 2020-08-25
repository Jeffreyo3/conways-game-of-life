import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import { gridDisplay } from "../../grid/displayStyles";
import {
  randomGridArray,
  blankGridArray,
  setSize,
  setInput,
  clickableOff,
  cycleLife,
  countSteps,
  updateSimulation,
} from "../../actions/gridAction";

import { useSelector, useDispatch } from "react-redux";

const Display = () => {
  const dispatch = useDispatch();
  const {
    grid,
    nextGrid,
    size,
    sizeInput,
    cycles,
    simulate,
    setTimeOut,
    steps,
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(randomGridArray(size));
  }, [size]);

  useEffect(() => {
    let interval = null;
    if (simulate && steps < cycles) {
      dispatch(cycleLife(nextGrid, size));
      interval = setInterval(() => {
        dispatch(countSteps(steps));
      }, setTimeOut);
    } else if (!simulate && steps !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [simulate, steps]);

  const changeHandler = (e) => {
    e.preventDefault();
    dispatch(setInput(Number(e.target.value)));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setSize(sizeInput));
  };
  const clearGrid = (e) => {
    e.preventDefault();
    dispatch(blankGridArray(size));
  };
  const randomGrid = (e) => {
    e.preventDefault();
    dispatch(randomGridArray(size));
  };

  const stepClick = (e) => {
    e.preventDefault();
    dispatch(clickableOff());
    dispatch(cycleLife(nextGrid, size));
  };

  const simClick = (e) => {
    e.preventDefault();
    dispatch(updateSimulation(true));
    dispatch(clickableOff());
  };

  const stopClick = (e) => {
    e.preventDefault();
    dispatch(updateSimulation(false));
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
            value={sizeInput}
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
        <label>
          <input type="button" value="Run Simulation" onClick={simClick} />
        </label>
        <label>
          <input type="button" value="Stop Simulation" onClick={stopClick} />
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
