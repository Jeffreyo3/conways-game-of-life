import React from "react";
import { cellDisplay } from "../grid/display";

export default function Cell({ cell, gridSize, toggleLife }) {
  //   console.log(cell);
  const [color, setColor] = React.useState(cellDisplay(cell.alive, gridSize));
  React.useEffect(() => {
    setColor(cellDisplay(cell.alive, gridSize));
  }, [cell.alive, gridSize]);

  return (
    <div
      className={cell.alive ? "alive" : "dead"}
      style={color}
      onClick={cell.clickable ? (e) => toggleLife(cell.id) : null}
    />
  );
}
