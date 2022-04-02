/*
Write a function, addLists, that takes in the head of two linked lists, each
representing a number. The nodes of the linked lists contain digits as values.
The nodes in the input lists are reversed; this means that the least
significant digit of the number is the head. The function should return the
head of a new linked listed representing the sum of the input lists. 
The output list should have its digits reversed as well.

Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would appear as:

    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 1. Get head1 into an array with each number. Iterate through, without reversing the numbers.
// 2. Get head2 into an array with each number. iterate through, without reversing the numbers.
// 3. Sum the arrays: Grab the total.
// 4. Split the sum total into an array:
// 5. Create linked Lists.

// x. Join the arrays

// n = # of nodes in both heads combined
// Time: O(n)
// Space: O(n) for new linked list created after reversal sum obtained.

const addLists = (head1, head2) => {
  const arr1 = [];
  const arr2 = [];
  let cur1 = head1;
  let cur2 = head2;
  while (cur1 !== null) {
    arr1.push(cur1.val);
    cur1 = cur1.next;
  }
  while (cur2 !== null) {
    arr2.push(cur2.val);
    cur2 = cur2.next;
  }
  const num1 = Number(arr1.reverse().join(''));
  const num2 = Number(arr2.reverse().join(''));
  const strSum = String(num1 + num2);
  
  let newArr = strSum.split('').reverse();
  
  let newHead = new Node(Number(newArr[0]));
  let current = newHead;
  for (let i=1; i<newArr.length; i++) {
    current.next = new Node(Number(newArr[i]));
    current = current.next;
  }
  return newHead;

};


//   621
// + 354
// -----
//   975

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

console.log(addLists(a1, b1));
// 5 -> 7 -> 9


module.exports = {
  addLists
};