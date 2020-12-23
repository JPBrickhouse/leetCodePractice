// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
// Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.
// Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

var canMakeArithmeticProgression = function (arr) {
    // Sorting the array in ascending order
    arr.sort((a, b) => a - b)

    // Set the difference to corespond to the arithmetic sequence
    let setDifference = Math.abs(arr[0] - arr[1])

    for (let i = 0; i < arr.length; i++) {

        // Make sure you can compare the final two values
        if(arr[i+1]) {
   
            // Get the current difference
            let currentDifference = Math.abs(arr[i] - arr[i + 1])
            
            // If the current difference doesn't match the set difference
            // Then it's not an arithmetic sequence
            if (currentDifference !== setDifference) {
                return false;
            }
        }
    }

    return true;
};



console.log(canMakeArithmeticProgression([3, 5, 1])); // true
console.log(canMakeArithmeticProgression([2, 4, 1])); // false
console.log(canMakeArithmeticProgression([1, 2, 3, 4, 6])); // false
console.log(canMakeArithmeticProgression([6, 4, 2])); // true