// console.log(typeof 500)

// console.log(typeof "500")

// console.log(typeof true)

// console.log(typeof false)

// console.log(typeof {
//     name: "busa",
//     age : 22
// });

// var name = "busa";
// var age;
// var Age = 30

// console.log(age); //undefined
// console.log(typeof age); //undefined

// age = 22;

// console.log(age) // 22
// console.log(typeof age) // number

// age = "22";

// console.log(age) // 22
// console.log(Age) // 30
// console.log(typeof age) // number

// console.log(name);
// console.log(typeof name);


// hoisting: 

// myVar = 15;

// var myVar;

// function myFunc() {
//     myVar2;
    
//     var myVar2;

// }


// let & const: 

// let x = 2;
// x = 3;

// const PI = 3.14;

// PI = 5; არ შეიძლება თავიდან მინიჭება

// console.log(PI);
// console.log(x);

// Error-ს დაარტყავს ცვლადი არ არსებობს ფრჩხილების გარეთ
// if (true) {
//     let rameCvladi = 10;
// }

// console.log(rameCvladi);


let x = 1;

while(x < 10) {
    let y;
    y = 2;
    console.log(x);
    x = x + 1;
}
