// https://leetcode.com/problems/fraction-addition-and-subtraction/

// Given a string representing an expression of fraction addition and subtraction, you need to return the calculation result in string format. 
// The final result should be irreducible fraction.
// If your final result is an integer, say 2, you need to change it to the format of fraction that has denominator 1. So in this case, 2 should be converted to 2/1.

// Notes:
// - The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
// - Each fraction (input and output) has format ±numerator/denominator. If the first input fraction or the output is positive, then '+' will be omitted.
// - The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1,10].
//   If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
// - The number of given fractions will be in the range [1,10].
// - The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.

// ==================================================

// JPB Notes

// Split at the "/"

// Reduce?
// Action depends on the + or - being used

// Least common multiple
// Greatest common factor

// FIND THE COMMON DENOMINATOR
// [a,b,c,d,etc.]
// - Is a or b larger? Use the larger to compare
// - Is the smaller a factor of the larger? If yes, no action. If no, multiply together.
// - Modify the numerators along the way
// - Move on to c...
// REPEAT

// ADD all the modified numerators together at the end
// Confirm if the final result is an integer (aka, 8/2 = 4/1)

var fractionAddition = function(expression) {
    
};