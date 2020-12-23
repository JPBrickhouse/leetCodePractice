// https://leetcode.com/problems/non-decreasing-array/
// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
// ----------------------------------------------------------------------------------------------------------------------------
var checkPossibility = function (nums) {

    // Initialize problemIndex as null;
    let problemIndex = null;

    // Go through the entire array and look for a problemIndex
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {

            // if problemIndex is not null, that means that problemIndex has been found before
            // As such, return false, because you can't have two or more instances where nums[i] > nums[i+1]
            if (problemIndex !== null) {
                return false;
            }
            // otherwise, set the problemIndex equal to the current index, which is i
            else {
                problemIndex = i;
            }
        }
    }

    // If we've arrived at this step, that means ZERO or ONE problemIndex has been found:

    // If the problemIndex is null (aka, not "found" / non-existant)...
    // That means it's ascending already, so return true!
    // If the problemIndex is 0 or the problemIndex is the second-to-last index...
    // These are fixable within one move by default, so return true!
    if (problemIndex === null || problemIndex === 0 || problemIndex === nums.length - 2) {
        return true;
    }
    // Otherwise...
    else {

        // the two conditions being checked are boolean expressions
        // if either of them is false, then return false
        // otherwise, return true
        return (
            // - We could change nums[problemIndex] to be between nums[problemIndex - 1] and nums[problemIndex + 1] if possible
            nums[problemIndex - 1] <= nums[problemIndex + 1]
            ||
            // - We could change nums[problemIndex] to be between nums[problemIndex] and nums[problemIndex + 2] if possible
            nums[problemIndex] <= nums[problemIndex + 2]
        )
    }
};

console.log(checkPossibility([4, 2, 3])) // true; you could modify the 4 to 1 to get a non-decreasing array
console.log(checkPossibility([4, 2, 1])) // false; you can't get a non-descreasing array
console.log(checkPossibility([1, 2, 4, 7, 25, 2])) // true; you could modify 2 to 26 to get a non-descreasing array
console.log(checkPossibility([1, 2, 4, 7, 25, 2, 6])) // false; you'd have to modify the 2 and the 6
console.log(checkPossibility([1, 2, 4, 17, 6, 7, 8])) // true; could modify the 17 to 5 to get a non-decreasing array
console.log(checkPossibility([1, 2, 1, 4, 5, 3, 7])) // false; you'd have to modify the 1 and the 3