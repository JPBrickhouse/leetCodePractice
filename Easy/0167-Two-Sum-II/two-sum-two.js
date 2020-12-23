// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
// Note:
// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.


// JPB Notes:
// Functionally, my initial approach it correct: REMOVE numbers that exceed the target
// If the target is positive, "exceeds" comes after the target
// If the target is negative, "exceeds" comes before the target
// HOWEVER, doing that with the negative numbers results in the "front" of the array changing...
// which results in different index values. This scenario would flag as incorrect.
// Therefore, I can create some efficiency, but not complete efficiency.

var twoSum = function (numbers, target) {
    // -----------------
    let outputArray = []
    // -----------------
    // If the target is greater than zero, splicing off parts of the array that come AFTER the target
    if (target > 0) {
        let spliceIndex = null;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > target) {
                spliceIndex = i;
                break;
            }
        }

        if (spliceIndex) {
            // Splices everything, STARTING at the spliceIndex
            // (That's because there is no end value)
            numbers.splice(spliceIndex)
        }
    }
    // -----------------
    // // If the target is less than zero, splicing off parts of the array that come BEFORE the target
    // if (target < 0) {
    //     let spliceIndex = null;

    //     for (let i = numbers.length - 1; i >= 0; i--) {
            
    //         console.log(i)
            
    //         if (numbers[i] < target) {
    //             spliceIndex = i;
    //             break;
    //         }
    //     }

    //     if (spliceIndex) {
    //         // Splices everything UP TO the spliceIndex
    //         // 0 is the starting index
    //         // (In this case, spliceIndex + 1 serves as the "number of elements to remove")
    //         numbers.splice(0, spliceIndex + 1)
    //     }
    // }
    // -----------------
    for (let j = 0; j < numbers.length; j++) {
        let firstNum = numbers[j]

        for (let k = j + 1; k < numbers.length; k++) {
            let secondNum = numbers[k]

            if (firstNum + secondNum === target) {
                // Per the problem statement, the returned answers are NOT zero-based. Therefore...
                // the 0th index is the 1st number, so return 1
                // the 2nd index is the 3rd number, so return 3
                // etc.
                outputArray.push(j + 1)
                outputArray.push(k + 1)
                break;
            }
        }
    }
    // -----------------
    return outputArray;
    // -----------------
};

console.log(twoSum([2, 7, 11, 15], 9)) // output [1,2]
console.log(twoSum([2, 3, 21, 27], 24)) // output [2,3]
console.log(twoSum([2, 3, 4], 6)) // output [1,3]
console.log(twoSum([-1, 0], -1)) // output [1,2]
console.log(twoSum([-5, -4, -1, 0], -1)) // output [3,4]