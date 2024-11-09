

interface IPerson {
    name: string;
    age: number;
    greet(): string;
}

interface IEmployee extends IPerson {
    empId: string;
    yearsOfExp: number;
}

class Laywer implements IPerson {
    name: string;
    age: number;


    greet(): string {
        return `hello. my name is ${this.name}. I'm a lawyer`;
    }

}

class Doctor implements IPerson {
    name: string;
    age: number;


    greet(): string {
        throw new Error("Method not implemented.");
    }
    
}


const doctor = new Doctor();
const laywer = new Laywer();

const array: IPerson[] = [doctor, laywer];


class CarNew {
    public model: string; // nebismieri adgilidan shegvidzlia wakiTxva/shecvla
    private mileage: number; // private - mxolod class is shignidan sheidzleba wakitxva/shecvla
    protected brand: string; // proitected - mxolod classis shignidan da shvilobilidan sheidzleba wakitxva/shecvla

    constructor(model: string, mileage: number, brand: string) {
        this.model = model;
        this.mileage = mileage;
        this.brand = brand;
    }
}


interface IShape {
    area(): number;
}

class Circle implements IShape {
    private radius: number;
    
    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadius() {
        return this.radius;
    }

    public area(): number {
        return Math.PI * this.radius ** 2;
    }
    
}

class Rectangle implements IShape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getWidth() {
        return this.width;
    }

    public getHeight() {
        return this.width;
    }

    public area(): number {
        return this.width * this.height;
    }

    public static calculateArea(width: number, height: number) {
        return width * height;
    }
}

new Rectangle(5, 10).area();
Rectangle.calculateArea(5, 10);


class Square extends Rectangle {

    constructor(width: number) {
        super(width, width);
    }
}

class Triangle implements IShape {
    private a: number;
    private b: number;
    private c: number;
    private abAngle: number;


    public area(): number {
        throw new Error("Method not implemented.");
    }
    
}


abstract class Vehicle {
    abstract fuelType(): string;

    start() {
        console.log('engine has started');
    }
}

class Car extends Vehicle{

    start() {
        console.log('new start')
    }

    fuelType(): string {
        return 'gasoline';
    }
}

const car = new Car();

car.start();
console.log(car.fuelType())
