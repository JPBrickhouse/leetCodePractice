// https://leetcode.com/problems/happy-number/
// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// - Starting with any positive integer, replace the number by the sum of the squares of its digits.
// - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// - Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.
// ======================================================

// JPB Notes:

// Because it will loop endlessly, figure out a way to track and break out? Maybe set a limit of 1000 iterations?
// BUT ALSO, need another idea...

// From a test run, I noticed that a scenario existed where the following occured after a while:
// 4 --> 16 --> 37 --> 58 --> 89 --> 145 --> 42 --> 20 --> 4
// Because the same number appeared, that means it was caught in the loop
// Therefore, create an object!
// Store each number discovered as a key (and the value can just be 1 or something)
// Each time, check to see if the newNum exists in the object
// If it exists, that means it has been found before, and will therefore loop back to it eventually
// As such, return false!

// ======================================================
var isHappy = function (n) {

    // Conver the number into a string, then into an array (of the digits)
    let oldNum = n.toString().split("")

    // Create an object for comparisons
    let numberStorage = {}

    // Create a counter and limit the loop to 1000, just in case
    let i = 0;
    while (i < 1000) {

        // Initialize a newNum
        let newNum = 0

        // Go through the old number's digits (which are contained in an array)
        // Square them, and then add them to the newNum
        for (let j = 0; j < oldNum.length; j++) {
            let digitSquared = Math.pow(parseInt(oldNum[j]), 2);
            newNum += digitSquared;
        }

        // If the newNum (aka, the sum of the squared digits) equals 1, that means it's happy, so return true
        if (newNum === 1) {
            return true;
        }

        // Otherwise...
        else {

            // If the number already exists in the comparison object, that means we're looping forever, so return false
            if (numberStorage[newNum]) {
                return false;
            }
            // Otherwise...
            // - put the number in the comparison object
            // - turn the new number into the old number
            // - increement the counter
            else {
                numberStorage[newNum] = 1
                oldNum = newNum.toString().split("")
                i++
            }
        }
    }

    // If it's gotten to this point, it's been looping forever (and we forced it to break out), so return false
    return false;
};
// ======================================================
console.log(isHappy(19)) // true
console.log(isHappy(2)) // false
// ======================================================
// RESULTS:
// Runtime: 92 ms, faster than 51.87%
// Memory Usage: 40.8 MB, less than 31.88%

// Could have used .reduce to speed up the "add the sum of the squared digits" part
