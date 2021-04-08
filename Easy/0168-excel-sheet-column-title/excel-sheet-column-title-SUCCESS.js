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
// NOTES:
// Counting in base 26, but reverse
// --------------------------------------------------------------------------------
var convertToTitle = function (columnNumber) {

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

    var num = columnNumber;
    var tmp = 0;
    var res = '';
    while (num > 0) {
        tmp = num % 26;
        if (tmp === 0) {
            tmp = 26;
        }
        res = letterCache[tmp] + res;
        num = (num - tmp) / 26;
    }
    return res;
};
// --------------------------------------------------------------------------------
console.log(convertToTitle(1)) // returns A
console.log(convertToTitle(26)) // returns Z
console.log(convertToTitle(28)) // returns AB
console.log(convertToTitle(51)) // returns AY
console.log(convertToTitle(52)) // returns AZ
console.log(convertToTitle(80)) // returns CB
console.log(convertToTitle(676)) // returns YZ
console.log(convertToTitle(701)) // returns ZY
console.log(convertToTitle(702)) // returns ZZ
console.log(convertToTitle(705)) // returns AAC
console.log(convertToTitle(2147483647)) // returns FXSHRXW
// --------------------------------------------------------------------------------
// RESULTS:
// Runtime: 76 ms, faster than 65.96%
// Memory Usage: 38.4 MB, less than 47.07%