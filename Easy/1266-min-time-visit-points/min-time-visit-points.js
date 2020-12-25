// https://leetcode.com/problems/minimum-time-visiting-all-points/

// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

// You can move according to these rules:
// - In 1 second, you can either:
//    - move vertically by one unit,
//    - move horizontally by one unit, or
//    - move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// - You have to visit the points in the same order as they appear in the array.
// - You are allowed to pass through points that appear later in the order, but these do not count as visits.

// ====================================================================

// Results:
// Runtime: 76 ms, faster than 94.79%
// Memory Usage: 40.4 MB, less than 26.46%

var minTimeToVisitAllPoints = function (points) {

    let totalTime = 0;

    for (let i = 0; i < points.length; i++) {
        
        if (points[i + 1]) {
            let currentPoint = points[i];
            let nextPoint = points[i + 1];

            xDiff = Math.abs(nextPoint[0] - currentPoint[0]);
            yDiff = Math.abs(nextPoint[1] - currentPoint[1]);

            maxDiff = Math.max(xDiff, yDiff);
            minDiff = Math.min(xDiff, yDiff);

            let timeRequired = minDiff + (maxDiff - minDiff);

            totalTime += timeRequired;
        }
    }

    return totalTime;
};

console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]))
console.log(minTimeToVisitAllPoints([[3, 2], [-2, 2]]))
