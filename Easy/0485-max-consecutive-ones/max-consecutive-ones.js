// https://leetcode.com/problems/max-consecutive-ones/
// Given a binary array, find the maximum number of consecutive 1s in this array.
// Notes:
// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000
// =================================================================
var findMaxConsecutiveOnes = function (nums) {
    let overallMaxCounter = 0;
    let localMaxCounter = 0;
    let i = 0;

    while (i < nums.length) {

        if (nums[i] === 1) {
            localMaxCounter++;
            if (localMaxCounter > overallMaxCounter) {
                overallMaxCounter = localMaxCounter;
            }
        }

        if (nums[i] === 0) {
            localMaxCounter = 0;
        }

        i++;
    }

    return overallMaxCounter;
};
// =================================================================
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])) // returns 3
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0]))
// =================================================================
// RESULTS:
// Runtime: 88 ms, faster than 62.37%
// Memory Usage: 41.2 MB, less than 74.84%