// https://leetcode.com/problems/sort-colors/
// Given an array nums with n objects colored red, white, or blue,
// sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// ==========================================================

// ONE PASS SOLUTION

// ==========================================================
var sortColors = function (nums) {
    // Determine the number of steps remaining
    let stepsRemaining = nums.length;

    // Keeping track of what index you are at in the array
    let i = 0;

    // Go through the nums array, but only while there are steps remaining
    while (stepsRemaining >= 1) {
        // If the number is 2...
        // Splice it out, and then push it to the end of the array
        // No need to increase the index location, because everything gets moved to the end
        // Essentially, look at the same index again, but it has a new number now
        if (nums[i] == 2) {
            nums.splice(i, 1)
            nums.push(2)
        }
        // If the number is 0...
        // Splice it out, and then unshift it to the front of the array
        // NEED to increase the index location, because everything gets moved to the beginning
        // Otherwise, you'd end up looking at the "previous" index (albeit, with a new number)
        else if (nums[i] == 0) {
            nums.splice(i, 1)
            nums.unshift(0)
            i++
        }
        // If the number is 1...
        // Do nothing, but increase the index counter
        else {
            i++
        }

        // Decrease the steps remaining counter
        stepsRemaining--;
    }

    // Return the array, which has been sorted in place
    return nums;
};
// ==========================================================
console.log(sortColors([2, 0, 2, 1, 1, 0])) // returns [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])) // returns [0,1,2]
console.log(sortColors([0])) // returns [0]
console.log(sortColors([1])) // returns [1]
console.log(sortColors([0, 2, 1])) // returns [0,1,2]
console.log(sortColors([1, 2, 0])) // returns [0,1,2]
// ==========================================================
// RESULTS:
// Runtime: 80 ms, faster than 65.94%
// Memory Usage: 38.6 MB, less than 78.42%
