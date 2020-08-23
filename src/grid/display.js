export const gridDisplay = (gridSize) => {
  //   if (gridSize === 15) {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${gridSize}, 20px)`,
    gridTemplateRows: `repeat(${gridSize}, 20px)`,
  };
  //   }
};

const cellSize = (gridSize) => {
  //   if (gridSize === 15) {
  return "20px";
  //   }
};

export const cellDisplay = (alive, gridSize) => {
  const ranColor1 = Math.floor(Math.random() * Math.floor(230)) + 25;
  const ranColor2 = Math.floor(Math.random() * Math.floor(230)) + 25;
  const ranColor3 = Math.floor(Math.random() * Math.floor(230)) + 25;
  const cell = {
    width: `${cellSize(gridSize)}`,
    height: `${cellSize(gridSize)}`,
    background: `rgb(${ranColor1}, ${ranColor2}, ${ranColor3})`,
  };
  if (alive) {
    return cell;
  } else {
    return {
      ...cell,
      background: "black",
    };
  }
};
