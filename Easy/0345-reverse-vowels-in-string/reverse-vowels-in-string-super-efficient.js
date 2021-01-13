// https://leetcode.com/problems/reverse-vowels-of-a-string/
// Write a function that takes a string as input and reverse only the vowels of a string.
// ==================================================================
var reverseVowels = function (s) {

    const vowels = s.match(/[aeiou]/ig);
    return s.replace(/[aeiou]/ig, () => vowels.pop());

};
// ==================================================================
console.log(reverseVowels("hello")) // returns "holle"
console.log(reverseVowels("leetcode")) // returns "leotcede"
// ==================================================================
