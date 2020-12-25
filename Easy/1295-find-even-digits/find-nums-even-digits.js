// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// Given an array nums of integers, return how many of them contain an even number of digits.

// =============================================================

// RESULTS:
// Runtime: 80 ms, faster than 78.06%
// Memory Usage: 39 MB, less than 85.23%

var findNumbers = function (nums) {
    
    // Initialize the counter
    let count = 0;

    // Go through every element of the array
    for (let i = 0; i < nums.length; i++) {
        // nums[i] is the current element
        // toString convers the number to a string
        // length is the length of the string (aka, the number of digits)
        let numLength = nums[i].toString().length;
        
        // When numLength is divided by 2
        // If the remainder is zero (aka, is it even)
        // Increase the count
        if(numLength % 2 === 0) {
            count++;
        }
    }

    return count;
};

// =============================================================
console.log(findNumbers([12,345,2,6,7896]))
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

console.log(findNumbers([555,901,482,1771]))
// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.