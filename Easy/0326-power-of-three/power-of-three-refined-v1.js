// https://leetcode.com/problems/power-of-three/
// Refined version (MUCH faster), but still using a loop
// ===========================================================================
var isPowerOfThree = function (n) {
    // Gets in the inital cases out of the way first
    if (n <= 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }

    // THEN it runs a while loop...
    // Using the division assignment operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment
    // The division assignment operator (/=) divides a variable by the value of the right operand and assigns the result to the variable.
    // Examples:
    // a = 3 --> a /= 2 --> console.log(a) --> output 1.5
    // b = 5 --> b /= 5 --> console.log(b) --> output 1
    // Therefore, it keeps dividing n by 3, storing it as n
    // The while loop only runs when the remainder of n divided by 3 equals 0
    // Otherwise, it breaks out
    while (n % 3 === 0) {
        n /= 3;
    }

    // The final check is the return statement
    // Previously, during the while loop, if it got to 3 /= 3, it would store n=1
    // Therefore if n === 1, return true, because n is a power of three
    // Otherwise, if the loop breaks out, or the end result isn't 1, the return is false
    return n === 1;
};
// ===========================================================================
console.log(isPowerOfThree(27)) // true
console.log(isPowerOfThree(0)) // false
console.log(isPowerOfThree(9)) // true
console.log(isPowerOfThree(45)) // false
// ===========================================================================
// RESULTS:
// Runtime: 240 ms, faster than 87.97%
// Memory Usage: 49.5 MB, less than 40.64%
