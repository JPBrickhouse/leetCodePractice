// https://leetcode.com/problems/palindrome-number/
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
// -------------------------------------------------------------------

// Similar to 0007 - Reverse an Integer
// Using a modified version of the "number" solution (aka, not converting it to a string)

// -------------------------------------------------------------------
var isPalindrome = function (x) {
    // Need a variable to store the original number, since it gets modified otherwise
    let originalNum = x;
    
    // If x is negative, then it cannot be a palindrome
    if (x < 0) {
        return false;
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
    
    // 2^31 is the limit, so numbers can't go outside this range
    let limit = 2147483648;

    // If the "flipped" result exceeds the limit, return false
    if(result < limit) {
        // If the "flipped" result equals the original number, it's a palindrome
        if(result === originalNum) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};
// -------------------------------------------------------------------
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(-101))
console.log(isPalindrome(1534236469))
// -------------------------------------------------------------------
// RESULTS:
// Runtime: 188 ms, faster than 99.18%
// Memory Usage: 48.7 MB, less than 61.63%
