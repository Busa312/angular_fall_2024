// global scope:
var isTrue = true;
// isTrue = 'stringi'; // has type error
var number;
// number = 'stringi' // type error
number = 30;
var typedArray;
typedArray = ['isev', 'rame', 'stringi'];
typedArray.push('string');
// typedArray.push(5); // type error
// tuple  -   ['saxeli', 20];
var tuple = ['saxeli', 20, true];
var array = [];
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 12] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 1] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 2] = "Wednesday";
})(WeekDays || (WeekDays = {}));
var obj = {
    name: 'string',
    age: 20,
    lastName: 'lastName',
    weekDays: WeekDays.Tuesday
};
// console.log(WeekDays.Monday);
function rame(str, num, anyType) {
    // agar gvchirdeba:
    // if (typeof str !== 'string') {
    //     return
    // }
    // -----------------------
    return 5;
}
function voidMethod() {
    return;
}
function printSomething(str) {
    console.log('------------');
    console.log(str);
    console.log('------------');
}
rame('str', 5, true);
var anyArray = [];
// anyArray.push('string');
// anyArray.push(5);
// anyArray.push(true);
// console.log(anyArray)
// printSomething('rame')
// printSomething('davprintot')
var x = 5;
// x = 'string'; //type error
var ragacStringi = 'stringi';
// console.log((ragacStringi as string).length);
// console.log( (<string>ragacStringi).length );
var obj1 = { name: 'asdasd', age: 20 };
var obj2 = obj1;
//  console.log(obj2);
var SomeClass = /** @class */ (function () {
    function SomeClass() {
    }
    SomeClass.prototype.someMethod = function () {
        console.log(this.variable);
    };
    return SomeClass;
}());
if (true) {
    var rameVariable = 5;
}
else {
}
//  for (let i = 0; i< 5; i++) {
//     //local scope
//     console.log(i);
//  }
var obj4 = { name1: 'stsadas', age: 12 };
var name1 = obj4.name1, age = obj4.age;
// let name1 = obj4.name1;
// let age = obj4.age
// console.log(name1);
// console.log(age)
var arr = [1, 2, 3, 4, 5];
// arr.push(true) type error
var val1 = arr[0], val2 = arr[1], newArray = arr.slice(2);
// console.log(val1);
// console.log(val2);
// console.log(newArray);
function newTypedFunction(str, num, kideRagac) {
    return new SomeClass();
}
var someClassObject = new SomeClass();
function optional(name, age) {
}
optional('name');
function restFunction() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
}
restFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10);
function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    nums.forEach(function (val) {
        sum += val;
    });
    return sum;
}
console.log(sum(1, 2, 123, 213213, 1234, 233, 13));
