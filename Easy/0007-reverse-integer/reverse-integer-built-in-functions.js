// https://leetcode.com/problems/reverse-integer/
// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// -------------------------------------------------------------------

// REVERSE and USE built in libraries to convert number to string (then array) and back again

// -------------------------------------------------------------------
var reverse = function (x) {
    const limit = 2147483648;
    let result = parseInt(String(Math.abs(x)).split("").reverse().join(""));
    let negativity = x > 0 ? 1 : -1;
    return result > limit ? 0 : result * negativity;
}
// -------------------------------------------------------------------
console.log(reverse(123)) // returns -321
console.log(reverse(-123)) // returns 321
console.log(reverse(120)) // returns 21
console.log(reverse(0)) // returns 0
console.log(reverse(1534236469)) // returns 0 (because the reverse would be greater than 2^31)
// -------------------------------------------------------------------
// RESULTS:
// Runtime: 96 ms, faster than 77.81%
// Memory Usage: 40.1 MB, less than 80.07%
