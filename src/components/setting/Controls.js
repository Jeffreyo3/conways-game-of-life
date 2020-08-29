import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTimeOut, updateCycles } from "../../actions/gridAction";
import "./Controls.css";

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
    <form>
      <div className="sliders">
        <label>Speed:</label>
        <p>-</p>
        <input
          type="range"
          name="size"
          min="10"
          max="1500"
          value={setTimeOut}
          onChange={changeTimeOut}
          style={{ direction: "rtl" }}
        />
        <p>+</p>
      </div>
      <div className="sliders">
        <label>Cycles:</label>
        <p>-</p>
        <input
          type="range"
          name="size"
          min="5"
          max="500"
          value={cycles}
          onChange={changeCycles}
        />
        <p>+</p>
      </div>
      <p style={{ marginBlockStart: "0"}}>
        Auto-simulation Steps: {steps}/{cycles}
      </p>
    </form>
  );
};
export default Controls;
