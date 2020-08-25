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
} from "../actions/actionTypes";

export const initialState = {
  grid: [],
  nextGrid: [],
  size: 25,
  sizeInput: 25,
  clickable: true,
  cycles: 100,
  setTimeOut: 500,
  simulate: false,
  steps: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_GRID:
    case TOGGLE_LIFE:
      return {
        ...state,
        ...action.payload,
        clickable: true,
      };
    case SET_INPUT:
      return {
        ...state,
        sizeInput: action.payload,
      };
    case SET_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    case CLICKABLE_OFF:
      return {
        ...state,
        clickable: false,
      };
    case CYCLE_LIFE:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_SIMULATE:
      return {
        ...state,
        simulate: action.payload,
      };
    case COUNT_STEPS:
      return {
        ...state,
        steps: action.payload,
      };
    case UPDATE_TIMEOUT:
      return {
        ...state,
        setTimeOut: action.payload,
      };
    case UPDATE_CYCLES:
      return {
        ...state,
        cycles: action.payload,
      };
    default:
      return state;
  }
};
