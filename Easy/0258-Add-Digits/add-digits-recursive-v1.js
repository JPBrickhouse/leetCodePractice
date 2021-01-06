// https://leetcode.com/problems/add-digits/
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
// Follow up: Could you do it without any loop/recursion in O(1) runtime?

// With assistance from:
// https://stackoverflow.com/questions/38334652/sum-all-the-digits-of-a-number-javascript

// RECURSIVE SOLUTION BELOW:
// =================================================
var addDigits = function (num) {
    
    // Internal mini function to sum the digits once
    function interanlSumDigits (number) {
        let value = number;
        let sumOfDigits = 0;
        // Using arithmetic to accomplish the task
        // - Getting the remainder when dividing by 10 (that gets the last digit)
        // - Rounding down when dividing by 10 to get the remaining digits (before the last digit)
        // - Repeat
        // e.g. value = 158
        // --> 158 % 10 = 8, so add 8 to sum of digits
        // --> Math.floor(158 / 10) = 15, so value = 15
        // --> repeat because value is not equal to zero
        while (value !==0) {
            sumOfDigits += value % 10;
            value = Math.floor(value / 10);
        }
        return sumOfDigits;
    }

    // Initially call the internal mini-function
    let finalSumOfDigits = interanlSumDigits(num)
    
    // Run a loop that recurisvely calls the mini-function and updates the finalSumOfDigits until it's a single digit answer
    while(finalSumOfDigits >= 10) {
        finalSumOfDigits = interanlSumDigits(finalSumOfDigits)
    }

    // Return that finalSumOfDigits when it's a single digit answer
    return finalSumOfDigits
};
// =================================================
console.log(addDigits(38)) // returns 2
console.log(addDigits(2568)) // returns 3
// =================================================
// RESULTS:
// Runtime: 96 ms, faster than 74.49%
// Memory Usage: 39.9 MB, less than 84.12%
