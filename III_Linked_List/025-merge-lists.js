/*
Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 1. Create and set DUMMYHEAD = null.
// 2. Create and set tail = DUMMYHEAD;
// 3. Create and set cur1 = head1
// 4. Create and set cur2 = head2
// 5. While cur1 !== null && cur2 !== null, do something:
// 6. if cur1.val < cur2.val, tail.next = cur1... else cur2.next = cur2
// 6a. Increment cur1 by setting cur1 = cur1.next;
// 6b. Increment cur2 by setting cur2 = cur2.next;

// 7. If cur1 !== null, join tail to cur1.
// 8. If cur2 !== null, join tail to cur2.

// 9. return DummyHEAD

const mergeLists = (head1, head2) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  let cur1 = head1;
  let cur2 = head2;
  while (cur1 !== null && cur2 !== null) {
    if (cur1.val < cur2.val) {
      tail.next = cur1;
      cur1 = cur1.next;
    } else {
      // cur1.val > cur2.val
      tail.next = cur2;
      cur2 = cur2.next;
    }
    tail = tail.next;
  }

  if (cur1 !== null) tail.next = cur1;
  if (cur2 !== null) tail.next = cur2;

  return dummyHead.next;
};

/*
const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28
const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25
console.log(mergeLists(a, q));
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 
*/
const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28
const q = new Node(1);
const r = new Node(8);
const s = new Node(9);
const t = new Node(10);
q.next = r;
r.next = s;
s.next = t;
// 1 -> 8 -> 9 -> 10
console.log(mergeLists(a, q));
// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28 

// const h = new Node(30);
// // 30
// const p = new Node(15);
// const q = new Node(67);
// p.next = q;
// // 15 -> 67
// console.log(mergeLists(h, p));
// // 15 -> 30 -> 67











module.exports = {
  mergeLists
};