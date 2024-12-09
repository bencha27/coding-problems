/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */


// Convert list to array
// 2 pointers
// Time - O(n) / Space - O(n)
var isPalindrome = function(head) {
  let array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }

  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] !== array[right]) return false;
    left++;
    right--;
  }
  return true;
};


// Reverse 2nd half of list, compare w/ 1st half
// Time - O(n) / Space - O(1)
var isPalindrome = function(head) {
  // Get to 2nd half of list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse 2nd half of list
  let prev = null;

  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  
  // Compare 1st half w/ reversed 2nd half
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
};