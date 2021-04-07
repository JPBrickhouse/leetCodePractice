// https://leetcode.com/problems/valid-palindrome/
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// --------------------------------------------------------------------------------
// NOTES:
// This solution checks the two outermost letters, working inwards
// --------------------------------------------------------------------------------
var isPalindrome = function (s) {
    const alphanumeric = /[A-Za-z0-9]/;
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        while (!alphanumeric.test(s[i]) && i < j) {
            i++
        }
        while (!alphanumeric.test(s[j]) && i < j) {
            j--
        }
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};
// --------------------------------------------------------------------------------
console.log(isPalindrome("A man, a plan, a canal: Panama")) // returns true
console.log(isPalindrome("race a car")) // returns false
// --------------------------------------------------------------------------------
// RESULTS:
// Runtime: 84 ms, faster than 96.78%
// Memory Usage: 41.4 MB, less than 68.40%