function getValue<T>(value: T): T {
    return value;
}

getValue<number>(5);
getValue<string>('5');

function getLength<T extends {length: number}>(value: T): number {
    return value.length;
}

function addLengths<T extends {length: number}, K extends {length: number}>(val1: T, val2: K): number {
    return val1.length + val2.length;
}

addLengths([1,2,3], 'sadasdasd');

// { value: {...} }


interface SomeObjectModel {
    value: ObjectRagac;
}

interface ObjectRagac {
    name: string;
    age: number;
}

interface GenericType<T> {
    value: T
}

interface NewObjectModel {
    name: string;
    year: number;
    isTrue: boolean;
}

let obj: GenericType<NewObjectModel>;


class GenericClass<T> {
    private value: T;
}

// creating new Type:
type StringOrNumber = string | number;
type ObjectOrArray = any[] | NewObjectModel;
type Age = number;


function printID(id: ObjectOrArray): void {
    console.log(id);
}


// printID('asdasd');
// printID(5);
// printID([]); // error
// printID(true); // error


interface Person {
    name: string;
    age?: number;
}

interface Employee {
    employeeID: string;
}

type EmployeedPerson = Person & Employee;

let empObject: EmployeedPerson = {
    name: 'asdas',
    
    employeeID: '12341234'
}

type IsString<T> = T extends string ? "YES" : "NO";

type A = IsString<string>;
type B = IsString<number>;

let a: A = 'YES';
let b: B = 'NO';

// console.log(typeof a);
// console.log(typeof b);

type HasLength<T extends {length: number}> = T extends string? string : any[];
// type C = HasLength<string>;
// function newFunc<HasLength>(val: HasLength) {
//     type C = HasLength<string>;
// }


function printLength(val: string | number) {
    if (typeof val === 'string') {
        console.log(val.length);
    } else {
        console.log(val.toString().length);
    }
}

let dog1 = {
    bark: () => {
        console.log('woof');
    }
}

function useProperty(obj: any) {
    if ('bark' in obj) {
        obj.bark();
    }
    else {
        console.log('can not bark');
    }
}

// useProperty(dog1);
// useProperty({});
  
class Dog {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public bark() {
        console.log(this.name + ': woof');
    }
}

class Cat {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public meow() {
        console.log(this.name + ': meoww');
    }

}

function anotherFunc(val: Dog | Cat) {
    if (val instanceof Dog) {
        val.bark();
    } else {
        val.meow();
    }
}

let cat = new Cat('garfildi');
let dog = new Dog('tyson');

anotherFunc(cat);
anotherFunc(dog);
  
  






