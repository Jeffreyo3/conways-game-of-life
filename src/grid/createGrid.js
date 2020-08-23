export const blankGridArray = (size) => {
  const array = [];
  let id = 0;
  // loop through grid size for width
  for (let i = 0; i < size; i++) {
    // loop through grid size for height
    for (let j = 0; j < size; j++) {
      array.push({
        id: id++,
        column: i + 1,
        row: j + 1,
        alive: false,
        clickable: true,
      });
    }
  }
  return array;
};

export const randomGridArray = (size) => {
  const array = [];
  let id = 0;
  // loop through grid size for width
  for (let i = 0; i < size; i++) {
    // loop through grid size for height
    for (let j = 0; j < size; j++) {
      array.push({
        id: id++,
        column: i + 1,
        row: j + 1,
        alive: Math.floor(Math.random() * 2 - 0.75) === 1 ? true : false,
        clickable: true,
      });
    }
  }
  return array;
};
