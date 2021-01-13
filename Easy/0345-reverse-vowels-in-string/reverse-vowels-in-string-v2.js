// https://leetcode.com/problems/reverse-vowels-of-a-string/
// Write a function that takes a string as input and reverse only the vowels of a string.
// ==================================================================
var reverseVowels = function (s) {

    let storeIndexes = []
    let storeVowels = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u" || s[i] === "A" || s[i] === "E" || s[i] === "I" || s[i] === "O" || s[i] === "U") {
            storeIndexes.push(i)
            storeVowels.push(s[i])
        }
    }

    let stringArray = s.split("")

    let numberOfTimesToLoop = storeIndexes.length

    for (let j = 0; j < numberOfTimesToLoop; j++) {
        let indexReplace = storeIndexes.shift()
        let vowelReplace = storeVowels.pop()
        stringArray.splice(indexReplace,1,vowelReplace)
    }

    return stringArray.join("")
};
// ==================================================================
console.log(reverseVowels("hello")) // returns "holle"
console.log(reverseVowels("leetcode")) // returns "leotcede"
// ==================================================================
// RESULTS:
// Runtime: 180 ms, faster than 13.69%
// Memory Usage: 46.8 MB, less than 26.28%