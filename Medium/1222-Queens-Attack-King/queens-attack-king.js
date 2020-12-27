// https://leetcode.com/problems/queens-that-can-attack-the-king/

// On an 8x8 chessboard, there can be multiple Black Queens and one White King.
// Given an array of integer coordinates queens that represents the positions of the Black Queens,
// and a pair of coordinates king that represent the position of the White King,
// return the coordinates of all the queens (in any order) that can attack the King.
// ======================================================================
// JPB notes:

// If the X coordinate OR the Y coordinate matches, that works

// If not, then check if the SLOPE is plus/minus 1
// (y2 - y1) / (x2 - x1) = plums/minus 1
// That works for the diagonal then

// BUT, the queens can block each other
// Therefore, a maximum of ONE per row, column, and diagonal in EACH of the 8 directions
// AND, if one is closer, then that supercedes one that is farther away

// Board looks like this, though (8 x 8 grid)
// First Number goes DOWN (y)
// Second Number goes RIGHT (x)
// [0,0] [0,1] [0,2]
// [1,0] [1,1] [1,2]
// [2,0] [2,1] [2,2]
// ======================================================================

var queensAttacktheKing = function (queens, king) {

    // Object to store / track the positions and directions
    let numAndTypeQueens = {}

    for (let i = 0; i < queens.length; i++) {
        let currentQueen = queens[i];

        // Queen position minus king position
        let xDiff = currentQueen[1] - king[1];
        let yDiff = currentQueen[0] - king[0];
        let slope = yDiff / xDiff;

        // EACH OF THESE IS THE SAME, ESSENTIALLY
        // Check if a queen matches a particular direction criteria
        // - If NOT, that is the example for that direction
        // - If SO, check if the NEW queen is closer for that direction
        //   - If not closer, nothing changes
        //   - If closer, the the NEW queen is now the example for that direction

        // Down Center
        if (xDiff === 0 && yDiff > 0) {
            if (!numAndTypeQueens["downCenter"]) {
                numAndTypeQueens["downCenter"] = currentQueen;
            }
            if (numAndTypeQueens["downCenter"]) {
                existYdiff = numAndTypeQueens["downCenter"][0] - king[0];
                if (Math.abs(yDiff) < Math.abs(existYdiff)) {
                    numAndTypeQueens["downCenter"] = currentQueen;
                }
            }
        }

        // Up Center
        if (xDiff === 0 && yDiff < 0) {
            if (!numAndTypeQueens["upCenter"]) {
                numAndTypeQueens["upCenter"] = currentQueen;
            }
            if (numAndTypeQueens["upCenter"]) {
                existYdiff = numAndTypeQueens["upCenter"][0] - king[0];
                if (Math.abs(yDiff) < Math.abs(existYdiff)) {
                    numAndTypeQueens["upCenter"] = currentQueen;
                }
            }
        }

        // Direct Left
        if (xDiff < 0 && yDiff === 0) {
            if (!numAndTypeQueens["directLeft"]) {
                numAndTypeQueens["directLeft"] = currentQueen;
            }
            if (numAndTypeQueens["directLeft"]) {
                existXdiff = numAndTypeQueens["directLeft"][1] - king[1];
                if (Math.abs(xDiff) < Math.abs(existXdiff)) {
                    numAndTypeQueens["directLeft"] = currentQueen;
                }
            }
        }

        // Direct Right
        if (xDiff > 0 && yDiff === 0) {
            if (!numAndTypeQueens["directRight"]) {
                numAndTypeQueens["directRight"] = currentQueen;
            }
            if (numAndTypeQueens["directRight"]) {
                existXdiff = numAndTypeQueens["directRight"][1] - king[1];
                if (Math.abs(xDiff) < Math.abs(existXdiff)) {
                    numAndTypeQueens["directRight"] = currentQueen;
                }
            }
        }

        // Up and Left
        if (xDiff < 0 && yDiff < 0 && slope === 1) {
            if (!numAndTypeQueens["upLeft"]) {
                numAndTypeQueens["upLeft"] = currentQueen;
            }
            if (numAndTypeQueens["upLeft"]) {
                existXdiff = numAndTypeQueens["upLeft"][1] - king[1];
                if (Math.abs(xDiff) < Math.abs(existXdiff)) {
                    numAndTypeQueens["upLeft"] = currentQueen;
                }
            }
        }

        // Up and Right
        if (xDiff > 0 && yDiff < 0 && slope === -1) {
            if (!numAndTypeQueens["upRight"]) {
                numAndTypeQueens["upRight"] = currentQueen;
            }
            if (numAndTypeQueens["upRight"]) {
                existXdiff = numAndTypeQueens["upRight"][1] - king[1];
                if (Math.abs(xDiff) < Math.abs(existXdiff)) {
                    numAndTypeQueens["upRight"] = currentQueen;
                }
            }
        }

        // Down and Left
        if (xDiff < 0 && yDiff > 0 && slope === -1) {
            if (!numAndTypeQueens["downLeft"]) {
                numAndTypeQueens["downLeft"] = currentQueen;
            }
            if (numAndTypeQueens["downLeft"]) {
                existXdiff = numAndTypeQueens["downLeft"][1] - king[1];
                if (Math.abs(xDiff) < Math.abs(existXdiff)) {
                    numAndTypeQueens["downLeft"] = currentQueen;
                }
            }
        }

        // Down and Right
        if (xDiff > 0 && yDiff > 0 && slope === 1) {
            if (!numAndTypeQueens["downRight"]) {
                numAndTypeQueens["downRight"] = currentQueen;
            }
            if (numAndTypeQueens["downRight"]) {
                existXdiff = numAndTypeQueens["downRight"][1] - king[1];
                if (Math.abs(xDiff) < Math.abs(existXdiff)) {
                    numAndTypeQueens["downRight"] = currentQueen;
                }
            }
        }
    }

    // Final array to store all the positions
    let finalArray =[];

    // Going through the object
    // for every "key" in the object...
    // pushing the value (associated with that key) into the finalArray
    for (const key in numAndTypeQueens) {
        finalArray.push(numAndTypeQueens[key]);
    }

    return finalArray;
};

// ======================================================================
let queens1 = [[0, 1], [1, 0], [4, 0], [0, 4], [3, 3], [2, 4]];
let king1 = [0, 0];
console.log(queensAttacktheKing(queens1, king1))
// Output: [[0,1],[1,0],[3,3]]

let queens2 = [[0, 0], [1, 1], [2, 2], [3, 4], [3, 5], [4, 4], [4, 5]];
let king2 = [3, 3];
console.log(queensAttacktheKing(queens2, king2))
// Output: [[2,2],[3,4],[4,4]]

let queens3 = [[5, 6], [7, 7], [2, 1], [0, 7], [1, 6], [5, 1], [3, 7], [0, 3], [4, 0], [1, 2], [6, 3], [5, 0], [0, 4], [2, 2], [1, 1], [6, 4], [5, 4], [0, 0], [2, 6], [4, 5], [5, 2], [1, 4], [7, 5], [2, 3], [0, 5], [4, 2], [1, 0], [2, 7], [0, 1], [4, 6], [6, 1], [0, 6], [4, 3], [1, 7]];
let king3 = [3, 4];
console.log(queensAttacktheKing(queens3, king3))
// Output: [[2,3],[1,4],[1,6],[3,7],[4,3],[5,4],[4,5]]

// ======================================================================
// RESULTS:
// Runtime: 84 ms, faster than 45.00% of JavaScript online submissions for Queens That Can Attack the King.
// Memory Usage: 39 MB, less than 91.67% of JavaScript online submissions for Queens That Can Attack the King.