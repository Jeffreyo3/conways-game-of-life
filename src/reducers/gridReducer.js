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
  UPDATE_MAXSIZE,
  SET_DIMENSIONS
} from "../actions/actionTypes";

export const initialState = {
  grid: [],
  nextGrid: [],
  size: 25,
  maxSize: 50,
  sizeInput: 25,
  clickable: true,
  cycles: 100,
  setTimeOut: 500,
  simulate: false,
  steps: 0,
  generation: 1,
  windowDimensions: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIMENSIONS:
      return {
        ...state,
        windowDimensions: action.payload
      }
    case GENERATE_GRID:
    case TOGGLE_LIFE:
      return {
        ...state,
        ...action.payload,
        clickable: true,
        steps: 0,
        generation: 1,
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
        generation: state.generation + 1,
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
      case UPDATE_MAXSIZE:
        return {
          ...state,
          size: state.size > action.payload ? action.payload : state.size,
          input: state.size > action.payload ? action.payload : state.input,
          maxSize: action.payload
        }
    default:
      return state;
  }
};
