

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

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let solution = new ListNode(null);
    let [pointer1, pointer2, pointer3, carryOver] = [0,0,0,0];

    while(pointer1.next !== null && pointer2.next !== null){
      pointer1 = (l1.val !== null) ? l1.val : 0;
      pointer2 = (l2.val !== null) ? l2.val : 0; 

      pointer3 = ((pointer1+pointer2+carryOver) > 9) ? ((pointer1+pointer2+carryOver) % 10) : pointer1+pointer2+carryOver
      carryOver = ((pointer1+pointer2+carryOver) > 9) ? (pointer1+pointer2-pointer3) / 10 : 0;
    
      if(solution.val === null){
        solution.val = pointer3;
      }else{
        solution.next = new ListNode(pointer3);
      }
      pointer1 = l1.next;
      pointer2 = l2.next;
      console.log('+++++++', pointer1.next ,'||',  pointer2.next)
    }
    pointer3 = ((pointer1.val+pointer2.val+carryOver) > 9) ? ((pointer1.val+pointer2.val+carryOver) % 10) : pointer1.val+pointer2.val+carryOver
    solution.next = new ListNode(pointer3);

    return solution;
};

let [input1, input2] = [new ListNode(1), new ListNode(9)]
input1.next = new ListNode(2);
input1.next.next = new ListNode(5);
input2.next = new ListNode(6);

console.log('List 1', input1)
console.log('List 2', input2)
console.log('solution', addTwoNumbers(input1, input2));