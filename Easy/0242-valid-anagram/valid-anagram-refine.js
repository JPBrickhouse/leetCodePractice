// https://leetcode.com/problems/valid-anagram/
// Given two strings s and t , write a function to determine if t is an anagram of s.
// ===================================================================================
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let charMapS = genCharMap(s);
    let charMapT = genCharMap(t);

    for (let char of Object.getOwnPropertyNames(charMapS)) {
        if (charMapS[char] !== charMapT[char]) {
            return false;
        }
    }

    return true;
};

function genCharMap(str) {
    str = str.split("");
    let charMap = {};

    str.forEach(char => {
        if (charMap[char] === undefined) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    });

    return charMap;
}
// ===================================================================================
console.log(isAnagram("anagram", "nagaram")) // returns true
console.log(isAnagram("rat", "car")) // returns false
// ===================================================================================
// RESULTS:
// Runtime: 88 ms, faster than 90.79%
// Memory Usage: 40.6 MB, less than 72.95%
// 
// This method is GREAT, as it compares key values in two objects / hash tables
// First, create hash tables for each string
// The hash table keys correspond to the letters
// The has table values correspond to the counts (how many times do those letters appear)
// Then, we compare the hash tables
// Find the matching keys and compare values
// If that values don't match, that means they aren't anagrams!