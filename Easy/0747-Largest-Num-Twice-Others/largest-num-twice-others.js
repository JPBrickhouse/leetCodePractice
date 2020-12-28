// https://leetcode.com/problems/largest-number-at-least-twice-of-others/

// In a given integer array nums, there is always exactly one largest element.
// Find whether the largest element in the array is at least twice as much as every other number in the array.
// If it is, return the index of the largest element, otherwise return -1.
// ==================================================
var dominantIndex = function (nums) {
    
    // Use the spread operator to spread all the elements of the array
    // Use the Math.max function on those spread elements / values
    // Once we find the maximum number, also make note of its index
    let maxNum = Math.max(...nums)
    let maxIndex = nums.indexOf(maxNum)

    // Loop through the nums array
    for (let i = 0; i < nums.length; i++) {
        
        // If the current value is the maximum value, don't do anything
        if (nums[i] === maxNum) {
            continue; // do nothing, continue the loop
        }
        // Otherwise...
        else {
            // Check to see if the current value, when multiplied by 2, exceeds the maximum number
            // If that's the case, return -1
            if (nums[i] * 2 > maxNum) {
                return -1
            }
        }
    }

    // Otherwise, if we've reached this point...
    // The largest element in the array is twice as much as every other number
    // Therefore, return its index
    return maxIndex
};
// ==================================================
console.log(dominantIndex([3, 6, 1, 0]))
// 6 is the largest integer, and for every other number in the array x.
// 6 is more than twice as big as x. The index of value 6 is 1, so we return 1.
console.log(dominantIndex([1, 2, 3, 4]))
// 4 isn't at least as big as twice the value of 3, so we return -1.
// ==================================================

// RESULTS:
// Runtime: 72 ms, faster than 96.21%
// Memory Usage: 39 MB, less than 37.12%