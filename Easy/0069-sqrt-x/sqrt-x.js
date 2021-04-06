// https://leetcode.com/problems/sqrtx/
// Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are TRUNCATED, and only THE INTEGER PART of the result is returned.
// --------------------------------------------------------------------------------
var mySqrt = function (x) {
    return Math.floor(Math.sqrt(x));
};
// --------------------------------------------------------------------------------
console.log(mySqrt(4)) // returns 2
console.log(mySqrt(8)) // returns 2 (The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned)
// --------------------------------------------------------------------------------
// RESULTS:
// Runtime: 88 ms, faster than 94.14%
// Memory Usage: 40.2 MB, less than 30.89%
