import {
  GENERATE_GRID,
  SET_SIZE,
  SET_INPUT,
  TOGGLE_LIFE,
  CLICKABLE_OFF,
  CYCLE_LIFE,
} from "../actions/actionTypes";

export const initialState = {
  grid: [],
  nextGrid: [],
  size: 25,
  input: 25,
  clickable: true,
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
        input: action.payload,
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
    default:
      return state;
  }
};
