import React, { useEffect } from "react";
import Cell from "./Cell";
import { gridDisplay } from "../../grid/displayStyles";
import {
  pulsarGridArray,
  cycleLife,
  countSteps,
  updateMaxSize,
  randomGridArray,
} from "../../actions/gridAction";

import { useSelector, useDispatch } from "react-redux";

const Display = () => {
  const dispatch = useDispatch();
  const {
    grid,
    nextGrid,
    size,
    cycles,
    simulate,
    setTimeOut,
    steps,
    generation,
  } = useSelector((state) => state);
  useEffect(() => {
    if (window.innerWidth <= 500) {
      dispatch(updateMaxSize(25));
    }
  }, []);
  useEffect(() => {
    if (size >= 25) {
      dispatch(pulsarGridArray(size));
    } else {
      dispatch(randomGridArray(size));
    }
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

  return (
    <>
      <h2>Generation: {generation}</h2>
      <div
        style={
          {
            // display: "flex",
            // flexDirection: "row",
            // justifyContent: "space-evenly",
          }
        }
      >
        <div style={gridDisplay(size)}>
          {grid.map((cell, idx) => {
            return <Cell key={idx} idx={idx} cell={cell} />;
          })}
        </div>
        {/* <div style={gridDisplay(size)}>
          {nextGrid.map((cell, idx) => {
            return <Cell key={idx} idx={idx} cell={cell} />;
          })}
        </div> */}
      </div>
    </>
  );
};

export default Display;
