// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// JPB Notes:

// Possible alternative way to get number as array of the digits
// Count length of number
// Divide by 10^length
// Get that number, push to array
// Get the remainder
// Divide by 10^(length-1)
// Repeat, etc.

// ================================================================================

var subtractProductAndSum = function(n) {

    // Lots happening in one line
    // n is a number
    // Convert it to a string
    // Split that string ("" means no separation) into an array
    // Map over that array
    // With element of the array being mapped over...
    // parseInt that element to make it a number again
    // The resulting array (numsAsArray) has the individual digits as each element of the array

    numAsArray = n.toString().split("").map(element => parseInt(element))

    // Using the reduce function to get the product of the digits
    let digitProduct = numAsArray.reduce((accumulator,currentValue)=>{
        return accumulator * currentValue;
    })

    // Using the reduce function to get the sum of the digits
    let digitSum = numAsArray.reduce((accumulator,currentValue) => {
        return accumulator + currentValue;
    })

    return digitProduct - digitSum;
};

console.log(subtractProductAndSum(234))
// Output: 15 -- Product of digits = 2 * 3 * 4 = 24 -- Sum of digits = 2 + 3 + 4 = 9 -- Result = 24 - 9 = 15

console.log(subtractProductAndSum(4421))
// Output: 21 -- Product of digits = 4 * 4 * 2 * 1 = 32 -- Sum of digits = 4 + 4 + 2 + 1 = 11 -- Result = 32 - 11 = 21

// ================================================================================

// Results:
// Runtime: 80 ms, faster than 56.06% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
// Memory Usage: 39 MB, less than 10.85% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.