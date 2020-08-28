import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput, setSize } from "../../actions/gridAction";

const GridSize = () => {
  const dispatch = useDispatch();
  const { sizeInput, maxSize } = useSelector((state) => state);
  const changeHandler = (e) => {
    e.preventDefault();
    dispatch(setInput(Number(e.target.value)));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setSize(sizeInput));
  };
  return (
    <form onSubmit={submitHandler}>
      <label>
        Grid Size (max {maxSize}x{maxSize}): {sizeInput}x{sizeInput}
        <br />
      </label>
      <input
        type="number"
        name="size"
        min="2"
        max={maxSize}
        onChange={changeHandler}
        value={sizeInput}
      />

      <input type="submit" />
    </form>
  );
};

export default GridSize;
