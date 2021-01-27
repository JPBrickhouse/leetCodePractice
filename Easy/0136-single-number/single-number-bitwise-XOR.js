// https://leetcode.com/problems/single-number/
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
// ===============================================
var singleNumber = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]
    }
    return result;
};
// ===============================================
console.log(singleNumber([2, 2, 1])) // returns 1
console.log(singleNumber([4, 1, 2, 1, 2])) // returns 4
console.log(singleNumber([1])) // returns 1
// ===============================================
// RESULTS:
// Runtime: 148 ms, faster than 20.08%
// Memory Usage: 40.1 MB, less than 95.80%

// JPB NOTES:
// This solution is using the bitwise XOR operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
// Don't fully understand...