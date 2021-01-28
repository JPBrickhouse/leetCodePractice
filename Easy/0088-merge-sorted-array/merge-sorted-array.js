// https://leetcode.com/problems/merge-sorted-array/
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.
// DO NOT RETURN ANYTHING - MODIFY nums1 in-place instead

// Constraints:
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[i] <= 109
// ============================================================
// JPB Notes:
// nums1 always has a greater length than nums2
// ============================================================
var merge = function (nums1, m, nums2, n) {

    // Remove all the zeroes (if any) from the end of nums1
    let extraZeroes = nums1.length - m;
    let k = 1;
    while (k <= extraZeroes) {
        nums1.pop()
        k++
    }

    let i = 0; // counter corresponding to nums1
    let j = 0; // counter corresponding to nums2

    // Go through nums1 and num2 and compare
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        }
        else if (nums1[i] >= nums2[j]) {
            nums1.splice(i, 0, nums2[j]);
            j++;
        }
    }

    // If there are any remaining numbers in nums2 that need to be included
    while (j < nums2.length) {
        nums1.splice(i, 0, nums2[j]);
        i++;
        j++;
    }

    return nums1;
};
// ============================================================
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) // returns [1,2,2,3,5,6,]
console.log(merge([1], 1, [], 0)) // returns [1]
console.log(merge([5, 6, 9, 0, 0], 3, [1, 8], 2)) // returns [1,5,6,8,9]
console.log(merge([0], 0, [1], 1)) // returns [1]
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)) // returns [-1,0,0,1,2,2,3,3,3]
// ============================================================
// RESULTS:
// Runtime: 76 ms, faster than 85.13%
// Memory Usage: 38.9 MB, less than 21.90%