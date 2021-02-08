// https://leetcode.com/problems/length-of-last-word/
// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
// A word is a maximal substring consisting of non-space characters only.
// 1 <= s.length <= 10^4
// s consists of only English letters and spaces ' '
// ========================================================================
var lengthOfLastWord = function (s) {
    // Split the string into an array using spaces " " as the separator
    let arrayOfWords = s.split(" ");

    // Identify the final word
    let finalWord = arrayOfWords[arrayOfWords.length - 1];

    // If the final word is a zero character string...
    if (finalWord === "") {

        // Get the final index of the arrayOfWords
        let i = arrayOfWords.length - 1;
        
        // Work back to front through the array
        // If you encounter a non-zero character string, that's the final word!
        while (finalWord === "" && i >= 0) {
            let currentWord = arrayOfWords[i];
            if(currentWord !== "") {
                finalWord = currentWord;
            }
            i--;
        }   
    }

    // return the length of the final word
    return finalWord.length;
};
// ========================================================================
console.log(lengthOfLastWord("Hello World")) // returns 5
console.log(lengthOfLastWord(" ")) // returns 0
console.log(lengthOfLastWord("a ")) // returns 1
console.log(lengthOfLastWord("b   a    ")) // returns 1
// ========================================================================
// RESULTS:
// Runtime: 68 ms, faster than 97.42%
// Memory Usage: 38.7 MB, less than 30.23%