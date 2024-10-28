/*1. Create a Vehicle Class
•	შექმენით კლასი Vehicle შემდეგი ფროფერთიებით:
    o	brand (string)
    o	model (string)
    o	year (number)
    o	mileage (number, default is 0)
•	დაამატეთ მეთოდები:
    o	drive(miles) – ზრდის ობიექტის არსებულ მილაჟს გადაცემული რაოდენობით.
    o	getVehicleInfo() – აბრუნებს სტრინგს ფორმატით: "Brand: <brand>, Model: <model>, Year: <year>, Mileage: <mileage>".
*/

/*
    4. Encapsulation with Getters and Setters
•	შეცვალეთ Vehicle კლასი რომ შეიცავდეს private ფროფერთი #mileage - ს
•	შექმენით getMileage და setMileage მეთოდები set ში შეამოწმეთ რომ მხოლოდ დადებითი რიცხვი მიენიჭოს #mileage -ს.

*/

class Vehicle {
    brand;
    model;
    year;
    #mileage;

    constructor(brand, model, year, mileage = 0) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.#mileage = mileage;
    }

    getMileage() {
        return this.#mileage;
    }

    setMileage(mileage) {
        if (mileage <= 0) {
            return this.#mileage;
        }
        this.#mileage = mileage;
        return this.#mileage;
    }

    drive(miles) {
        this.#mileage += miles;
    }

    getVehicleInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Mileage: ${this.#mileage}`
    }

}


/*
    2. Inheritance with a Car Class
•	დააექსტენდეთ  Vehicle კლასი და დაარქვით Car.
    o	დაამატეთ ახალი ფროფერთიები: fuelType (string)
•	შექმენით ახალი getVehicleInfo() მეთოდი რომელიც სტრინგში ჩაწერს fuelType ფროფერთისაც.

*/

class Car extends Vehicle {
    fuelType;

    constructor(brand, model, year, mileage, fuelType) {
        super(brand, model, year, mileage);
        this.fuelType = fuelType;
    }
    
    getVehicleInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Mileage: ${this.getMileage()}, fuel type: ${this.fuelType}`
    }
}

/*
    3. Static Methods in a MathOperations Class
•	შექმენით კლასი MathOperations რომელიც მხოლოდ სტატიკურ მეთოდებს შეიცავს:
    o	add(a, b) – აბრუნებს ჯამს.
    o	subtract(a, b) – აბრუნებს სხვაობას.
    o	multiply(a, b) – აბრუნებს ნამრავლს.
    o	divide(a, b) – აბრუნებს განაყოფს,  თუ b უდრის 0-ს აბრუნებს სტრინგს: “can not divide by 0”
•	გამოიძახეთ ეს მეთოდები (ობიექტის შექმნის გარეშე).

 */

class MathOperations {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) {
            return "can not divide by 0";
        }
        return a / b;
    }
}

// console.log(MathOperations.add(1,2)); // 3
// console.log(MathOperations.subtract(1,2)); // -1
// console.log(MathOperations.multiply(2,4)); // 8
// console.log(MathOperations.divide(1,0)); // “can not divide by 0”
// console.log(MathOperations.divide(16,4)); // 4

/*
    5. Polymorphism with an ElectricCar Class
•	შექმენით Vehicle კლასის შვილობილი და დაარქვით ElectricCar რომელიც შეიცავს დამატებით ფროფერთის - batteryCapacity (ბატარეის ტევადობა).
•	თავიდან აღწერეთ ამ კლასში drive(miles) მეთოდი რომ ყოველ 10 მილზე 1 ით შეამციროს batteryCapacity.

*/

class ElectricCar extends Vehicle {

    batteryCapacity;

    constructor(brand, model, year, mileage, batteryCapacity) {
        super(brand, model, year, mileage);
        this.batteryCapacity = batteryCapacity;
    }

    drive(miles) {
        this.setMileage(this.getMileage() + miles);
        this.batteryCapacity -= miles / 10;
    }

}