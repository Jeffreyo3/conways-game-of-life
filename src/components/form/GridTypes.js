import React from "react";
import { randomGridArray, blankGridArray, pulsarGridArray, hertzOscillator } from "../../actions/gridAction";
import { useSelector, useDispatch } from "react-redux";

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
  const pulsarGrid = e => {
      e.preventDefault()
      dispatch(pulsarGridArray(size))
  }
  const hertzGrid = e => {
    e.preventDefault()
    dispatch(hertzOscillator(size))
}
  return (
    <form>
      <label>
        <input type="button" value="Clear Grid" onClick={clearGrid} />
      </label>
      <label>
        <input type="button" value="Random Layout" onClick={randomGrid} />
      </label>
      <label>
        <input type="button" value="Pulsar Oscillator" onClick={pulsarGrid} />
      </label>
      <label>
        <input type="button" value="Hertz Oscillator" onClick={hertzGrid} />
      </label>
    </form>
  );
};

export default GridTypes;
