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
        // So increment the count
        else {
            objectOfNumbers[nums[i]]++;
        }
    }

    // Go through the object
    for (const key in objectOfNumbers) {
        // If any of the keys has a value greater than 1, return true
        // (That means a duplicate exists!)
        if(objectOfNumbers[key] > 1) {
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
// Runtime: 104 ms, faster than 26.69%
// Memory Usage: 47.7 MB, less than 5.83%