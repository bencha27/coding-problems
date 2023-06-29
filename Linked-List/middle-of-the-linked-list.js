// Middle of the Linked List (LeetCode #876)
// https://leetcode.com/problems/middle-of-the-linked-list/

// Problem
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]

// Example 2
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]

// Solution
var middleNode = (head) => {
  let node = head;
  let count = 1;
  let middleNode = head;
  while (node.next) {
    count++;
    node = node.next;
  }
  let middle = Math.floor(count / 2);
  for (i = 0; i < middle; i++) {
    middleNode = middleNode.next;
  }
  return middleNode;
}