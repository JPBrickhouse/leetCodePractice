// https://leetcode.com/problems/reverse-integer/
// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// -------------------------------------------------------------------

// REVERSE but WITHOUT converting to string (and then array) and then converting back

// -------------------------------------------------------------------
var reverse = function (x) {
    // 2^31 is the limit, so numbers can't go outside this range
    let limit = 2147483648;

    // Accounting for the possibility that x is negative
    let finalMult = 1;
    if (x < 0) {
        x = Math.abs(x);
        finalMult = -1;
    }

    // Reversing the number without converting to a string
    // (This expression only works for positive numbers)
    let digit = 0;
    let result = 0;
    while (x > 0) {
        digit = x % 10; // Get the right most digit --> 123 % 10 returns 3, since 123 / 10 is 12 with a remainder of 3
        result = (result * 10) + digit; // Build the result --> 123 --> 1230 + 4 --> 1234
        x = Math.floor(x / 10); // Revise x (the original number) --> Rounding down 123 / 10 means rounding down 12.3 to 12
    }

    // Returning the result
    return result > limit ? 0 : finalMult * result;
};
// -------------------------------------------------------------------
console.log(reverse(123)) // returns -321
console.log(reverse(-123)) // returns 321
console.log(reverse(120)) // returns 21
console.log(reverse(0)) // returns 0
console.log(reverse(1534236469)) // returns 0 (because the reverse would be greater than 2^31)
// -------------------------------------------------------------------
// RESULTS:
// Runtime: 108 ms, faster than 30.48%
// Memory Usage: 40.3 MB, less than 40.71%
