
function sumDigits(n) {
    let sum = 0;
    while (n) {
        digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
}

function sumDigitsRecursively(n) {
    let sum = sumDigits(n);
    if (sum < 10)
        return sum;
    else
        return sumDigitsRecursively(sum);
}

console.log(sumDigitsRecursively(38)) // returns 2
console.log(sumDigitsRecursively(2568)) // returns 3