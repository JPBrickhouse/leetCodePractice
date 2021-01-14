// https://leetcode.com/problems/number-of-segments-in-a-string/
// You are given a string s, return the number of segments in the string. 
// A segment is defined to be a contiguous sequence of non-space characters.
// ==========================================================================
var countSegments = function (s) {

    // Split the string into an array, separating at spaces
    let stringArray = s.split(" ");

    // Get the totalSegements
    // (This is achieved by looking at the length of the array)
    let totalSegments = stringArray.length

    // Go through the array and look for edge cases
    // (Scenarios where there are excess null strings "" that don't get split correctly)
    // If you find an excess null string, subtract the total count by 1
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === "") {
            totalSegments--
        }
    }

    // Return the totalSegments
    return totalSegments;
};
// ==========================================================================
console.log(countSegments("Hello, my name is John")) // returns 5
console.log(countSegments("Hello")) // returns 1
console.log(countSegments("love live! mu'sic forever")) // returns 4
console.log(countSegments("")) // returns 0
console.log(countSegments("                ")) // returns 0
console.log(countSegments("Of all the gin joints in all the towns in all the world,   ")) // returns 13
// ==========================================================================
// RESULTS:
// Runtime: 76 ms, faster than 70.83%
// Memory Usage: 38.4 MB, less than 52.98%
