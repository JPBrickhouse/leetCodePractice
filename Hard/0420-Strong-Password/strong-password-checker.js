// https://leetcode.com/problems/strong-password-checker/

// A password is considered strong if the below conditions are all met:
// - It has at least 6 characters and at most 20 characters.
// - It contains at least one lowercase letter, at least one uppercase letter, and at least one digit.
// - It does not contain three repeating characters in a row (i.e., "...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).

// Given a string password, return the minimum number of steps required to make password strong. If password is already strong, return 0.

// In one step, you can:
// - Insert one character to password,
// - Delete one character from password, or
// - Replace one character of password with another character.

// ==========================================================



// JPB Notes:

// Look at the length
// If it's less than 6, increase length - check the conditions, too
// If it's more than 20, reduce length - check the conditions, too

// Go through the password, check the conditions
// Use an object / hash table?
// e.g. { lowercase: 2, uppercase: 5, digits: 0, miscChars: 3}
// All of those must be greater than or equal to 1

// Check for repeating

// Use match with a regex?
// https://www.w3schools.com/jsref/jsref_match.asp


var strongPasswordChecker = function(password) {
    
    let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
    let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let digitOptions = "0123456789"
    let miscChars = ".!"

};