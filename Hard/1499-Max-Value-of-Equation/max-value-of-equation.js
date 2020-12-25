// https://leetcode.com/problems/max-value-of-equation/


// HINTS:
// - Use a priority queue to store for each point i, the tuple [yi-xi, xi]
// - Loop through the array and pop elements from the heap if the condition xj - xi > k, where j is the current index and i is the point on top the queue.
// - After popping elements from the queue. If the queue is not empty, calculate the equation with the current point and the point on top of the queue and maximize the answer.


var findMaxValueOfEquation = function(points, k) {
    
};

