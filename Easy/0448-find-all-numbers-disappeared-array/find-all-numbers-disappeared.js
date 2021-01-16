// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements of [1, n] inclusive that do not appear in this array.
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
// ====================================================
// JPB Notes:
// This solution works, but is inefficient in runtime and memory
// However, it is easy to understand
// ====================================================
var findDisappearedNumbers = function (nums) {

    // Sort the numbers is unnecessary
    // nums.sort((a, b) => a - b);

    // Create a number cache for counting
    // Populate it with zero counts
    let numberCache = {};
    for (let i = 1; i <= nums.length; i++) {
        numberCache[i] = 0;
    }

    // Go through 
    for (let i = 0; i < nums.length; i++) {
        numberCache[nums[i]]++;
    }

    let finalArrayOfMissing = [];

    for (key in numberCache) {
        if(numberCache[key] === 0) {
            finalArrayOfMissing.push(parseInt(key));
        }
    }

    return finalArrayOfMissing;
};
// ====================================================
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) // returns [5,6]
// ====================================================
// RESULTS:
// Runtime: 128 ms, faster than 54.37%
// Memory Usage: 53.8 MB, less than 9.52%