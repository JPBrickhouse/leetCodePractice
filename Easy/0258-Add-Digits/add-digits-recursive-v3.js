
// SUPER FAST RECURSIVE VERSION from LeetCode

var addDigits = function (num) {
  
  if (num < 10) return num;
  
  return addDigits(
    num
      .toString()
      .split("")
      .map((ele) => Number(ele))
      .reduce((a, b) => a + b, 0)
  );
};

// =================================================
console.log(addDigits(38)) // returns 2
console.log(addDigits(2568)) // returns 3