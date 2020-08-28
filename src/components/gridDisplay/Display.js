import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cell from "./Cell";
import { gridDisplay } from "../../grid/displayStyles";
import {
  pulsarGridArray,
  cycleLife,
  countSteps,
  updateMaxSize,
  randomGridArray,
} from "../../actions/gridAction";
import "./Display.css";

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
    windowDimensions,
  } = useSelector((state) => state);
  useEffect(() => {
    if (window.innerWidth <= 500) {
      dispatch(updateMaxSize(25));
    } else if (window.innerWidth > 500 && window.innerWidth <= 1300) {
      dispatch(updateMaxSize(30));
    } else if (
      window.innerWidth > 1300 &&
      window.innerWidth <= 1600
    ) {
      dispatch(updateMaxSize(35));
    } else {
      dispatch(updateMaxSize(50));
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
      <h3>Generation: {generation}</h3>
      <div>
        <div style={gridDisplay(size, windowDimensions.width)}>
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
