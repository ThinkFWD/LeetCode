

/* 
++++++ QUESTION ++++++ 

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

++++++ EXAMPLE ++++++

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

++++++ ANALYSIS ++++++

Assumption:
  Non-empty linked list
  Non-negative int
  Reverse Order
  Node = single digit
  No leading 0 except for 0 itself

Restriction:


*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
   this.val = val;
   this.next = null;
}

let sample1 = new ListNode(2);
sample1.next = new ListNode(4);
sample1.next.next = new ListNode (3);
sample1.next.next.next = new ListNode (3);

let sample2 = new ListNode(5);
sample2.next = new ListNode(6);
sample2.next.next = new ListNode(4);


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
  let solution = new ListNode(0);
  let temp = solution;
  let [ pointer1 , pointer2, pointer3, carryOver] = [ l1 , l2, 0, 0 ];

  while(pointer1 !== null || pointer2 !== null){
    let x = (pointer1 !== null) ? pointer1.val : 0
    let y = (pointer2 !== null) ? pointer2.val : 0
    let sum = x + y + carryOver;

    pointer3 = (sum >= 10) ? sum%10 : sum;
    carryOver = (sum >= 10) ? (sum-pointer3)/ 10 : 0;
      
    temp.next = new ListNode(pointer3);
    temp = temp.next;

    if (pointer1 !== null) pointer1 = pointer1.next;
    if (pointer2 !== null) pointer2 = pointer2.next;
  }
    if(carryOver > 0){
        temp.next = new ListNode(carryOver);
    }
  return solution.next;
}

console.log('solution to problem', addTwoNumbers(sample1,sample2));