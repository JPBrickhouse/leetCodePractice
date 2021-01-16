// https://leetcode.com/problems/predict-the-winner/
// Given an array of scores that are non-negative integers. Player 1 picks one of the numbers from either end of the array followed by the player 2 and then player 1 and so on.
// Each time a player picks a number, that number will not be available for the next player. This continues until all the scores have been chosen. The player with the maximum score wins.
// Given an array of scores, predict whether player 1 is the winner. You can assume each player plays to maximize his score.

// =================================================================
var PredictTheWinner = function (nums) {
    let playerOneScores = [];
    let playerTwoScores = [];

    let moveCount = 0;
    let originalLength = nums.length;

    while (moveCount < originalLength) {

        // THIS WHERE THE SELECTION PROCESS TAKES PLACE
        // Part of it is shifting the first element or popping the last element
        // However, it's not just a matter a comparing the first / last elements
        // There's also the impetus to plan ahead, and anticipate the largest value

        moveCount++;
    }

    let p1score = 0;
    let p2score = 0;

    if (playerOneScores.length !== 0) {
        p1score = playerOneScores.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        });
    }

    if (playerTwoScores.length !== 0) {
        p2score = playerTwoScores.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        });
    }

    if (p1score >= p2score) {
        return true;
    }
    else {
        return false;
    }
};
// =================================================================
console.log(PredictTheWinner([1, 5, 2])) // returns false
console.log(PredictTheWinner([1, 5, 233, 7])) // returns true