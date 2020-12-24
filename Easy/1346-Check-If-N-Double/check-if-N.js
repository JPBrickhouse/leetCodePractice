// https://leetcode.com/problems/check-if-n-and-its-double-exist/
// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
// More formally check if there exists two indices i and j such that :
// - i != j
// - 0 <= i, j < arr.length
// - arr[i] == 2 * arr[j]
// ======================================================

// JPB Notes:

// First, sort the array, ascending
// NEED to sort out between positve and negative numbers

// FUTURE option to CUT DOWN the BRUTE FORCE
// Get the maximum number, divide by 2, call it the halfway number and keep that on file
// Go through the sorted array, starting at the smallest
// You can stop after getting to/past the halfway number
// Still brute force, but with some reasonable checks to stop partway through

// ======================================================
var checkIfExist = function (arr) {
    arr.sort((a, b) => a - b)

    // Splitting the sorted array into two arrays for positive and negative numbers
    // ("Smallest" to "largest": 1, 2, 3 and -1, -2, -3, etc.)
    let negNumbers = [];
    let posNumbers = [];
    let zeroNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negNumbers.unshift(Math.abs(arr[i])) // unshifting the absolute value of the negative number to the beginning of the array
        }
        else if (arr[i] > 0) {
            posNumbers.push(arr[i]) // pushing positive number itself to the end of the array
        }
        else {
            zeroNumbers.push(arr[i])
        }
    }

    // These three loops are the same
    // The numbers by going through the array
    for (let i = 0; i < posNumbers.length - 1; i++) {
        let currentNumber = posNumbers[i];
        for (let j = i + 1; j < posNumbers.length; j++) {
            let comparisonNumber = posNumbers[j]
            if (currentNumber * 2 === comparisonNumber) {
                return true;
            }
        }
    }
    for (let i = 0; i < negNumbers.length - 1; i++) {
        let currentNumber = negNumbers[i];
        for (let j = i + 1; j < negNumbers.length; j++) {
            let comparisonNumber = negNumbers[j]
            if (currentNumber * 2 === comparisonNumber) {
                return true;
            }
        }
    }
    for (let i = 0; i < zeroNumbers.length - 1; i++) {
        let currentNumber = zeroNumbers[i];
        for (let j = i + 1; j < zeroNumbers.length; j++) {
            let comparisonNumber = zeroNumbers[j]
            if (currentNumber * 2 === comparisonNumber) {
                return true;
            }
        }
    }
    // returning false otherwise
    return false;
};


console.log(checkIfExist([10, 2, 5, 3])) // true, N = 10 is the double of M = 5, that is, 10 = 2 * 5.
console.log(checkIfExist([7, 1, 14, 11])) // true, N = 14 is the double of M = 7, that is, 14 = 2 * 7.
console.log(checkIfExist([3, 1, 7, 11])) // false, In this case does not exist N and M, such that N = 2 * M.
console.log(checkIfExist([2, 5, -5, -10])) // true, N = -10 is the double of M = -5, that is, -10 = 2 * -5.
console.log(checkIfExist([-10, -9, -8, -7, -4])) // true, N = -8 is the double of M = -4, that is, -8 = 2 * -4.
console.log(checkIfExist([0, 0]))// true, N = 0 is the double of M = 0, that is, 0 = 2 * 0.
