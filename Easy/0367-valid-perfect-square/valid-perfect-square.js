// https://leetcode.com/problems/valid-perfect-square/
// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Follow up: Do not use any built-in library function such as sqrt.
// --------------------------------------------------------------------------------
var isPerfectSquare = function (num) {
    return Math.floor(Math.sqrt(num)) === Math.sqrt(num) ? true : false
};
// --------------------------------------------------------------------------------
console.log(isPerfectSquare(16)) // returns true
console.log(isPerfectSquare(14)) // returns false
// --------------------------------------------------------------------------------
// RESULTS:
// Runtime: 76 ms, faster than 80.64%
// Memory Usage: 38.6 MB, less than 31.70%
