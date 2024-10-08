// Write a function isEven that takes a number as an argument
// and returns true if the number is even, otherwise false

// % - modulus operator
// 8 % 2 = 0
// 9 % 2 = 1
// 10 % 3 = 1

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(8));
console.log(isEven(7));