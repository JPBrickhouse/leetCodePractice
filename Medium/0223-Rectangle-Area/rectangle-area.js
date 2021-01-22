// https://leetcode.com/problems/rectangle-area/
// Find the total area covered by two rectilinear rectangles in a 2D plane.
// Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
// (x,y) coordinates
// (A,B) and (C,D) correspond to the 1st rectangle (bottom left point, top right point)
// (E,F) and (G,H) correspond to the 2nd rectangle (bottom left point, top right point)
// ====================================================
// JPB Notes:
// - Find the two areas of the rectangles
// - Add them together
// - Subtract the difference
// ====================================================
var computeArea = function (A, B, C, D, E, F, G, H) {

    // Find the dimensions of the given rectangles
    let rectOneLength = Math.abs(C - A);
    let rectOneHeight = Math.abs(D - B);
    let rectTwoLength = Math.abs(G - E);
    let rectTwoHeight = Math.abs(H - F);

    // Compute the sum of the areas of both rectangles
    let rectOneArea = rectOneLength * rectOneHeight;
    let rectTwoArea = rectTwoLength * rectTwoHeight;
    let area = rectOneArea + rectTwoArea

    // Conditions for NO overlap are as follows:
    // - if G is to the left of A
    // - if H is below B
    // - if E is to the right of C
    // - if F is above D
    // If there is NO overlap, return the sum of the areas of both rectangles
    if ((G < A) || (E > C) || (F > D) || (H < B)) {
        return area;
    }
    // If there IS an overlap, create the coordinates of the overlapping rectangle:
    // (I,J,K,L) where (I,J) corresponds to (bottom left point, top right point)
    else {
        let I = Math.max(A, E); // Leftmost x position will be the rightmost of the two left x positions
        let J = Math.max(B, F); // Lower y position will be the higher of the two lower y positions
        let K = Math.min(C, G); // Rightmost y position will be the leftmost of the two right x positions
        let L = Math.min(D, H); // Higher y position will be the lower of the two higher y positions
    
        // Finding the dimensions of the overlapping rectangle
        let overlapLength = Math.abs(K - I);
        let overlapHeight = Math.abs(L - J);
    
        // Return the summed area minus the area of the overlapping rectangle
        return area - (overlapLength * overlapHeight)
    }
};
// ====================================================
console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2)) // returns 45
console.log(computeArea(0, 0, 0, 0, -1, -1, 1, 1)) // returns 0
// ====================================================
// RESULTS:
// Runtime: 152 ms, faster than 63.64%
// Memory Usage: 45.6 MB, less than 70.13%