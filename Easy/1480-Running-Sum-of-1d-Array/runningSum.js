// https://leetcode.com/problems/running-sum-of-1d-array/
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

var runningSum = function(nums) {
    
    let sum = 0;
    let i = 0;
    let runSum = []

    while(i < nums.length) {
        let currentValue = nums[i];
        sum += currentValue
        runSum.push(sum);
        i++
    }

    return runSum;
};

console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1,1]))
console.log(runningSum([3,1,2,10,1]))