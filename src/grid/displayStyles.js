export const gridDisplay = (gridSize, windowWidth) => {
  if (windowWidth >= 1500) {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${gridSize}, 18px)`,
      gridTemplateRows: `repeat(${gridSize}, 18px)`,
    };
  } else if (windowWidth >= 800 && windowWidth < 1500) {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${gridSize}, 15px)`,
      gridTemplateRows: `repeat(${gridSize}, 15px)`,
    };
  } else if (windowWidth >= 500 && windowWidth < 800) {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${gridSize}, 14px)`,
      gridTemplateRows: `repeat(${gridSize}, 14px)`,
    };
  } else {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${gridSize}, 11px)`,
      gridTemplateRows: `repeat(${gridSize}, 11px)`,
    };
  }
};

const cellSize = (windowWidth) => {
  if (windowWidth >= 1500) {
    return "18px";
  } else if (windowWidth >= 800 && windowWidth < 1500) {
    return "15px";
  } else if (windowWidth >= 500 && windowWidth < 800) {
    return "14px";
  } else {
    return "11px";
  }
};

export const cellDisplay = (alive, windowWidth) => {
  if (alive) {
    const ranColor1 = Math.floor(Math.random() * Math.floor(220)) + 35;
    const ranColor2 = Math.floor(Math.random() * Math.floor(220)) + 35;
    const ranColor3 = Math.floor(Math.random() * Math.floor(220)) + 35;

    return {
      width: `${cellSize(windowWidth)}`,
      height: `${cellSize(windowWidth)}`,
      background: `rgb(${ranColor1}, ${ranColor2}, ${ranColor3})`,
      border: ".5px solid #27323a",
    };
  } else {
    return {
      width: `${cellSize(windowWidth)}`,
      height: `${cellSize(windowWidth)}`,
      background: "#27323a",
      border: "1px solid #a3f7bf42",
    };
  }
};
