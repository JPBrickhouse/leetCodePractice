// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

// Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.
// Return the minimum number of steps to make t an anagram of s.
// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

// -----------------------------------------------------------------------------

// TAKING MY SOLUTION from the Grant Street Group coding challenge
// MODIFYING IT by changing line 90 from:
// return numOfStepsReq; 
// TO
// return numOfStepsReq / 2;

// -----------------------------------------------------------------------------
function minSteps(s, t) {
    // write your code in JavaScript (Node.js 8.9.4)

    // Create the caches
    let stringScache = {};
    let stringTcache = {};

    // Store the character counts for string s
    for (let i = 0; i < s.length; i++) {
        if (stringScache[s[i]]) {
            stringScache[s[i]]++;
        }
        else {
            stringScache[s[i]] = 1;
        }
    }

    // Store the character counts for string t
    for (let i = 0; i < t.length; i++) {
        if (stringTcache[t[i]]) {
            stringTcache[t[i]]++;
        }
        else {
            stringTcache[t[i]] = 1;
        }
    }

    // Compare the two character counts
    let numOfStepsReq = 0;

    // Exists in s, not in t --> Take the count in s, add to numOfStepsReq
    // Exist in t, not in s --> Take the count in t, add to numOfStepsReq
    // Exists in both, count same --> Zero, no change to numOfStepsReq
    // Exists in both, count different --> Take difference, add to numOfStepsReq

    for (const key in stringScache) {
        // Get the count, then zero out
        let countInS = stringScache[key];
        stringScache[key] = 0;

        // Look in stringTcache for the same key
        // If it exists...
        // Get the count, then zero out
        let countInT = 0;
        if (stringTcache[key]) {
            countInT = stringTcache[key];
            stringTcache[key] = 0;
        }

        // Get the difference then add to the total
        let differenceToAdd = Math.abs(countInS - countInT);
        numOfStepsReq += differenceToAdd;
    }

    for (const key in stringTcache) {
        // Get the count and if it's not zero, proceed
        let countInT = stringTcache[key];
        if (countInT !== 0) {

            // Look in stringScache for the same key
            // If it exists...
            // Get the count, then zero out
            let countInS = 0;
            if (stringScache[key]) {
                countInS = stringScache[key];
                stringTcache[key] = 0;
            }

            // Get the difference then add to the total
            let differenceToAdd = Math.abs(countInS - countInT);
            numOfStepsReq += differenceToAdd;
        }
    }

    return numOfStepsReq / 2;
}
// -----------------------------------------------------------------------------
console.log(minSteps("bab", "aba"))
console.log(minSteps("leetcode", "practice"))
console.log(minSteps("anagram", "mangaar"))
console.log(minSteps("xxyyzz", "xxyyzz"))
console.log(minSteps("friend", "family"))
// -----------------------------------------------------------------------------
// Runtime: 148 ms, faster than 70.91%
// Memory Usage: 45 MB, less than 37.45%