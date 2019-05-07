

function ListNode(val) {
  this.val = val;
  this.next = null;
}
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(head === null || head.next === null) return head;
  let reversed = new reverseList (head.next);
  head.next.next = head;
  head.next = null;
  console.log('++++', reversed.val);
  return reversed;
};

let sampleTest = new ListNode('1');
sampleTest.next = new ListNode('2');
sampleTest.next.next = new ListNode('3');
sampleTest.next.next.next = new ListNode('4');

console.log('Solution', reverseList(sampleTest));

