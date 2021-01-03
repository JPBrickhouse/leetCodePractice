// https://leetcode.com/problems/contains-duplicate/
// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
// ==================================================================================

// JPB Notes:
// Create an object / hash table
// Key: number (what is the number value of the element in the array)
// Value: count

// At the end, quickly go through it...
// If the values are anything greater than 1, return true (that means there was a duplicate!)
// Otherwise, return false

// ==================================================================================
var containsDuplicate = function (nums) {

    // Initialize an empty object
    let objectOfNumbers = {};

    // Go through the array
    for (let i = 0; i < nums.length; i++) {
        // If the number doesn't exist as a key in the object...
        // Create the key and give it an initial value of 1
        if (!objectOfNumbers[nums[i]]) {
            objectOfNumbers[nums[i]] = 1;
        }
        // Otherwise, the number already exists as a key in objectOfNumbers...
        // Therefore, this means the number is a DUPLICATE
        // As such, return true
        else {
            return true;
        }
    }
    
    // Otherwise, return false
    return false;
};

// ==================================================================================
console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // true
// ==================================================================================
// RESULTS:
// Runtime: 96 ms, faster than 43.12%
// Memory Usage: 47.1 MB, less than 18.48%