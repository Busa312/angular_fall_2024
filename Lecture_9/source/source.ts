// global scope:
let isTrue: boolean = true;
// isTrue = 'stringi'; // has type error

let number: number;

// number = 'stringi' // type error

number = 30;


let typedArray: string[];

typedArray = ['isev', 'rame', 'stringi'];

typedArray.push('string');
// typedArray.push(5); // type error

// tuple  -   ['saxeli', 20];

let tuple: [string, number, boolean] = ['saxeli', 20, true];


let array = [];

enum WeekDays {
    Monday = 12,
    Tuesday = 1,
    Wednesday = 2
}

let obj: {
    name: string,
     age: number, 
     lastName: string,
     profession?: string,
     weekDays?: WeekDays
    } = {
    name: 'string',
    age: 20,
    lastName: 'lastName',
    weekDays: WeekDays.Tuesday
}



// console.log(WeekDays.Monday);

function rame(str: string, num: number, anyType: any): number {
    // agar gvchirdeba:
    // if (typeof str !== 'string') {
    //     return
    // }
    // -----------------------

    return 5;

}

function voidMethod(): void {
    return;
}

function printSomething(str: string): void {
    console.log('------------');
    console.log(str);
    console.log('------------');
}


rame('str', 5, true);

let anyArray: any[] = [];

// anyArray.push('string');

// anyArray.push(5);

// anyArray.push(true);

// console.log(anyArray)

// printSomething('rame')
// printSomething('davprintot')

let x = 5;

// x = 'string'; //type error

let ragacStringi: any = 'stringi';

// console.log((ragacStringi as string).length);
// console.log( (<string>ragacStringi).length );


let obj1: {name: string, age: number} = {name: 'asdasd', age: 20};
let obj2: {name: string, age: number, isEmployed: boolean}
 = obj1 as {name: string, age: number, isEmployed: boolean}

//  console.log(obj2);


 class SomeClass {
    //class scope
    variable: string

    someMethod() {
        console.log(this.variable);
    }
 }


 if (true) {
    let rameVariable = 5;
 } else {
    
 }

//  for (let i = 0; i< 5; i++) {
//     //local scope

//     console.log(i);
//  }


let obj4 = {name1: 'stsadas', age: 12};

let {name1, age} = obj4;

// let name1 = obj4.name1;
// let age = obj4.age

// console.log(name1);
// console.log(age)

let arr: number[] = [1,2,3,4,5];

// arr.push(true) type error

let [val1, val2, ...newArray] = arr;

// console.log(val1);
// console.log(val2);
// console.log(newArray);


function newTypedFunction(str: string, num: number, kideRagac: boolean): SomeClass {
    return new SomeClass();
}

let someClassObject = new SomeClass();


function optional(name: string, age?: number) {

}

optional('name');

function restFunction(...arr: number[]) {
    
}


restFunction(1,2,3,4,5,6,7,8,9,0,10);


function sum(...nums: number[]): number {
    let sum = 0;

    nums.forEach(val => {
        sum += val;
    });

    return sum;
}


console.log(sum(1, 2, 123, 213213, 1234, 233, 13))