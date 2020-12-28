// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:
// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// Internally you can think of this:
// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeElement(nums, val);
// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

// ============================================================
var removeDuplicates = function (nums) {

    // Go through the SORTED array and look for duplicates
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i,1);  // at index i, remove 1 element
            i--;  // step "back" so that same index is checked again
        }
    }

    // Return the length of the nums array (after the elements have been removed)
    console.log(nums)
    return nums.length;
};
// ============================================================
console.log(removeDuplicates([1, 1, 2])) // returns 2, nums = [1,2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // returns 5, nums = [0,1,2,3,4]
// ============================================================
// RESULTS:
// Runtime: 100 ms, faster than 51.78%
// Memory Usage: 40.8 MB, less than 63.26%