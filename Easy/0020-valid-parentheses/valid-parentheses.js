// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// - Open brackets must be closed by the same type of brackets.
// - Open brackets must be closed in the correct order.
// -----------------------------------------------------------
var isValid = function (s) {

    var stack = [];

    for (var i = 0; i < s.length; i++) {
      var char = s[i];
  
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
        continue;
      }
      
      if (char === ")") {
        if (stack.pop() !== "(") {
          return false;
        }
        continue;
      } 
      
      if (char === "}") {
        if (stack.pop() !== "{") {
          return false;
        }
        continue;
      }
      
      if (char === "]") {
        if (stack.pop() !== "[") {
          return false;
        }
      }
    }
  
    return stack.length === 0;
};
// -----------------------------------------------------------
console.log(isValid("()")) // returns true
console.log(isValid("()[]{}")) // returns true
console.log(isValid("(]")) // returns false
console.log(isValid("([)]")) // returns false
console.log(isValid("{[]}")) // returns true
// -----------------------------------------------------------
// RESULTS:
// Runtime: 76 ms, faster than 87.43%
// Memory Usage: 38.8 MB, less than 64.94%
