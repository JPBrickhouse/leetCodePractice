// https://leetcode.com/problems/search-insert-position/
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// ======================================================================================
// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums contains distinct values sorted in ascending order.
// -10^4 <= target <= 10^4
// ======================================================================================
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] > target) {
            return i;
        }
    }
    return nums.length;
}
// ======================================================================================
console.log(searchInsert([1, 3, 5, 6], 5)) // returns 2
console.log(searchInsert([1, 3, 5, 6], 2)) // returns 1
console.log(searchInsert([1, 3, 5, 6], 7)) // returns 4
console.log(searchInsert([1, 3, 5, 6], 0)) // returns 0
console.log(searchInsert([1], 0)) // returns 0
console.log(searchInsert([1, 3], 3)) // returns 1
// ======================================================================================
// RESULTS:
// Runtime: 84 ms, faster than 30.00%
// Memory Usage: 39.2 MB, less than 7.86%