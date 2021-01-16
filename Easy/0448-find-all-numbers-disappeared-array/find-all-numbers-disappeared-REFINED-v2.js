// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements of [1, n] inclusive that do not appear in this array.
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
// ====================================================
// Leetcode Hints:

// 1. This is a really easy problem if you decide to use additional memory. For those trying to write an initial solution using additional memory, think counters!

// 2. However, the trick really is to not use any additional space than what is already available to use. Sometimes, multiple passes over the input array help find the solution.
//    However, there's an interesting piece of information in this problem that makes it easy to re-use the input array itself for the solution.

// 3. The problem specifies that the numbers in the array will be in the range [1, n] where n is the number of elements in the array.
//    Can we use this information and modify the array in-place somehow to find what we need?
// ====================================================
var findDisappearedNumbers = function (nums) {

    let finalArrayOfMissing = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]);
        nums[index - 1] = Math.abs(nums[index - 1]) * -1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            finalArrayOfMissing.push(i + 1);
        }
    }
    return finalArrayOfMissing;
};
// ====================================================
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) // returns [5,6]
// ====================================================
// RESULTS:
// Runtime: 108 ms, faster than 90.62%
// Memory Usage: 46.4 MB, less than 76.94%

// This solution goes through the array twice

// The first time through the array, it looks at the value in question.
// That value gets "converted" into an index
// Going to that index, turn the value at that index there into a negative number
// The value itself at that index doesn't matter... only that the value is now a negative number

// The second time through the array
// Look at the value of the indexes
// If the value remains positive, that means the index didn't occur
// The index corresponds to a missing number!