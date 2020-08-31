export const findIdx = (modRow, modColumn, idx, size) => {
  const currRow = Math.floor(idx / size) + 1;
  const currColumn = (idx % size) + 1;

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

export const findNeighborIdx = (size, idx, array) => {
  const leftUp = findIdx(2, 2, idx, size);
  const up = findIdx(2, 1, idx, size);
  const rightUp = findIdx(2, 0, idx, size);
  const left = findIdx(1, 2, idx, size);
  const right = findIdx(1, 0, idx, size);
  const leftDown = findIdx(0, 2, idx, size);
  const down = findIdx(0, 1, idx, size);
  const rightDown = findIdx(0, 0, idx, size);
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

const countNeighbors = (size, idx, array) => {
  let count = 0
  if (array[findIdx(2, 2, idx, size)] && array[findIdx(2, 2, idx, size)].alive) {
    count++
  }
  if (array[findIdx(2, 1, idx, size)] && array[findIdx(2, 1, idx, size)].alive) {
    count++
  }
  if (array[findIdx(2, 0, idx, size)] && array[findIdx(2, 0, idx, size)].alive) {
    count++
  }
  if (array[findIdx(1, 2, idx, size)] && array[findIdx(1, 2, idx, size)].alive) {
    count++
  }
  if (array[findIdx(1, 0, idx, size)] && array[findIdx(1, 0, idx, size)].alive) {
    count++
  }
  if (array[findIdx(0, 2, idx, size)] && array[findIdx(0, 2, idx, size)].alive) {
    count++
  }
  if (array[findIdx(0, 1, idx, size)] && array[findIdx(0, 1, idx, size)].alive) {
    count++
  }
  if (array[findIdx(0, 0, idx, size)] && array[findIdx(0, 0, idx, size)].alive) {
    count++
  }
// console.log(count)
return count

}

export const simulate = (array, size) => {
  const next = [];
  array.forEach((cell, idx) => {
    // const neighbors = findNeighborIdx(size, idx, array);
    // const population = evalLivingNeighbors(neighbors);

    const population = countNeighbors(size, idx, array)

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

export const randomCentralPosition = (size) => {

  const randomOffset = Math.floor(Math.random() * 3);
  let approxCenter = 0
  // find center if odd number
  if (size % 2) {
    approxCenter = Math.floor((size * size) / 2);
    // find center if even number
  } else {
    approxCenter = Math.floor((size * size) / 2) + (size / 2);
  }
  let calc = approxCenter + randomOffset
  if (Math.floor(Math.random() * 2)) {
    calc += randomOffset;
  } else {
    calc -= randomOffset * 2;
  }
  if (Math.floor(Math.random() * 2)) {
    calc -= size * 2;
  } else {
    calc += size;
  }
  return calc
};
