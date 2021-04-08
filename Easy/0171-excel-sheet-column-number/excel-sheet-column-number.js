// https://leetcode.com/problems/excel-sheet-column-number/
// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

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
// NOTES:
// Essentially, just counting in base 26
// --------------------------------------------------------------------------------
var titleToNumber = function (columnTitle) {

    let numCache = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26
    };

    let stringAsArray = columnTitle.split("");

    let columnNumber = 0;
    let digitExponent = 0;
    while (stringAsArray.length > 0) {
        let currentLetter = stringAsArray.pop();
        let numberValue = numCache[currentLetter];
        columnNumber += (numberValue * Math.pow(26,digitExponent));        
        digitExponent++;
    }

    return columnNumber;
};
// --------------------------------------------------------------------------------
console.log(titleToNumber("A")) // returns 1
console.log(titleToNumber("AB")) // returns 28
console.log(titleToNumber("ZY")) // returns 701
console.log(titleToNumber("FXSHRXW")) // returns 2147483647
// --------------------------------------------------------------------------------
// RESULTS:
// Runtime: 92 ms, faster than 85.45%
// Memory Usage: 40.1 MB, less than 65.79%