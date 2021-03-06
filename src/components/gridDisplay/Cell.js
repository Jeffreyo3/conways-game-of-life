import React from "react";
import { cellDisplay } from "../../grid/displayStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleLife } from "../../actions/gridAction";

export default function Cell({ cell, idx }) {
  const dispatch = useDispatch();
  const { grid, clickable, size, windowDimensions } = useSelector((state) => state);

  const [color, setColor] = React.useState(cellDisplay(cell.alive, windowDimensions.width));
  React.useEffect(() => {
    setColor(cellDisplay(cell.alive, windowDimensions.width));
  }, [cell.alive, windowDimensions]);

  const onClick = (e) => {
    e.preventDefault();
    dispatch(toggleLife(idx, grid, size));
  };
  
  return (
    <div
      className={cell.alive ? "alive" : "dead"}
      style={color}
      onClick={clickable ? onClick : null}
    />
  );
}
