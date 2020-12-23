// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function (nums, target) {

    let outputArray = []

    for (let i=0; i < nums.length - 1; i++) {
        
        let firstNum = nums[i]

        for (let j=i+1; j < nums.length; j++) {
            let secondNum = nums[j]

            if(firstNum + secondNum === target) {
                outputArray.push(i)
                outputArray.push(j)
            }
        }
    }    

    return outputArray;
};


console.log(twoSum([2,7,11,15], 9)) // output [0,1]
console.log(twoSum([3,2,4], 6)) // output [1,2]
console.log(twoSum([3,3], 6)) // output [0,1]