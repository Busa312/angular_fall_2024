function getValue(value) {
    return value;
}
getValue(5);
getValue('5');
function getLength(value) {
    return value.length;
}
function addLengths(val1, val2) {
    return val1.length + val2.length;
}
addLengths([1, 2, 3], 'sadasdasd');
var obj;
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    return GenericClass;
}());
function printID(id) {
    console.log(id);
}
var empObject = {
    name: 'asdas',
    employeeID: '12341234'
};
var a = 'YES';
var b = 'NO';
// type C = HasLength<string>;
// function newFunc<HasLength>(val: HasLength) {
//     type C = HasLength<string>;
// }
function printLength(val) {
    if (typeof val === 'string') {
        console.log(val.length);
    }
    else {
        console.log(val.toString().length);
    }
}
var dog1 = {
    bark: function () {
        console.log('woof');
    }
};
function useProperty(obj) {
    if ('bark' in obj) {
        obj.bark();
    }
    else {
        console.log('can not bark');
    }
}
// useProperty(dog1);
// useProperty({});
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.bark = function () {
        console.log(this.name + ': woof');
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.meow = function () {
        console.log(this.name + ': meoww');
    };
    return Cat;
}());
function anotherFunc(val) {
    if (val instanceof Dog) {
        val.bark();
    }
    else {
        val.meow();
    }
}
var cat = new Cat('garfildi');
var dog = new Dog('tyson');
anotherFunc(cat);
anotherFunc(dog);
