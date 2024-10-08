

// saxeli(2);


// function saxeli(str) {
//     console.log(str);
// }


// function uargumento() {
//     console.log('rame nebismieri teqsti');
// }


// uargumento();


// const rameFunqcia = function(a, b) {
//     console.log(a + b);
// }

// rameFunqcia(1,2);

// + ricxvebshi aris jami
// + stringebshi aris simboloebis miwebeba - concatenation


// function sum6(x1, x2, x3, x4, x5, x6) {
//     console.log(x1 + x2 + x3 + x4 + x5 + x6);
// }

// sum6(1,1,1,1,1,1);
// sum6(1,1,'1',1,1,1);

// function withDefault(name = 'busa') {
//     console.log(name);
// }

// withDefault(); // busa
// withDefault('gio'); // gio

// function withDefault2(param1, param2 = 1) {
//     console.log(param1 * param2);
// }

// withDefault2(2,3); // 6
// withDefault2(5); // 5


// const f2 = function() {
//     console.log('from f2');
// }

// const f3 = function() {
//     console.log('from f3');
// }

// function f1(cb) {

//     if (typeof cb === 'function') {
//         cb(); 
//     } else {
//         console.log('Not a function');
//     }

// }

// f1(f2);
// f1(f3);
// f1('sadas');

// function calculate(num1, num2, op) {

//     // if (typeof num1 === 'number' && typeof num2 === 'number' && typeof op === 'function') {
//     //     op(num1, num2);
//     // } else {
//     //     console.log('wrong types');
//     // }

//     // De morgan rule
//     // A && B
//     // !A || !B

//     if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof op !== 'function') {
//         return;
//     }
    
//     op(num1, num2);
// }

// const sum = function(a, b) {
//     console.log(a + b);
// }

// const multiply = function(a, b) {
//     console.log(a * b);
// }

// const divide = function (a, b) {
//     console.log(a / b);
// }

// const subtract = function (a, b) {
//     console.log(a - b);
// }

// calculate(2, 3, sum); // 5
// calculate(2, 3, multiply); // 6
// calculate(6, 3, divide); // 2
// calculate(6, 3, subtract); // 3
// calculate('6', 2, sum);
// calculate(2, 'asd', divide);
// calculate(2, 4, 'asda');

// function someOperation(num1, num2, isAddition) {
//     if (isAddition) {
//         return num1 + num2;
//     }

//     return num1 - num2;

// }

// let x = someOperation(6, 2, false);

// console.log(x);

// function highOrder1(cb) {
//     cb();
// }

// function highOrder2() {

//     return function() {
//         console.log('YAAAYYY!!!');
//     }

// }

// // console.log(typeof highOrder2());
// let func = highOrder2();
// func();

// highOrder2()();

// (function sum(a, b) {
//     console.log(a + b);
// })(1, 2);

// sum(1,2);

// const xFunc = function(a, b) {
//     return a + b;
// }

const yFunc = (a, b) => {
    console.log(a);
    console.log(b);
    return a + b;
}

const arrowFunc = (a, b) => a + b;

// console.log(xFunc(1,2))
// console.log(yFunc(1, 2))