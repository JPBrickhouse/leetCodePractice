// https://leetcode.com/problems/count-and-say/

var countAndSay = function (n) {

    // An internal function that performs the Count-And-Say sequence by itself
    const internalCountAndSay = function (number) {
        numAsString = number.toString();
        let i = 0;
        countSayArray = [];
        while (i < numAsString.length) {
            let count = 0;
            let currentChar = numAsString[i];
            while (numAsString[i] === currentChar) {
                count++;
                i++;
            }
            countSayArray.push(count.toString());
            countSayArray.push(currentChar);
        }
        let countSayString = countSayArray.join("");
        return countSayString
    }

    // Start with a step counter of j=1
    let j=1;
    // Start with a numberToCheck (aka, the first number to perform Count-And-Say)
    let numberToCheck = 1;

    // Use a while loop to step through all the iterations of Count-And-Say
    // Essentially micmicking recursion
    // Run the internalCountAndSay function
    // Set the return value as the new numberToCheck
    // Rinse and repeat until you've reached the final iteration of Count-And-Say
    while(j < n) {
        numberToCheck = internalCountAndSay(numberToCheck);
        j++
    }

    // Return that final new string!
    return numberToCheck.toString();
};

console.log(countAndSay(9)) // returns 31131211131221
console.log(countAndSay(10)) // returns 13211311123113112211