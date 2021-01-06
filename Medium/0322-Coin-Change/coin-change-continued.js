// https://leetcode.com/problems/coin-change/
// You are given coins of different denominations and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.
// =========================================================================
// JPB Notes:
// Sort the array, highest to lowest
// Go through the array:
// - Amount / array element --> round down for coin count (and add to total coin count)
// - Amount - (array element * coin count) --> that's the reamining amount
// - Repeat
// =========================================================================
var coinChange = function (coins, amount) {

    let makeChangeInternal = (internalCoins, remainingAmount) => {
        let countOfAllCoins = 0;
        for (let i = 0; i < internalCoins.length; i++) {
            let numOfCurrentCoins = Math.floor(remainingAmount / internalCoins[i]);
            remainingAmount = remainingAmount - (numOfCurrentCoins * internalCoins[i]);
            countOfAllCoins += numOfCurrentCoins;
        }
        return [countOfAllCoins, remainingAmount]
    }

    if (amount === 0) {
        return 0;
    }
    else {

        coins.sort((a, b) => b - a)

        while (coins.length !== 0) {

            console.log(coins)
            let [countOfAllCoins, remainingAmount] = makeChangeInternal(coins, amount)

            console.log(countOfAllCoins, remainingAmount)

            if (remainingAmount !== 0) {
                coins.shift()
                console.log("shift happens")
            }
            else if (remainingAmount !== 0 && coins.length === 0) {
                return -1
            }
            else {
                return countOfAllCoins;
            }
        }

    }
};
// =========================================================================
// console.log(coinChange([1, 2, 5], 11)); // returns 3
console.log(coinChange([2], 3)); // returns -1
// console.log(coinChange([0], 0)); // returns 0
// console.log(coinChange([1], 1)); // returns 1
// console.log(coinChange([1], 2)); // returns 2
// console.log(coinChange([1, 2, 3, 4, 5], 23)) // returns 5
// console.log(coinChange([7], 21)) // returns 3
console.log(coinChange([15], 18)) // returns -1
console.log(coinChange([186, 419, 83, 408], 6249)) // returns 20
