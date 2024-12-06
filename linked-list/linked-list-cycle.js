/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


// Hash set
// Check if the hash set already contains the current node
// Time - O(n) / Space - O(n)
var hasCycle = function(head) {
  const set = new Set();

  while (head) {
    if (set.has(head)) return true;
    
    set.add(head);
    head = head.next;
  }

  return false;
};


// 2 pointers, fast & slow
// If fast = slow, there's a cycle
// Time - O(n) / Space - O(1)
var hasCycle = function(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }

  return false;
};