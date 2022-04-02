/*
Write a function, zipperLists, that takes in the head of two linked lists as
arguments. The function should zipper the two lists together into single linked
list by alternating nodes. If one of the linked lists is longer than the other,
the resulting list should terminate with the remaining nodes.
The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 1. Create a head and start it at head1;
// 2. Create tail and start it at head;
// 3. Create a cur1 and start it at 'b' for head1;
// 4. Create a cur2 and start it at 'x' for head2;
// 5. Create a count for the module of altering joins;

// 6. While cu1 !== null && cur2 !== null, do something....
// 7. If count % 2 is 0, (even count), connect c1 to c2.
// 8. Else, (odd count) connect c2 to c1.
// 9. Increment count, increment tail
// 10. Return head...

// Time: O(n) because we need to loop through both linked lists
// Space: O(1) No storage added. 


const zipperLists = (head1, head2) => {
  const head = head1;
  let tail = head;
  let cur1 = head1.next;
  let cur2 = head2;
  let count = 0;

  while (cur1 !== null && cur2 !== null) {
    if (count % 2 === 0) {
      tail.next = cur2;
      cur2 = cur2.next;
    } else {
      tail.next = cur1;
      cur1 = cur1.next;
    }
    count += 1;
    tail = tail.next;
  }
  if (cur1 !== null) tail.next = cur1;
  if (cur2 !== null) tail.next = cur2;
  return head;
};

/*
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c
const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z
console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z
*/

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f
const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z
console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z -> d -> e -> f

const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4
console.log(zipperLists(s, one));
// s -> 1 -> t -> 2 -> 3 -> 4

/*
const w = new Node("w");
// w
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 
console.log(zipperLists(w, one));
// w -> 1 -> 2 -> 3
*/

/*
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 
const w = new Node("w");
// w
console.log(zipperLists(one, w));
// 1 -> w -> 2 -> 3
*/







module.exports = {
  zipperLists
};