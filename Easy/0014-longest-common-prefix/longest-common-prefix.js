// https://leetcode.com/problems/longest-common-prefix/
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// --------------------------------------------------------------------------------
var longestCommonPrefix = function (strs) {

    // How many strings are being compared?
    let howManyStrings = strs.length;

    // Initialize the cache
    let cache = {};

    // The storeToCache function, which gets passed a string
    function storeToCache(str) {
        // go through the string
        // add the character to the cache
        // the character(s) will live in an array as the "value", affiliated with the "key" (the index) in which it appeared in the string(s)
        for (let i = 0; i < str.length; i++) {
            if (cache[i]) {
                cache[i].push(str[i]);
            }
            else {
                cache[i] = [str[i]];
            }
        }
    }

    // Go through the array of strings
    for (let i = 0; i < strs.length; i++) {
        let individualString = strs[i];
        storeToCache(individualString);
    }

    // Initialize a final string to return, consisting of the longest common prefix
    let commonPrefix = "";

    // Go through the cache
    for (const numIndex in cache) {
        // Get the "value" (an array of individual characters) corresponding to the "key" (the index number 0,1,2... etc.)
        let arrayOfCharacters = cache[numIndex];

        // If the length of the array is not equal to the number of strings being compared
        if (arrayOfCharacters.length !== howManyStrings) {
            return commonPrefix;
        }
        else {
            // Check to make sure that all the characters in the array are the same
            if (arrayOfCharacters.every((val, i, arr) => val === arr[0])) {
                // if they're all the same, add the character to the commonPrefix
                // NOTE: The concat() method is used to join two or more strings. // This method does not change the existing strings, but returns a new string containing the text of the joined strings.
                commonPrefix = commonPrefix.concat(arrayOfCharacters[0]);
            }
            else {
                // if they're not, return the commonPrefix
                return commonPrefix;
            }
        }
    };

    // Return the commonPrefix anyway at this point
    return commonPrefix;
};
// --------------------------------------------------------------------------------
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // returns "fl"
console.log(longestCommonPrefix(["racecar", "race"])); // returns "race"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // returns ""
// --------------------------------------------------------------------------------
// RESULTS:
// Runtime: 88 ms, faster than 53.18%
// Memory Usage: 40.7 MB, less than 23.13%
