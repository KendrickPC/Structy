/*
Write a function, createCombinations, that takes in an array and a
length as arguments. The function should return a 2D array representing
all of the combinations of the specifized length.

The items within the combinations and the combinations themselves may be
returned in any order.

You may assume that the input array contains unique elements
and 1 <= k <= items.length.
*/

const createCombinations = (items, k) => {
  const allCombinations = _createCombinations(items, k);
  kCombinations = [];
  for (let combinations of allCombinations) {
    if (combinations.length === k) {
      kCombinations.push(combinations);
    }
  }
  return kCombinations;
}

const _createCombinations = (items, k) => {
  if (items.length === 0) return [ [] ];
  const first = items[0];
  const subsetsWithoutFirst = _createCombinations(items.slice(1));
  const subsetsWithFirst = [];
  for (let sub of subsetsWithoutFirst) {
    subsetsWithFirst.push([first, ...sub]);
  }
  const allCombinations = [...subsetsWithFirst, ...subsetsWithoutFirst];
  return allCombinations;

};

console.log(createCombinations(["a", "b", "c"], 2));
// ->
// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]
// console.log(createCombinations(["q", "r", "s", "t"], 2));
// ->
// [
//   [ 'q', 'r' ],
//   [ 'q', 's' ],
//   [ 'q', 't' ],
//   [ 'r', 's' ],
//   [ 'r', 't' ],
//   [ 's', 't' ]
// ]
// console.log(createCombinations(['q', 'r', 's', 't'], 3)));
// ->
// [
//   [ 'q', 'r', 's' ],
//   [ 'q', 'r', 't' ],
//   [ 'q', 's', 't' ],
//   [ 'r', 's', 't' ]
// ]
// console.log(createCombinations([1, 28, 94], 3));
// ->
// [
//   [ 1, 28, 94 ]
// ]


module.exports = {
  createCombinations
};
