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

const evalLivingNeighbors = (neighbors) => {
  let neighborhoodPop = 0;
  Object.values(neighbors).forEach((neighbor) => {
    if (neighbor.alive) {
      neighborhoodPop++;
    }
  });
  return neighborhoodPop;
};

export const simulate = (array, size) => {
  const next = [];
  array.forEach((cell, idx) => {
    const neighbors = findNeighborIdx(size, idx, array);
    const population = evalLivingNeighbors(neighbors);

    // Death cell rules
    if (cell.alive === false) {
      // reproduction
      if (population === 3) {
        next.push({ ...cell, alive: true });
        // remain dead
      } else {
        next.push(cell);
      }
      // Live cell rules
    } else if (cell.alive === true) {
      // underpopulation
      if (population < 2) {
        next.push({ ...cell, alive: false });
        // overpopulation
      } else if (population > 3) {
        next.push({ ...cell, alive: false });
        // next generation/healthy population
      } else if (population === 2 || population === 3) {
        next.push({ ...cell, alive: true });
      }
    }
  });
  return next;
};
