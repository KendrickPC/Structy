/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls.
W represents water and L represents land. The function should return the
size of the smallest island. 
An island is a vertically or horizontally connected region of land.
You may assume that the grid contains at least one island.
*/

// 1. let smallestSize = Infinity;
// 2. const visited = new Set();
// traverse through row
// inner loop traverse through col
// helper function traverse2DArray(grid, row, col, visited);
// x. return smallestSize

// inside helper function...
// let size = 1;
// check for rowInBounds, colInBounds. If not in bounds, return 0;
// check grid[row][col] === 'W', return 0;
// let currentPos = row + ',' + col;
// if visited.has(currentPos) return 0;
// visited.add(currentPosition)

// size += recursive calls to neighbors (up, down, left, right)
// return size;


const minimumIsland = (grid) => {
  const visited = new Set();
  let min = Infinity;
  for (let row=0; row<grid.length; row+=1) {
    for (let col=0; col<grid[0].length; col+=1) {
      const currentSize = traverseGrid(grid, row, col, visited);
      if (currentSize < min && currentSize > 0) min = currentSize;
    }
  }
  return min;
}

const traverseGrid = (grid, row, col, visited) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid[0].length;
  if (!rowInBounds || !colInBounds) return 0;

  if (grid[row][col] === 'W') return 0;

  const position = row + ',' + col;
  if (visited.has(position)) return 0;
  visited.add(position);

  let size = 1;
  size += traverseGrid(grid, row-1, col, visited);
  size += traverseGrid(grid, row+1, col, visited);
  size += traverseGrid(grid, row, col-1, visited);
  size += traverseGrid(grid, row, col+1, visited);

  return size;
}

const grid0 = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid0)); // -> 2

const grid1 = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

console.log(minimumIsland(grid1)); // -> 1

const grid2 = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

console.log(minimumIsland(grid2)); // -> 9

const grid3 = [
  ['W', 'W'],
  ['L', 'L'],
  ['W', 'W'],
  ['W', 'L']
];

console.log(minimumIsland(grid3)); // -> 1

module.exports = {
  minimumIsland
};
