import {
  GENERATE_GRID,
  SET_SIZE,
  SET_INPUT,
  TOGGLE_LIFE,
  CLICKABLE_OFF,
  CYCLE_LIFE,
  UPDATE_SIMULATE,
  COUNT_STEPS,
  UPDATE_TIMEOUT,
  UPDATE_CYCLES,
} from "./actionTypes";
import { simulate } from "../grid/gridHelpers";

export const randomGridArray = (size) => {
  const array = [];
  // loop through grid size for width
  for (let i = 0; i < size; i++) {
    // loop through grid size for height
    for (let j = 0; j < size; j++) {
      array.push({
        id: Number(`${j + 1}${i + 1}`),
        column: j + 1,
        row: i + 1,
        alive: Math.floor(Math.random() * 2 - 0.75) === 1 ? true : false,
      });
    }
  }
  const nextArr = simulate(array, size);
  return {
    type: GENERATE_GRID,
    payload: { grid: array, nextGrid: nextArr, simulate: false },
  };
};

export const blankGridArray = (size) => {
  const array = [];
  // loop through grid size for width
  for (let i = 0; i < size; i++) {
    // loop through grid size for height
    for (let j = 0; j < size; j++) {
      array.push({
        id: Number(`${j + 1}${i + 1}`),
        column: j + 1,
        row: i + 1,
        alive: false,
      });
    }
  }
  return {
    type: GENERATE_GRID,
    payload: { grid: array, nextGrid: array, simulate: false },
  };
};

export const setInput = (num) => {
  return { type: SET_INPUT, payload: num };
};

export const setSize = (input) => {
  return { type: SET_SIZE, payload: input };
};

export const toggleLife = (id, grid, size) => {
  const array = [...grid];
  array[id] = {
    ...array[id],
    alive: !array[id].alive,
  };
  const nextArr = simulate(array, size);
  return { type: TOGGLE_LIFE, payload: { grid: array, nextGrid: nextArr } };
};

export const clickableOff = () => {
  return { type: CLICKABLE_OFF };
};

export const cycleLife = (nextGrid, size) => {
  const nextNextGrid = simulate(nextGrid, size);
  return {
    type: CYCLE_LIFE,
    payload: { grid: nextGrid, nextGrid: nextNextGrid },
  };
};

export const updateSimulation = (boolean) => {
  return { type: UPDATE_SIMULATE, payload: boolean };
};

export const countSteps = (steps) => {
  return { type: COUNT_STEPS, payload: steps + 1 };
};

export const resetSteps = () => {
  return { type: COUNT_STEPS, payload: 0 };
};

export const updateTimeOut = (time) => {
  return { type: UPDATE_TIMEOUT, payload: time };
};

export const updateCycles = (cycles) => {
  return { type: UPDATE_CYCLES, payload: cycles };
};
