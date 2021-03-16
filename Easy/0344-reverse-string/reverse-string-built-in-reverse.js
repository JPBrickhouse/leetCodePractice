// https://leetcode.com/problems/reverse-string/
// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// You may assume all the characters consist of printable ascii characters.
// ================================================================
var reverseString = function(s) {
    return s.reverse();
};
// ================================================================
console.log(reverseString(["h","e","l","l","o"])) // returns ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])) // returns ["h","a","n","n","a","H"]
// ================================================================
// RESULTS:
// Runtime: 108 ms, faster than 82.00%
// Memory Usage: 45.2 MB, less than 97.61%