# [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/description/)

Difficulty - Medium  
[NeetCode 150](https://neetcode.io/practice)

## Problem

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.

## Examples

**Example 1**  
Input: `nums = [1,1,1,2,2,3], k = 2`  
Output: `[1,2]`

**Example 2**  
Input: `nums = [1], k = 1`  
Output: `[1]`

## Constraints

- <code>1 <= nums.length <= 10<sup>5</sup></code>
- <code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>
- `k` is in the range `[1, the number of unique elements in the array]`.
- It is guaranteed that the answer is unique.

## Follow-Up

- Your algorithm's time complexity must be better than `O(n log n)`, where `n` is the array's size.
