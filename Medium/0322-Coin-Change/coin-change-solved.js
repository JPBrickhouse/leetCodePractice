// https://leetcode.com/problems/coin-change/
// You are given coins of different denominations and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.
// =========================================================================

// Dynamic Programming:

// BOTTOM UP Solution
// Solved with assistance from the following:
// - https://backtobackswe.com/platform/content/the-change-making-problem/solutions
// - https://www.youtube.com/watch?v=jgiZlGzXMBw&ab_channel=BackToBackSWE

// ALSO see PDF in the folder, scanned of a hand walkthrough

// =========================================================================
var coinChange = function (coins, amount) {

    // Using the array constructor to create an array that has (amount + 1) elements
    // e.g. amount = 4 --> the new array.length = 5 --> the indexes of the new array = [0,1,2,3,4]
    // This array will store the answers to our sub-problems
    const cache = Array(amount + 1);

    // Using the fill method to change all the elements to a static value
    // The static value is chosen as (amount + 1)
    // e.g amount = 4 --> array values will look like [5,5,5,5,5]
    cache.fill(amount + 1);

    // The answer to making change for amount 0 will ALWAYS be 0
    cache[0] = 0;

    // Sort coins in ascending order (smallest to largest)
    // coins.sort((a,b) => a-b)
    // (THIS SOLUTION STILL WORKS WITHOUT SORTING)

    // Solve every sub-problem i from 1 to amount
    for (let i = 1; i <= amount; i++) {
    
        // Considering each coin that we are given
        for (let j = 0; j < coins.length; j++) {
    
            // If the value of the coin is less than or equal to the sub-problem amount
            if (coins[j] <= i) {

                // Store a value in the i index of the cache array
                // The value corresponds to the minimum of the following values:
                // - The current value in the i index (aka, the previous solution to the sub-problem)
                // - The value of the previous sub-problem
                //     - The +1 indicates a coin has been used
                //     - coins[j] in the epxression is the actual usage of that coin
                //     - You're getting i - coins[j], which corresponds to (current amount i) minus (value of coins[j])
                //     - Then, you're going to the sub-problem located at the index equal to i - coins[j]
                //     - The value of the sub-problem equals the value at cache[i - coins[j]]
                cache[i] = Math.min(cache[i], cache[i - coins[j]] + 1);
            }
        }
    }

    // Ternary operator to return the final result
    // - If cache[amount] is greater than amount...
    //      e.g. if amount was 4, the initial filled value of cache[4] was 5
    //      since 5 > 4, that means the problem wasn't solved
    //      therefore, return -1
    // - Otherwise, return cache[amount], because it contains the solution
    //      (aka, the minimum number of coins)
    return cache[amount] > amount ? -1 : cache[amount];
};
// =========================================================================
console.log(coinChange([1, 2, 5], 11)); // returns 3
console.log(coinChange([2], 3)); // returns -1
console.log(coinChange([0], 0)); // returns 0
console.log(coinChange([1], 1)); // returns 1
console.log(coinChange([1], 2)); // returns 2
console.log(coinChange([1, 2, 3, 4, 5], 23)) // returns 5
console.log(coinChange([7], 21)) // returns 3
console.log(coinChange([15], 18)) // returns -1
console.log(coinChange([186, 419, 83, 408], 6249)) // returns 20
console.log(coinChange([1, 3, 5, 6, 9], 90)) // returns 10
console.log(coinChange([1, 2, 3], 10)) // returns 4
// =========================================================================
// RESULTS:
// Runtime: 124 ms, faster than 65.39%
// Memory Usage: 42.5 MB, less than 93.01%