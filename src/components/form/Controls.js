import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clickableOff,
  cycleLife,
  updateSimulation,
  resetSteps,
  updateTimeOut,
  updateCycles,
} from "../../actions/gridAction";

const Controls = () => {
  const dispatch = useDispatch();
  const { nextGrid, size, simulate, setTimeOut, cycles, steps } = useSelector((state) => state);

  const stepClick = (e) => {
    e.preventDefault();
    if (simulate) {
      dispatch(updateSimulation(false));
    }
    dispatch(clickableOff());
    dispatch(cycleLife(nextGrid, size));
  };

  const simClick = (e) => {
    e.preventDefault();
    dispatch(updateSimulation(true));
    dispatch(resetSteps());
    dispatch(clickableOff());
  };

  const stopClick = (e) => {
    e.preventDefault();
    dispatch(updateSimulation(false));
  };

  const changeTimeOut = e => {
      e.preventDefault()
      dispatch(updateTimeOut(Number(e.target.value)))
  }

  const changeCycles = e => {
      e.preventDefault()
      dispatch(updateCycles(e.target.value))
  }

  return (
    <form>
        <label>
        Speed:
        <input
          type="range"
          name="size"
          min="50"
          max="1500"
          value={setTimeOut}
          onChange={changeTimeOut}
          style={{direction: 'rtl'}}
        />
      </label>
      <label>
        Cycles:
        <input
          type="range"
          name="size"
          min="10"
          max="200"
          value={cycles}
          onChange={changeCycles}
        />
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
  );
};
export default Controls;
