// https://leetcode.com/problems/duplicate-zeros/

// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written.
// Do the above modifications to the input array in place, do not return anything from your function.
// ===================================================
// JPB Notes:
// Go through the array in ONE PASS
// Find the zeroes
// After the splice, increment the counter by 2
// (cause you need to skip over the new index / element that you just spliced in)
// At the end, "pop" (aka, remove the last element of the array) until you're back to the original length

var duplicateZeros = function (arr) {

    // Get the original length for record keeping
    let originalLength = arr.length

    // Step counter for the while loop
    let i = 0;

    // Keep going as long until the original length is exceeded
    while (i < originalLength) {
        // If you find a zero, splice in a new zero, then increment the counter by 2
        // (to skip over the new index / element that was just created)
        // Also, pop out the last element until you're back to the original length
        if (arr[i] === 0) {
            arr.splice(i, 0, 0) // splice at index i, delete nothing, add in "0" (as a number)
            arr.pop()
            i = i + 2
        }
        // Otherwise, just increment the counter (and do nothing else)
        else {
            i++
        }
    }

    console.log(arr)
};
// ===================================================
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])) // returns [1,0,0,2,3,0,0,4]
console.log(duplicateZeros([1, 2, 3])) // returns [1,2,3]
console.log(duplicateZeros([0, 0, 0, 1, 2, 3])) // returns [0,0,0,0,0,0]
// ===================================================
// Results:
// Runtime: 96 ms, faster than 38.46%
// Memory Usage: 40.6 MB, less than 29.31%