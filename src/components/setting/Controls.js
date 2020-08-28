import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTimeOut, updateCycles } from "../../actions/gridAction";

const Controls = () => {
  const dispatch = useDispatch();
  const { setTimeOut, cycles, steps } = useSelector((state) => state);

  const changeTimeOut = (e) => {
    e.preventDefault();
    dispatch(updateTimeOut(Number(e.target.value)));
  };

  const changeCycles = (e) => {
    e.preventDefault();
    dispatch(updateCycles(e.target.value));
  };

  return (
    <>
      <form>
        <label>Speed:</label>
        <input
          type="range"
          name="size"
          min="50"
          max="1500"
          value={setTimeOut}
          onChange={changeTimeOut}
          style={{ direction: "rtl" }}
        />
        <label>Cycles:</label>
        <input
          type="range"
          name="size"
          min="5"
          max="500"
          value={cycles}
          onChange={changeCycles}
        />
      </form>
      <p>
        Auto-simulation Steps: {steps}/{cycles}
      </p>
    </>
  );
};
export default Controls;
