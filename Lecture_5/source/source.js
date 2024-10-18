// class Car {
//     #isEngineOn = false;

//     startEngine() {
//         console.log('wruuum');
//         this.#isEngineOn = true;
//     }

//     stopEngine() {
//         this.#isEngineOn = false;
//     }
    
// }

// let car = new Car();

// car.startEngine();


// function sum(arr) {

// }

// console.log(sum([1,2,3,4]));

// class Math {

//     add(a, b) {
//         let c = a * b;
//         let result = c + a + b - c;
//         return result;
//     }

// }

// let math = new Math();

// console.log(math.add(1,2));


// inheritance

// class Animal {
    
//     makeSound() {
//         console.log('aaaaaaaaa');
//     }

// }

// class Dog extends Animal {

//     makeSound() {
//         console.log('bark');
//     }
// }

// let dog = new Dog();

// dog.makeSound();


// class Person {
//     name;
//     age;

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`hello, my name is ${this.name}. I'm ${this.age} years old`)
//     }

// }

// class Developer extends Person {
//     #expTime;

//     constructor(expTime, name, age) {
//         super(name, age);
//         this.#expTime = expTime;
//     }

//     greet() {
//         console.log(`hello, my name is ${this.name}. I'm ${this.age} years old. 
//             i have ${this.#expTime} years of experiance`);
//     }
// }


// let ana = new Developer(3, 'ana', 25);
// let elene = new Person('elene', 9);


// ana.greet();
// elene.greet();

// class MathUtil {

//     static Add(a, b) {
//         return a + b;
//     }

// }


// console.log(MathUtil.Add(1, 2));

class NumberValue {
    #value;

    constructor(value) {
        this.#value = value;
    }

    add(numberToAdd) {
        this.#value += numberToAdd;
        return this;
    }

    subtract(numberToSubract) {
        this.#value -= numberToSubract;
        return this;
    }

    multiply(num) {
        this.#value *= num;
        return this;
    }

    divide(num) {
        this.#value /= num;
        return this;
    }

    getValue() {
        return this.#value;
    }
    
    
}

let val = new NumberValue(1);
let val1 = new NumberValue(2);

console.log(val.add(10).subtract(1).multiply(10).divide(5).getValue());

// console.log(val.getValue());


class Shape {
    name;

    constructor(name) {
        this.name = name;
    }

    calculateArea() {
        console.log('there is a problem claculateArea() method should be implemented');
    }
}

class Rectangle extends Shape {
    width;
    height;

    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height
    }

    calculateArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {

    constructor(name, width) {
        super(name, width, width);
    }

    rame(){
        let ra = new Rectangle("fdf",12,12);
        ra.calculateArea = () => 123213;
        console.log(ra.calculateArea()) 
        
    }

}

let martkutx = new Rectangle('martkutxediu', 2, 5);
console.log(martkutx.name);
console.log(martkutx.calculateArea());

let square = new Square('kvadrati', 5);
console.log(square.name);
console.log(square.calculateArea());


