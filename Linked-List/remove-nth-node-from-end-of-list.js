// Remove nth Node from End of List
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/


// Problem
// Given the head of a linked list, remove the nth node from the end of the list and return its head.


// Example 1
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]


// Example 2
// Input: head = [1], n = 1
// Output: []


// Example 3
// Input: head = [1,2], n = 1
// Output: [1]


// Solution
var removeNthFromEnd = function(head, n) {
  // Find the nth node from the end
  let fast = head;
  let slow = head;
  
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  
  // If the first node is removed
  if (!fast) {
    return head.next;
  }
  
  // If any other node is removed
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  
  slow.next = slow.next.next;
  
  return head;
};