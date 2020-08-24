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
  const results = arr.filter((cell) => cell.id === Number(id))[0];
  if (!results) {
    return null;
  } else {
    return results;
  }
};
export const findNeighborsById = (arr, id) => {
  const leftUp = findCellById(arr, `${arr[id].column - 1}${arr[id].row - 1}`);
  const up = findCellById(arr, `${arr[id].column}${arr[id].row - 1}`);
  const rightUp = findCellById(arr, `${arr[id].column + 1}${arr[id].row - 1}`);
  const left = findCellById(arr, `${arr[id].column - 1}${arr[id].row}`);
  const right = findCellById(arr, `${arr[id].column + 1}${arr[id].row}`);
  const leftDown = findCellById(arr, `${arr[id].column - 1}${arr[id].row + 1}`);
  const down = findCellById(arr, `${arr[id].column}${arr[id].row + 1}`);
  const rightDown = findCellById(
    arr,
    `${arr[id].column + 1}${arr[id].row + 1}`
  );
  return {
    leftUp,
    up,
    rightUp,
    left,
    right,
    leftDown,
    down,
    rightDown,
  };
};

export const simulate = (array, cycles = 10) => {
  if (cycles === 0) {
    return array;
  } else if (cycles > 0) {
    const next = array.map((cell) => {});
  }
};
