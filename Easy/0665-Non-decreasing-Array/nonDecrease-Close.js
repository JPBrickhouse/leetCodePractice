// https://leetcode.com/problems/non-decreasing-array/
// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
// ----------------------------------------------------------------------------------------------------------------------------


// JPB Notes and ATTEMPT:

// Check if there are TWO or MORE instances where nums[i] > nums[i+1]

// Check if there are TWO or MORE instances where later numbers are lower than earlier numbers

var checkPossibility = function (nums) {

    let counter = 0;
    let i = 0;

    while (i < nums.length && counter < 2) {

        let currentValue = nums[i]
        let nextValue = nums[i + 1]

        if (currentValue > nextValue) {
            counter++
        }

        i++
    }

    if (counter === 2) {
        return false;
    }
    else {
        return true;
    }    
};

console.log(checkPossibility([4, 2, 3])) // true; you could modify the 4 to 1 to get a non-decreasing array
console.log(checkPossibility([4, 2, 1])) // false; you can't get a non-descreasing array
console.log(checkPossibility([1, 2, 4, 7, 25, 2])) // true; you could modify 2 to 26 to get a non-descreasing array
console.log(checkPossibility([1, 2, 4, 7, 25, 2, 6])) // false; you'd have to modify the 2 and the 6
console.log(checkPossibility([1, 2, 4, 17, 6, 7, 8])) // true; could modify the 17 to 5 to get a non-decreasing array
console.log(checkPossibility([1, 2, 1, 4, 5, 3, 7])) // false; you'd have to modify the 1 and the 3


// This solution iS CLOSE, but it misses a few edge cases

