// Remove Linked List Elements (LeetCode #203)
// https://leetcode.com/problems/remove-linked-list-elements/description/


// Problem
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.


// Example 1
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]


// Example 2
// Input: head = [], val = 1
// Output: []


// Example 3
// Input: head = [7,7,7,7], val = 7
// Output: []


// Solution
var removeElements = function(head, val) {
  // If head === null
  if (!head) {
    return head;
  }
  
  // If head matches "val"
  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      break;
    }
  }

  // Iterate through the list
  let curr = head;  
  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};