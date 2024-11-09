var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Laywer = /** @class */ (function () {
    function Laywer() {
    }
    Laywer.prototype.greet = function () {
        return "hello. my name is ".concat(this.name, ". I'm a lawyer");
    };
    return Laywer;
}());
var Doctor = /** @class */ (function () {
    function Doctor() {
    }
    Doctor.prototype.greet = function () {
        throw new Error("Method not implemented.");
    };
    return Doctor;
}());
var doctor = new Doctor();
var laywer = new Laywer();
var array = [doctor, laywer];
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.width;
    };
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.calculateArea = function (width, height) {
        return width * height;
    };
    return Rectangle;
}());
new Rectangle(5, 10).area();
Rectangle.calculateArea(5, 10);
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(Rectangle));
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.area = function () {
        throw new Error("Method not implemented.");
    };
    return Triangle;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.start = function () {
        console.log('engine has started');
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.start = function () {
        console.log('new start');
    };
    Car.prototype.fuelType = function () {
        return 'gasoline';
    };
    return Car;
}(Vehicle));
var car = new Car();
car.start();
console.log(car.fuelType());
