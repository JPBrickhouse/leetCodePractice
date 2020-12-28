// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/

// There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:
// - In each step, you will choose any 3 piles of coins (not necessarily consecutive).
// - Of your choice, Alice will pick the pile with the maximum number of coins.
// - You will pick the next pile with maximum number of coins.
// - Your friend Bob will pick the last pile.
// - Repeat until there are no more piles of coins.

// Given an array of integers piles where piles[i] is the number of coins in the ith pile.
// Return the maximum number of coins which you can have.
// =========================================================================

var maxCoins = function (piles) {

    // counter of the userTotal
    let userTotal = 0;

    // sorting the pile from largest to smallest
    piles.sort((a, b) => {
        return b - a
    })

    // Going through the array until it is empty
    // shift removes the first element of the array
    // pop removes the last element of the array
    while (piles.length > 0) {
        piles.shift(); // remove the largest number, goes to Alice
        userTotal += piles.shift(); // remove the second largest number, goes to user
        piles.pop(); // removes the smallest number, goes to Bob
    }

    return userTotal;
};
// =========================================================================
console.log(maxCoins([2, 4, 1, 2, 7, 8]))
console.log(maxCoins([2, 4, 5]))
console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]))
// =========================================================================
// RESULTS:
// Runtime: 1988 ms, faster than 12.41%
// Memory Usage: 49.6 MB, less than 54.01%