import React from "react";
import { randomGridArray, blankGridArray } from "../../actions/gridAction";
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
  return (
    <form>
      <label>
        <input type="button" value="Clear Grid" onClick={clearGrid} />
      </label>
      <label>
        <input type="button" value="Random Grid" onClick={randomGrid} />
      </label>
    </form>
  );
};

export default GridTypes;
