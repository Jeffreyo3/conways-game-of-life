export const gridDisplay = (gridSize) => {
  //   if (gridSize === 25) {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${gridSize}, 20px)`,
    gridTemplateRows: `repeat(${gridSize}, 20px)`,
  };
  //   }
};

const cellSize = (gridSize) => {
  //   if (gridSize === 25) {
  return "20px";
  //   }
};

export const cellDisplay = (alive, gridSize) => {
  if (alive) {
    const ranColor1 = Math.floor(Math.random() * Math.floor(220)) + 35;
    const ranColor2 = Math.floor(Math.random() * Math.floor(220)) + 35;
    const ranColor3 = Math.floor(Math.random() * Math.floor(220)) + 35;

    return {
      width: `${cellSize(gridSize)}`,
      height: `${cellSize(gridSize)}`,
      background: `rgb(${ranColor1}, ${ranColor2}, ${ranColor3})`,
      border: ".5px solid black",
    };
  } else {
    return {
      width: `${cellSize(gridSize)}`,
      height: `${cellSize(gridSize)}`,
      background: "black",
      border: "1px solid grey",
    };
  }
};
