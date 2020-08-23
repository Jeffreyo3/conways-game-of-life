import React from "react";
import { cellDisplay } from "../grid/display";

export default function Cell({ cell, gridSize }) {
  console.log(cell);
  return (
    <div
      className={cell.alive ? "alive" : "dead"}
      style={cellDisplay(cell.alive, gridSize)}
      onClick={cell.clickable ? cell.toggleLife : null}
    />
  );
}
