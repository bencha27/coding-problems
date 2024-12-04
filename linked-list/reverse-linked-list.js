/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// Iterative
// Make the next of the current node the previous node
// Time - O(n) / Space - O(1)
var reverseList = function(head) {
  let curr = head;
  let next;
  let prev = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};


// Recursive
// Make current node the tail
// Time - O(n) / Space - O(1)
var reverseList = function(head) {
  if (!head) return null;

  let newHead = head;

  if (head.next) {
    newHead = reverseList(head.next);
    head.next.next = head;
  }

  head.next = null
  return newHead;
};