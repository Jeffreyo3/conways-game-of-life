import {
  GENERATE_GRID,
  SET_SIZE,
  SET_INPUT,
  TOGGLE_LIFE,
  CLICKABLE_OFF,
  CLICKABLE_ON,
  CYCLE_LIFE,
  UPDATE_SIMULATE,
  COUNT_STEPS,
  UPDATE_TIMEOUT,
  UPDATE_CYCLES,
  UPDATE_MAXSIZE,
  SET_DIMENSIONS,
} from "./actionTypes";
import { simulate, randomCentralPosition, findIdx } from "../grid/gridHelpers";

export const randomGridArray = (size) => {
  const array = [];
  // loop through grid size for width
  for (let i = 0; i < size; i++) {
    // loop through grid size for height
    for (let j = 0; j < size; j++) {
      array.push({
        column: j + 1,
        row: i + 1,
        alive: Math.floor(Math.random() * 2 - 0.55) === 1 ? true : false,
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

export const pulsarGridArray = (size) => {
  const array = [];
  // loop through grid size for width
  for (let i = 0; i < size; i++) {
    // loop through grid size for height
    for (let j = 0; j < size; j++) {
      array.push({
        column: j + 1,
        row: i + 1,
        alive: false,
      });
    }
  }
  // pick a random centralized index
  const center = randomCentralPosition(size);
  const pattern = [
    // findIdx(1, 1, center, size), // CENTER
    // left-top
    findIdx(4, 8, center, size),
    findIdx(4, 7, center, size),
    findIdx(4, 6, center, size),
    findIdx(3, 6, center, size),
    // up-left-left
    findIdx(3, 2, center, size),
    findIdx(4, 2, center, size),
    findIdx(4, 3, center, size),
    findIdx(2, 3, center, size),
    findIdx(2, 4, center, size),
    findIdx(3, 4, center, size),
    // top-left
    findIdx(8, 4, center, size),
    findIdx(7, 4, center, size),
    findIdx(6, 4, center, size),
    findIdx(6, 3, center, size),
    // top-right
    findIdx(8, -2, center, size),
    findIdx(7, -2, center, size),
    findIdx(6, -2, center, size),
    findIdx(6, -1, center, size),
    // up-right-right
    findIdx(3, 0, center, size),
    findIdx(4, 0, center, size),
    findIdx(4, -1, center, size),
    findIdx(2, -1, center, size),
    findIdx(2, -2, center, size),
    findIdx(3, -2, center, size),
    // right-top
    findIdx(4, -6, center, size),
    findIdx(4, -5, center, size),
    findIdx(4, -4, center, size),
    findIdx(3, -4, center, size),
    // down-right-right
    findIdx(-1, 0, center, size),
    findIdx(-2, 0, center, size),
    findIdx(-2, -1, center, size),
    findIdx(0, -1, center, size),
    findIdx(0, -2, center, size),
    findIdx(-1, -2, center, size),
    // right-bottom
    findIdx(-2, -6, center, size),
    findIdx(-2, -5, center, size),
    findIdx(-2, -4, center, size),
    findIdx(-1, -4, center, size),
    // bottom-right
    findIdx(-6, -2, center, size),
    findIdx(-5, -2, center, size),
    findIdx(-4, -2, center, size),
    findIdx(-4, -1, center, size),
    // down-left-left
    findIdx(-1, 2, center, size),
    findIdx(-2, 2, center, size),
    findIdx(-2, 3, center, size),
    findIdx(0, 3, center, size),
    findIdx(0, 4, center, size),
    findIdx(-1, 4, center, size),
    // bottom-left
    findIdx(-6, 4, center, size),
    findIdx(-5, 4, center, size),
    findIdx(-4, 4, center, size),
    findIdx(-4, 3, center, size),
    // left-bottom
    findIdx(-2, 8, center, size),
    findIdx(-2, 7, center, size),
    findIdx(-2, 6, center, size),
    findIdx(-1, 6, center, size),
  ];
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i]) {
      array[pattern[i]].alive = true;
    }
  }

  const nextArr = simulate(array, size);
  return {
    type: GENERATE_GRID,
    payload: { grid: array, nextGrid: nextArr, simulate: false },
  };
};

export const hertzOscillator = (size) => {
  const array = [];
  // loop through grid size for width
  for (let i = 0; i < size; i++) {
    // loop through grid size for height
    for (let j = 0; j < size; j++) {
      array.push({
        column: j + 1,
        row: i + 1,
        alive: false,
      });
    }
  }
  // pick a random centralized index
  const center = randomCentralPosition(size);
  const pattern = [
    // findIdx(1, 1, center, size), // CENTER
    // top
    findIdx(4, 2, center, size),
    findIdx(5, 2, center, size),
    findIdx(4, 1, center, size),
    findIdx(5, 1, center, size),
    findIdx(4, 0, center, size),
    findIdx(5, 0, center, size),
    findIdx(4, -1, center, size),
    findIdx(5, -1, center, size),
    findIdx(4, -2, center, size),
    findIdx(5, -2, center, size),
    findIdx(4, -3, center, size),
    findIdx(5, -3, center, size),
    // right
    findIdx(2, -2, center, size),
    findIdx(2, -3, center, size),
    findIdx(1, -2, center, size),
    findIdx(1, -3, center, size),
    findIdx(0, -2, center, size),
    findIdx(0, -3, center, size),
    findIdx(-1, -2, center, size),
    findIdx(-1, -3, center, size),
    findIdx(-2, -2, center, size),
    findIdx(-2, -3, center, size),
    findIdx(-3, -2, center, size),
    findIdx(-3, -3, center, size),
    // bottom
    findIdx(-2, 0, center, size),
    findIdx(-3, 0, center, size),
    findIdx(-2, 1, center, size),
    findIdx(-3, 1, center, size),
    findIdx(-2, 2, center, size),
    findIdx(-3, 2, center, size),
    findIdx(-2, 3, center, size),
    findIdx(-3, 3, center, size),
    findIdx(-2, 4, center, size),
    findIdx(-3, 4, center, size),
    findIdx(-2, 5, center, size),
    findIdx(-3, 5, center, size),
    // left
    findIdx(0, 4, center, size),
    findIdx(0, 5, center, size),
    findIdx(1, 4, center, size),
    findIdx(1, 5, center, size),
    findIdx(2, 4, center, size),
    findIdx(2, 5, center, size),
    findIdx(3, 4, center, size),
    findIdx(3, 5, center, size),
    findIdx(4, 4, center, size),
    findIdx(4, 5, center, size),
    findIdx(5, 4, center, size),
    findIdx(5, 5, center, size),
  ];
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i]) {
      array[pattern[i]].alive = true;
    }
  }

  const nextArr = simulate(array, size);
  return {
    type: GENERATE_GRID,
    payload: { grid: array, nextGrid: nextArr, simulate: false },
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

export const clickableOn = () => {
  return { type: CLICKABLE_ON };
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

export const updateMaxSize = (newMax) => {
  return { type: UPDATE_MAXSIZE, payload: newMax };
};

export const setDimensions = (windowObj) => {
  return { type: SET_DIMENSIONS, payload: windowObj };
};
