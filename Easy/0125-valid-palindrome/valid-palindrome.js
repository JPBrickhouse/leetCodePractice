// https://leetcode.com/problems/valid-palindrome/
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// --------------------------------------------------------------------------------
var isPalindrome = function (s) {
    // initialize an array of the letters
    let stringAsArray = [];

    // Go through the string and remove non-alphanumeric characters
    for (let i = 0; i < s.length; i++) {
        if(s[i].match(/[a-zA-Z0-9]/g)) {
            stringAsArray.push(s[i].toLowerCase());
        }
    }

    // Joining the array back into a string
    let originalString = stringAsArray.join("")

    // Reversing the array, then joining that reversed array back into a string
    // NOTE: the .reverse() method is destructive - it changes the original array IN PLACE
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    let reversedString = stringAsArray.reverse().join("")

    // Checking if the reversed string is the same as the original
    if(originalString === reversedString) {
        return true;
    }
    else {
        return false;
    }
};
// --------------------------------------------------------------------------------
console.log(isPalindrome("A man, a plan, a canal: Panama")) // returns true
console.log(isPalindrome("race a car")) // returns false
// --------------------------------------------------------------------------------
// RESULTS:
// Runtime: 96 ms, faster than 63.10%
// Memory Usage: 49.9 MB, less than 5.04%