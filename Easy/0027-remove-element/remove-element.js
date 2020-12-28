// https://leetcode.com/problems/remove-element/
// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

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
var removeElement = function (nums, val) {

    // Go through the array and check for matches to val
    for (let i=0; i<nums.length; i++) {
        if(nums[i]===val) {
            nums.splice(i,1); // at index i, remove 1 element
            i--; // step "back" so that same index is checked again
        }
    }
    // Return the length of the nums array (after the elements have been removed)
    console.log(nums)
    return nums.length;
};

// ============================================================

console.log(removeElement([3, 2, 2, 3], 3)) // returns 2, nums = [2,2]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) // returns 5, nums = [0,1,3,0,4]

// ============================================================
// RESULTS:
// Runtime: 76 ms, faster than 85.18%
// Memory Usage: 38.7 MB, less than 31.49%
