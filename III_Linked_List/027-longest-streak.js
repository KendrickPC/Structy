/*
Write a function, longestStreak, that takes in the head of a linked list as
an argument. The function should return the length of the longest consecutive
streak of the same value within the list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 1. Create a currentStreak variable and set it to 0;
// 2. Create a maxStreak variable and set it to 0;
// 3. Create a previous variable and set it to head
// 4. Create a current variable and set it to head.next;

// 5. While loop (current !== null), compare to previous value.
// 5a. If true, currentStreak += 1;
// 5b. maxStreak = Math.max(maxStreak, currentStreak);
// 6. If false, reset currentStreak to 1;
// 7. Return maxStreak outside while loop

// n = # of nodes in linked list
// Time: O(n) because we need to iterate through the entire linked list
// Space: O(1) no new space is stored in memory.

const longestStreak = (head) => {
  // Edge Case of head === null;
  if (head === null) return 0;

  let currentStreak = 1;
  let maxStreak = 1;
  let current = head.next;
  let previous = head;

  while (current !== null) {
    if (current.val === previous.val) {
      currentStreak += 1;
      maxStreak = Math.max(currentStreak, maxStreak);
    } else {
      currentStreak = 1;
    }
    previous = current;
    current = current.next;
  }
  return maxStreak;
};

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 5 -> 7 -> 7 -> 7 -> 6
console.log(longestStreak(a)); // 3

module.exports = {
  longestStreak
};
