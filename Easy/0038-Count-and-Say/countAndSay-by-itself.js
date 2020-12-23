// This is the count and say function by itself

// Pass a number to the function
var countAndSay = function (number) {

    // Convert that to a string
    numAsString = number.toString()

    // Initialize i for use to step through the while loop
    let i = 0

    // Initialize an empty array
    countSayArray = []

    // Proceed through numAsString using a while loop
    while (i < numAsString.length) {
        
        // Always start out with a zero count
        let charCount = 0

        // Get the current character
        let currentChar = numAsString[i]
        
        // The statement inside the while loop is a boolean, so it will run while true
        // aka, compare characters to the current character...
        // if they match...
        // - increase the count (how many times they match)
        // - increase i (the step counter that moves through numAsString)
        while (numAsString[i] === currentChar) {
            charCount++
            i++
        }

        // After the while loop breaks out, we have a final count of the character
        // (i.e. there were two 8's, or three 1's, etc.)
        // Push those to array for now
        countSayArray.push(charCount.toString())
        countSayArray.push(currentChar)

        // Now, we'll go back to the beginning of the while loop
        // i will still be the same, so we'll be ready to continue through numAsString
        // But the charCount will reset to zero, so it's ready to count matching characters
    }

    // Join the array into a string and return that string
    let countSayString = countSayArray.join("")
    return countSayString
};


console.log(countAndSay(3322251))
// will return 23321511 (two 3's, three 2's, one 5, and one 1)

console.log(countAndSay(45611188))
// will return 1415163128 (one 4, one 5, one 6, three 1's, and two 8's)
