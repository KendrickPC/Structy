/*
Write a function, islandCount, that takes in a grid containing Ws and Ls.
W represents water and L represents land. The function should return the number
of islands on the grid. An island is a vertically or horizontally connected
region of land.
*/



const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let row=0; row<grid.length; row+=1) {
    for (let col=0; col<grid[0].length; col+=1) {
      if (traverseGrid(grid, row, col, visited) === true) count += 1;
    }
  }
  return count;
};

const traverseGrid = (grid, row, col, visited) => {
  // return Boolean true/false
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid[0].length;
  if (!rowInBounds || !colInBounds) return false;

  if (grid[row][col] === 'W') return false;

  const position = row + ',' + col;
  if (visited.has(position)) return false;
  visited.add(position);

  traverseGrid(grid, row-1, col, visited);
  traverseGrid(grid, row+1, col, visited);
  traverseGrid(grid, row, col-1, visited);
  traverseGrid(grid, row, col+1, visited);

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
