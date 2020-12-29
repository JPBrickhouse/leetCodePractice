// https://leetcode.com/problems/power-of-two/
// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == (2)^x.
// ===========================================================================
// First, check if it's positive or negative
// If negative, return false -- can't make a negative number with (2)^x

// Then, check if it's 1
// (2)^0 = 1

// Then, check if it's odd
// (Odd numbers can't be powers of two)
// If odd, return false
// If even, continue...

// Then, loop through all possible values of (2)^i, with i from 1 to 31
// If (2)^i equals n, return true
// If not, return false
// ===========================================================================
var isPowerOfTwo = function (n) {

    if (n <= 0) {
        return false;
    }

    if (n === 1) {
        return true;
    }

    else if (n % 2 !== 0) {
        return false;
    }

    else {
        for (let i=1; i<=31; i++) {
            if(n === Math.pow(2,i)) {
                return true;
            }
        }
        return false;
    }
};
// ===========================================================================
console.log(isPowerOfTwo(2)) // returns true, (2)^1
console.log(isPowerOfTwo(1073741824)) // returns true, (2)^30
// ===========================================================================
// RESULTS:
// Runtime: 92 ms, faster than 83.16%
// Memory Usage: 40.3 MB, less than 9.38%