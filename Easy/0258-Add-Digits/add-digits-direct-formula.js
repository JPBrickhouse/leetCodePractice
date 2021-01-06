// https://leetcode.com/problems/add-digits/
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
// Follow up: Could you do it without any loop/recursion in O(1) runtime?

// With assistance from:
// https://stackoverflow.com/questions/38334652/sum-all-the-digits-of-a-number-javascript
// https://en.wikipedia.org/wiki/Digital_root

// DIRECT FORMULA BELOW:
// =================================================
var addDigits = function (num) {

    if (num === 0) {
        return 0;
    }
    else {
        return ((num - 1) % 9) + 1;
    }
}
// =================================================
console.log(addDigits(38)) // returns 2
console.log(addDigits(2568)) // returns 3
// =================================================
// RESULTS:
// Runtime: 96 ms, faster than 74.62%
// Memory Usage: 40.3 MB, less than 42.08%