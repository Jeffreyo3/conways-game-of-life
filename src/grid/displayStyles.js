export const gridDisplay = (gridSize) => {
  //   if (gridSize === 25) {
    // console.log(100/gridSize)
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${gridSize}, 15px)`,
    gridTemplateRows: `repeat(${gridSize}, 15px)`,
  };
  //   }
};

const cellSize = (gridSize) => {
  //   if (gridSize === 25) {
  return "15px";
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
      border: ".5px solid #27323a",
    };
  } else {
    return {
      width: `${cellSize(gridSize)}`,
      height: `${cellSize(gridSize)}`,
      background: "#27323a",
      border: "1px solid grey",
    };
  }
};
