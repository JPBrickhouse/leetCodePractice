// https://leetcode.com/problems/reverse-vowels-of-a-string/
// Write a function that takes a string as input and reverse only the vowels of a string.
// ==================================================================
var reverseVowels = function (s) {

    let storageArray = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u" || s[i] === "A" || s[i] === "E" || s[i] === "I" || s[i] === "O" || s[i] === "U") {
            storageArray.push({ "vIndex": i, "vowel": s[i] });
        }
    }

    let stringArray = s.split("");

    let countUp = 0;
    let countDown = storageArray.length - 1;

    while(countUp < storageArray.length) {
        stringArray.splice(storageArray[countUp].vIndex,1,storageArray[countDown].vowel);
        countUp++;
        countDown--;
    }

    return stringArray.join("");
};
// ==================================================================
console.log(reverseVowels("hello")) // returns "holle"
console.log(reverseVowels("leetcode")) // returns "leotcede"
// ==================================================================
// RESULTS:
// Runtime: 112 ms, faster than 34.37%
// Memory Usage: 49.6 MB, less than 9.18%