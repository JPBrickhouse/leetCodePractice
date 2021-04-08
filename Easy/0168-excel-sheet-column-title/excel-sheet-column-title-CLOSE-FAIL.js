// NOTES:

// THIS CAME CLOSE - BUT, IT STRUGGLES WITH "Z"

// KEEPING FOR REFERENCE, JUST IN CASE

// --------------------------------------------------------------------------------
// https://leetcode.com/problems/excel-sheet-column-title/
// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

// --------------------------------------------------------------------------------
var convertToTitle = function (columnNumber) {

    // Cache of values, with keys being numbers, and corresponding values being letters
    let letterCache = {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F",
        7: "G",
        8: "H",
        9: "I",
        10: "J",
        11: "K",
        12: "L",
        13: "M",
        14: "N",
        15: "O",
        16: "P",
        17: "Q",
        18: "R",
        19: "S",
        20: "T",
        21: "U",
        22: "V",
        23: "W",
        24: "X",
        25: "Y",
        26: "Z"
    };

    // An internal function that will computer base 26 math
    function baseTwentySixMath(remainingNumber, digitExponent) {

        for (let i = 1; i <= 26; i++) {

            // console.log(remainingNumber, digitExponent, i)

            let currentNumber = i * Math.pow(26, digitExponent);
            let previousNumber = (i - 1) * Math.pow(26, digitExponent);
        
            if (currentNumber > remainingNumber) {
                let currentLetter = letterCache[i - 1];
                if (currentLetter) {
                    finalArrayOfCharacters.push(currentLetter);
                }
                remainingNumber -= previousNumber;
                break;
            }
        }

        return remainingNumber;
    }

    // Initializing values
    let remainingNumber = columnNumber;
    let finalArrayOfCharacters = [];
    let digitExponent = 6;

    // Call the internal base 26 math function with a while loop
    while (remainingNumber > 0 && digitExponent >= 0) {
        remainingNumber = baseTwentySixMath(remainingNumber, digitExponent);
        digitExponent--
    }

    // Return the final array of characters as a string
    return finalArrayOfCharacters.join("");
};
// --------------------------------------------------------------------------------
console.log(convertToTitle(1)) // returns A
console.log(convertToTitle(26)) // returns Z <-- MY CODE DOESN'T RETURN CORRECTLY
console.log(convertToTitle(28)) // returns AB
console.log(convertToTitle(51)) // returns AY
console.log(convertToTitle(52)) // returns AZ <-- MY CODE DOESN'T RETURN CORRECTLY
console.log(convertToTitle(80)) // returns CB
console.log(convertToTitle(676)) // returns YZ <-- MY CODE DOESN'T RETURN CORRECTLY
console.log(convertToTitle(701)) // returns ZY <-- MY CODE DOESN'T RETURN CORRECTLY
console.log(convertToTitle(702)) // returns ZZ <-- MY CODE DOESN'T RETURN CORRECTLY
console.log(convertToTitle(705)) // returns AAC
console.log(convertToTitle(2147483647)) // returns FXSHRXW
// --------------------------------------------------------------------------------
// RESULTS:
// 