// შექმენით ფუნქცია რომელსაც გადაეცემა მასივი (შეამოწმეთ რომ მასივია) 
// თუ არ არის მასივი გადაცემული დააბრუნოს ცარიელი მასივი- [ ],  
// თუ მასივია მაშინ გაფილტრე რომ დარჩეს მხოლოდ კენტი რიცხვები და დააბრუნე გაფილტრული მასივი

// function filterOdd(array) {

//     if (!Array.isArray(array)) {
//         return [];
//     }

//     let filtered = array.filter((val) => val % 2 === 1);

//     return filtered;
// }

// console.log(filterOdd('stringasdasd'));
// console.log(filterOdd([1,2,3,4,5]));
// console.log(filterOdd([2,4,6]));

//შექმენით მასივი სადაც შეინახავთ რიცხვებს 1-დან 10 ის ჩათვლით. და დააჯამეთ (reduce გამოიყენეთ)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr.reduce((a, b) => a + b));

// დაარევერსეთ წინა დავალებისთვის შექმნილი მასივი

// console.log(arr.reverse())

// შექმენი რიცხვების მასივი და map ის დახმარებით თითოეული ელემენტი გარდაქმენი თავის კვადრატში.

// const mappedSquares = arr.map( val => val * val);
// console.log(mappedSquares)


// [3,2,10,23, 12, 4] დასროტეთ ეს მასივი ზრდადობის მიხედვით

const toSort = [3, 2, 10, 23, 12, 4];

// const sorted = toSort.sort((a, b) => a - b);

// console.log(sorted)

//წინა მასივი დასორტეთ კლებადობის მიხედვით

// const sorted1 = toSort.sort((a, b) => b - a);

// console.log(sorted1)

// წინა ორ დავალებაში გამოყენებულ მასივში (indexOf)-ის გამოყენებით იპოვეთ რომელ ინდექსზე არის რიცხვი 12. ასევე 3 და 23;

console.log(toSort.indexOf(12))
console.log(toSort.indexOf(3))
console.log(toSort.indexOf(23))
console.log(toSort.indexOf(100)) // -1