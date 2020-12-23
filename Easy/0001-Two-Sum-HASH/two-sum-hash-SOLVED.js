// Two-sum problem, but using a HASH table

// One can think of an object as an associative array (a.k.a. map, dictionary, hash, lookup table).
// The keys in this array are the names of the object's properties.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

// KEY VALUE PAIRS

// This solution was worked out with help from: https://levelup.gitconnected.com/how-to-solve-two-sum-in-javascript-d1ebd9dfd3d3

// ========================================================
var twoSum = function (nums, target) {

    // Create a hashTable to store the numbers and their indexes
    let hashTable = {}

    // Loop through the nums array
    for (let i = 0; i < nums.length; i++) {

        // Establish the currentDifference between the curret element number and the target
        let currentDifference = target - nums[i]

        // Check both conditions...
        // - if the key of currentDifference exists in the hash table
        //   (aka, it's not undefined)
        // - if the value (aka, the index) associated with the key of currentDifference is the not equal to i
        //   (aka, it's not the same index... because you're not allowed to use the same element twice)
        if (hashTable[currentDifference] !== undefined && hashTable[currentDifference] !== i) {
            // If both of these are true...
            // Return i and hashTable[currentDifference]
            // These both correspond to the indexes where two sum values exist
            return [hashTable[currentDifference], i]
        }

        // Otherwise, create a key value pair in the hashTable for future use and comparison
        // the key will be nums[i], corresponding to the current element number
        // the value will be i, the index of the current element number
        else {
            hashTable[nums[i]] = i
        }
    }
};
// ========================================================
// Output order doesn't matter
console.log(twoSum([2, 7, 11, 15], 9)) // output [0,1]
console.log(twoSum([3, 2, 4], 6)) // output [1,2]
console.log(twoSum([3, 3], 6)) // output [0,1]