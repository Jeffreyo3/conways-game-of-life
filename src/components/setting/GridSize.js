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
        Grid Size (max {maxSize}x{maxSize}):<br/>
        <input
          type="number"
          name="size"
          max={maxSize}
          onChange={changeHandler}
          value={sizeInput}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default GridSize;
