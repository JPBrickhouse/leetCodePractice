// https://leetcode.com/problems/single-number/
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
// ===============================================
var singleNumber = function(nums) {
    if(nums.length === 1) {
        return nums[0]
    }
    else {

        let cache = {};
        
        for (let i=0; i<nums.length; i++) {
            if(!cache[nums[i]]) {
                cache[nums[i]] = 1
            }
            else {
                cache[nums[i]]++
            }
        }

        for (key in cache) {
            if(cache[key] === 1) {
                return key
            }
        }
    }
};
// ===============================================
console.log(singleNumber([2,2,1])) // returns 1
console.log(singleNumber([4,1,2,1,2])) // returns 4
console.log(singleNumber([1])) // returns 1
// ===============================================
// RESULTS:
// Runtime: 192 ms, faster than 17.54%
// Memory Usage: 43.7 MB, less than 36.51%