import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput, setSize } from "../../actions/gridAction";
import "./GridSize.css";

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
    <form onSubmit={submitHandler} className="grid-size">
      <label>
        Grid Size: {sizeInput}x{sizeInput}
      </label>
      <p>
        (Screen max {maxSize}x{maxSize})
      </p>
      <div class="size-input">
      <input
        type="number"
        name="size"
        min="2"
        max={maxSize}
        onChange={changeHandler}
        value={sizeInput}
      />

      {/* <input type="submit" value="Change" /> */}
      <button type="submit" className="submit-size" value="Change">Change</button>
      </div>
      <br />
    </form>
  );
};

export default GridSize;
