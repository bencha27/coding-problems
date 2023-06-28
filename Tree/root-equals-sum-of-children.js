// Root Equals Sum of Children (LeetCode #2236)

// Problem
// You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
// Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

// Example 1
// Input: root = [10,4,6]
// Output: true

// Example 2
// Input: root = [5,3,1]
// Output: false

// Solution
var checkTree = function(root) {
  return root.val === root.left.val + root.right.val;
}