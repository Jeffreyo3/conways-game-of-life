import React from "react";
import {
  randomGridArray,
  blankGridArray,
  pulsarGridArray,
  hertzOscillator,
} from "../../actions/gridAction";
import { useSelector, useDispatch } from "react-redux";
import './GridTypes.css'

const GridTypes = () => {
  const dispatch = useDispatch();
  const { size } = useSelector((state) => state);
  const clearGrid = (e) => {
    e.preventDefault();
    dispatch(blankGridArray(size));
  };
  const randomGrid = (e) => {
    e.preventDefault();
    dispatch(randomGridArray(size));
  };
  const pulsarGrid = (e) => {
    e.preventDefault();
    dispatch(pulsarGridArray(size));
  };
  const hertzGrid = (e) => {
    e.preventDefault();
    dispatch(hertzOscillator(size));
  };
  return (
    <form>
      <label>Starting Grid: </label>
      <br />
      <div id="types">
        {/* <input type="button" value="Clear Grid" onClick={clearGrid} />
        <input type="button" value="Random Layout" onClick={randomGrid} />
        <input
          type="button"
          value="Pulsar Oscillator"
          onClick={pulsarGrid}
          disabled={size < 23}
        />
        <input
          type="button"
          value="Hertz Oscillator"
          onClick={hertzGrid}
          disabled={size < 20}
        /> */}
        <button className="grid-type" value="Clear Grid" onClick={clearGrid}>Clear Grid</button>
        <button className="grid-type" value="Random Layout" onClick={randomGrid}>Random Layout</button>
        <button
          className="grid-type"
          value="Pulsar Oscillator"
          onClick={pulsarGrid}
          disabled={size < 23}
        >Pulsar Oscillator</button>
        <button
          className="grid-type"
          value="Hertz Oscillator"
          onClick={hertzGrid}
          disabled={size < 20}
        >Hertz Oscillator</button>
      </div>
    </form>
  );
};

export default GridTypes;
