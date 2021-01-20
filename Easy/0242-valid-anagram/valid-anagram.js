// https://leetcode.com/problems/valid-anagram/
// Given two strings s and t , write a function to determine if t is an anagram of s.
// ===================================================================================
var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false
    }

    let string1 = s.split("")
    let string2 = t.split("")

    for (let i = 0; i < string1.length; i++) {
        let charIndex = string2.indexOf(string1[i])
        if (charIndex === -1) {
            return false
        }
        else {
            string2.splice(charIndex, 1)
        }
    }

    return true;
};
// ===================================================================================
console.log(isAnagram("anagram", "nagaram")) // returns true
console.log(isAnagram("rat", "car")) // returns false
// ===================================================================================
// RESULTS:
// 
// Runtime: 1344 ms, faster than 5.02%
// Memory Usage: 44.3 MB, less than 30.65%
// 
// This answer, while correct, is SUPER slow