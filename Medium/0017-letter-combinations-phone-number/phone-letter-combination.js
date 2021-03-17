// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].
// -------------------------------------------------------------------
// NOTES:
// Solution assisted by the following article: 
// https://duncan-mcardle.medium.com/leetcode-problem-17-letter-combinations-of-a-phone-number-javascript-35f349209700
// "What we do is that we take the digits passed in, find out all the possible combinations for the first digit,
// and then call the function again on the remaining digits. Each time, we pass in all combinations found so far,
// which means that by the end, we have an array of all possible combinations."

// -------------------------------------------------------------------
var letterCombinations = function (digits) {
    // Initialize the numberCache, corresponding to letters
    let mapOfNumbers = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };

    // Return early if no digits were supplied
    if (!digits.length) {
        return [];
    }

    // The getLetterCombinations function, which recursively calls itself
    function getLetterCombinations(digits, previousCombinations) {
        // Initialise an array to store the possibilties for this digit
        let newPossibilities = [];

        // Loop through the previous iteration's combinations
        for (let previousCombination of previousCombinations) {
            // Loop through the possible letters for this number
            for (let possibleLetter of mapOfNumbers[digits[0]]) {
                // Add a combination of the previous set with the current letters to the array
                newPossibilities.push(
                    previousCombination.concat(possibleLetter)
                );
            }
        }

        // If there are more digits, recursively run the function again. Otherwise, return the combinations
        return digits.length > 1 ? getLetterCombinations(digits.slice(1), newPossibilities) : newPossibilities;
    }

    // return the result from the getLetterCombinations function, which gets recursively called
    return getLetterCombinations(digits.toString(), ['']);
};
// -------------------------------------------------------------------
console.log(letterCombinations("23"))
console.log(letterCombinations(""))
console.log(letterCombinations("2"))
console.log(letterCombinations("2345"))
// -------------------------------------------------------------------
// RESULTS:
// Runtime: 80 ms, faster than 48.98% of JavaScript online submissions for Letter Combinations of a Phone Number.
// Memory Usage: 38.5 MB, less than 74.88% of JavaScript online submissions for Letter Combinations of a Phone Number.
