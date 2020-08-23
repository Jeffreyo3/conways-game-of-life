export const blankGridArray = (size) => {
  const array = [];
  // loop through grid size for width
  for (let i = 0; i < size; i++) {
    // loop through grid size for height
    for (let j = 0; j < size; j++) {
      array.push({
        id: Number(`${j + 1}${i + 1}`),
        column: j + 1,
        row: i + 1,
        alive: false,
        clickable: true,
      });
    }
  }
  return array;
};

export const randomGridArray = (size) => {
  const array = [];
  // loop through grid size for width
  for (let i = 0; i < size; i++) {
    // loop through grid size for height
    for (let j = 0; j < size; j++) {
      array.push({
        id: Number(`${j + 1}${i + 1}`),
        column: j + 1,
        row: i + 1,
        alive: Math.floor(Math.random() * 2 - 0.75) === 1 ? true : false,
        clickable: true,
      });
    }
  }
  return array;
};

export const findCellById = (arr, id) => {
  return arr.filter((cell) => cell.id === Number(id))[0];
};
export const findNeighborsById = (arr, id) => {
  return {
    leftUp: findCellById(arr, `${arr[id].column - 1}${arr[id].row - 1}`),
    up: findCellById(arr, `${arr[id].column}${arr[id].row - 1}`),
    rightUp: findCellById(arr, `${arr[id].column + 1}${arr[id].row - 1}`),
    left: findCellById(arr, `${arr[id].column - 1}${arr[id].row}`),
    right: findCellById(arr, `${arr[id].column + 1}${arr[id].row}`),
    leftDown: findCellById(arr, `${arr[id].column - 1}${arr[id].row + 1}`),
    down: findCellById(arr, `${arr[id].column}${arr[id].row + 1}`),
    rightDown: findCellById(arr, `${arr[id].column + 1}${arr[id].row + 1}`),
  };
};