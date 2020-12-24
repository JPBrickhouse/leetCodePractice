// https://leetcode.com/problems/check-if-n-and-its-double-exist/
// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
// More formally check if there exists two indices i and j such that :
// - i != j
// - 0 <= i, j < arr.length
// - arr[i] == 2 * arr[j]
// ======================================================
var checkIfExist = function(arr) {
    const cache = new Map();
    
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      
      if (cache.has(num * 2) || (num % 2 === 0 && cache.has(num / 2))) {
        return true;
      }
      
      // cache[num] = true;
      cache.set(num, true);
    }
    
    return false;
  };

console.log(checkIfExist([10, 2, 5, 3])) // true, N = 10 is the double of M = 5, that is, 10 = 2 * 5.
console.log(checkIfExist([7, 1, 14, 11])) // true, N = 14 is the double of M = 7, that is, 14 = 2 * 7.
console.log(checkIfExist([3, 1, 7, 11])) // false, In this case does not exist N and M, such that N = 2 * M.
console.log(checkIfExist([2, 5, -5, -10])) // true, N = -10 is the double of M = -5, that is, -10 = 2 * -5.
console.log(checkIfExist([-10, -9, -8, -7, -4])) // true, N = -8 is the double of M = -4, that is, -8 = 2 * -4.
console.log(checkIfExist([0, 0]))// true, N = 0 is the double of M = 0, that is, 0 = 2 * 0.
