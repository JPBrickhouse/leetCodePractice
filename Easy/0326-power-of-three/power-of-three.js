// https://leetcode.com/problems/power-of-three/
// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n === 3^x.
// Constraints: -2^31 <= n <= 2^31 - 1
// ===========================================================================
// JPB Notes:

// Solution is similar to power-of-two...

// Rationale for choosing i<=20 for my limit in the loop:
// 3^19 = 1162261467
// 2^31 = 2147483648
// 3^20 = 3486784401

// Follow up: Could you do it without using any loop / recursion?
// ===========================================================================
var isPowerOfThree = function(n) {

    if(n < 0) {
        return false;
    }

    else if(n === 1) {
        return true;
    }

    else if (n % 3 !==0) {
        return false
    }

    else {
        for (let i=1; i<=20; i++) {
            if(n === Math.pow(3,i)) {
                return true;
            }
        }
        return false;
    }
};
// ===========================================================================
console.log(isPowerOfThree(27)) // true
console.log(isPowerOfThree(0)) // false
console.log(isPowerOfThree(9)) // true
console.log(isPowerOfThree(45)) // false
// ===========================================================================
// RESULTS:
// Runtime: 372 ms, faster than 9.99%
// Memory Usage: 49.7 MB, less than 21.11%