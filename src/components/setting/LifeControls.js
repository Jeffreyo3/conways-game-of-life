import React from "react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { FiSkipForward } from "react-icons/fi";
import "./LifeControls.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clickableOff,
  cycleLife,
  updateSimulation,
  resetSteps,
} from "../../actions/gridAction";

const LifeControls = () => {
  const dispatch = useDispatch();
  const { nextGrid, size, simulate } = useSelector((state) => state);

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
    dispatch(clickableOff());
  };

  const pauseClick = (e) => {
    e.preventDefault();
    dispatch(updateSimulation(false));
  };

  const stopClick = (e) => {
    e.preventDefault();
    dispatch(updateSimulation(false));
    dispatch(resetSteps());
  };

  return (
    <div className="mobile-controls">
      <ul>
        <li>
          <button onClick={simClick}>
            <div className="icon">
              <FaPlay /> <FaPlay />
            </div>
            <div className="name">
              <p>Play</p>
            </div>
          </button>
        </li>
        <div className="vertical-border" />
        <li>
          <button onClick={pauseClick}>
            <div className="icon">
              <FaPause /> <FaPause />
            </div>
            <div className="name">
              <p>Pause</p>
            </div>
          </button>
        </li>
        <div className="vertical-border" />
        <li>
          <button onClick={stepClick}>
            <div className="icon">
              <FiSkipForward />
              <FiSkipForward />
            </div>
            <div className="name">
              <p>Next Gen</p>
            </div>
          </button>
        </li>
        <div className="vertical-border" />
        <li>
          <button onClick={stopClick}>
            <div className="icon">
              <FaStop />
              <FaStop />
            </div>
            <div className="name">
              <p>Stop</p>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LifeControls;
