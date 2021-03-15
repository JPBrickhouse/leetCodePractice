// https://leetcode.com/problems/sort-colors/
// Given an array nums with n objects colored red, white, or blue,
// sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// ==========================================================

// TWO PASS SOLUTION

// ==========================================================
var sortColors = function (nums) {
    // Create the cache
    let cache = {
        0: 0,
        1: 0,
        2: 0
    };

    // Store the counts (how many times 0, 1, 2 appear) in the cache
    for (let i = 0; i < nums.length; i++) {
        cache[nums[i]]++;
    }

    // Overwrite the original array in the cache
    let zeroCount = cache[0]; // How many 0s?
    let oneCount = cache[1]; // How many 1s?
    let twoCount = cache[2]; // How many 2s?
    let j = 0;
    while (j < nums.length) {
        for(let k=1; k<=zeroCount; k++) {
            nums[j] = 0;
            j++;
        }
        for(let k=1; k<=oneCount; k++) {
            nums[j] = 1;
            j++;
        }
        for(let k=1; k<=twoCount; k++) {
            nums[j] = 2;
            j++;
        }
    }

    // Return the final array
    return nums;
}
// ==========================================================
console.log(sortColors([2, 0, 2, 1, 1, 0])) // returns [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])) // returns [0,1,2]
console.log(sortColors([0])) // returns [0]
console.log(sortColors([1])) // returns [1]
console.log(sortColors([0, 2, 1])) // returns [0,1,2]
console.log(sortColors([1, 2, 0])) // returns [0,1,2]
// ==========================================================
// RESULTS:
// Runtime: 76 ms, faster than 85.96%
// Memory Usage: 38.6 MB, less than 63.63%
