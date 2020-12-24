// https://leetcode.com/problems/count-of-matches-in-tournament/
// You are given an integer n, the number of teams in a tournament that has strange rules:
// - If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// - If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// - Return the number of matches played in the tournament until a winner is decided.

// ===================================================

// My solution is based on old mathematical knowledge
// Standard tournament: n teams requires n-1 games

// SOMEHOW this isn't the fastest solution OR the least memory usage:
// Runtime: 76 ms, faster than 85.19% of JavaScript online submissions for Count of Matches in Tournament.
// Memory Usage: 38.6 MB, less than 47.87% of JavaScript online submissions for Count of Matches in Tournament.

// ===================================================

var numberOfMatches = function(n) {
    return n-1;
};