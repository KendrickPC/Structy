/*
Write a function, islandCount, that takes in a grid containing Ws and Ls.
W represents water and L represents land. The function should return the number
of islands on the grid. An island is a vertically or horizontally connected
region of land.
*/

// 1. Create a visited set so we don't visit the same point in 2d array again.
// 2. Create a total count let count = 0;
// 3. for loop through grid = row;
// 4. for loop through grid[0] = col;
// 5. TraverseGraph(grid, row, col, visited);

// 6. check in bounds, if not, return false;
// 7. if (grid[row][col] === 'W' return false;

// 8. current position = row + "," + col;
// 9. if (visited.has(current Position)) return false;

// 10. recursive calls to neighbors
// 11. return true;



// x. return count;

const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (traverse2DArray(grid, row, col, visited) === true) count += 1;
    }
  }
  return count;
};

const traverse2DArray = (grid, row, col, visited) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid[0].length;
  if (!rowInBounds || !colInBounds) return false;

  if (grid[row][col] === 'W') return false;

  const currentPos = row + ',' + col;
  if (visited.has(currentPos)) return false;
  visited.add(currentPos);

  traverse2DArray(grid, row-1, col, visited);
  traverse2DArray(grid, row+1, col, visited);
  traverse2DArray(grid, row, col-1, visited);
  traverse2DArray(grid, row, col+1, visited);

  return true;
}

const grid0 = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid0)); // -> 3

const grid1 = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

console.log(islandCount(grid1)); // -> 4

const grid2 = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

console.log(islandCount(grid2)); // -> 1

const grid3 = [
  ['W', 'W'],
  ['W', 'W'],
  ['W', 'W'],
];

console.log(islandCount(grid3)); // -> 0

module.exports = {
  islandCount
};
