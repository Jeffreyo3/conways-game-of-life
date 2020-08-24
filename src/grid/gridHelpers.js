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
  const results = arr[id];
  // arr.forEach((cell, idx) => {
  //   if (cell.id === Number(id)){
  //     results.push({...cell, idx})
  //   }});
  if (!results) {
    return null;
  } else {
    return results;
  }
};
export const findNeighborIdx = (size, idx, array) => {
  const currRow = Math.floor(idx / size) + 1;
  const currColumn = (idx % size) + 1;

  const findIdx = (modRow, modColumn) => {
    let row = currRow - modRow;
    let col = currColumn - modColumn;
    if (row < 0 || row > size - 1) {
      return null;
    }
    if (col < 0 || col > size - 1) {
      return null;
    }
    return row * size + col;
  };

  const leftUp = findIdx(2, 2);
  const up = findIdx(2, 1);
  const rightUp = findIdx(2, 0);
  const left = findIdx(1, 2);
  const right = findIdx(1, 0);
  const leftDown = findIdx(0, 2);
  const down = findIdx(0, 1);
  const rightDown = findIdx(0, 0);
  return {
    leftUp: { ...array[leftUp], idx: leftUp },
    up: { ...array[up], idx: up },
    rightUp: { ...array[rightUp], idx: rightUp },
    left: { ...array[left], idx: left },
    right: { ...array[right], idx: right },
    leftDown: { ...array[leftDown], idx: leftDown },
    down: { ...array[down], idx: down },
    rightDown: { ...array[rightDown], idx: rightDown },
  };
};

export const simulate = (array, cycles = 10) => {
  const next = [...array];
  array.forEach((cell) => {
    const neighbors = findNeighborIdx();
  });

  return next;
};
