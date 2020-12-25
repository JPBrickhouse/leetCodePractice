// https://leetcode.com/problems/queens-that-can-attack-the-king/

// On an 8x8 chessboard, there can be multiple Black Queens and one White King.
// Given an array of integer coordinates queens that represents the positions of the Black Queens,
// and a pair of coordinates king that represent the position of the White King,
// return the coordinates of all the queens (in any order) that can attack the King.
// ======================================================================

// JPB notes:

// If the X coordinate OR the Y coordinate matches, that works

// If not, then check if the SLOPE is 1
// (y2 - y1) / (x2 - x1) = 1

// BUT, the queens can block each other

// Therefore, a maximum of ONE per row, column, and diagonal in EACH of the 8 directions

// ======================================================================

var queensAttacktheKing = function(queens, king) {
    
};

// ======================================================================
let queens1 = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]];
let king1 = [0,0];
console.log(queensAttacktheKing(queens1,king1))
// Output: [[0,1],[1,0],[3,3]]

let queen2 = [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]];
let king2 = [3,3];
console.log(queensAttacktheKing(queens2,king2))
// Output: [[2,2],[3,4],[4,4]]

let queen3 = [[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7]];
let king3 = [3,4];
console.log(queensAttacktheKing(queens3,king3))
// Output: [[2,3],[1,4],[1,6],[3,7],[4,3],[5,4],[4,5]]