// https://leetcode.com/problems/majority-element/
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.
// --------------------------------------------------------------------------------
var majorityElement = function (nums) {
    // Initialize a cache
    let cache = {};

    // Go through the array of numbers
    // Store the count of those numbers in the cache
    for (let i = 0; i < nums.length; i++) {
        if (cache[nums[i]]) {
            cache[nums[i]]++;
        }
        else {
            cache[nums[i]] = 1;
        }
    }

    // Go through the cache
    // If the number has a count that is greater than [n / 2], that is the majority element
    for (const number in cache) {
        let numberCount = cache[number];
        if (numberCount > nums.length / 2) {
            return number;
        }
    }
};
// --------------------------------------------------------------------------------
console.log(majorityElement([3, 2, 3])) // returns 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // returns 2
// --------------------------------------------------------------------------------
// RESULTS:
// Runtime: 84 ms, faster than 74.15%
// Memory Usage: 40.6 MB, less than 96.87%