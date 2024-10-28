// let obj = {
//     name: 'busa',
//     age: 22
// }


// let obj1 = {
//     model: 'e-class',
//     year: 2014,
//     drive: function() {
//         console.log('driving');
//     },
//     getModel() {
//         console.log(`model is: ${this.model}`);
//     }
// }

// console.log(obj1.model)

//obj1.model = 's-class';

// console.log(obj1.model)

// obj1.brand = 'Mercedes Benz'

// delete obj1.year

// obj1.drive();

// obj1.getModel()

//console.log(obj1)

// let obj2 = {}

// for (let i = 0; i < 10; i++) {
//     obj2[i] = i;
// }

// console.log(obj2);

// let person = {
//     name: 'ragac',
//     privateId: '01010101',
// }

// Object.freeze(person);

// person.privateId = 'saertod sxva stringi'
// person.lastName = 'gvari'

// console.log(person)

// Object.seal(person);


// person.name = 'axali saxeli'

// delete person.privateId

// person.lastName = 'gvari'

// console.log(person);

// let obj3 = {
//     prop1: 'ragac',
//     prop2: 'kide ragac',
//     prop5: 'pirveli obieqti'
// }

// let obj4 = {
//     prop3: 'mesame',
//     prop4: 'meotxe',
//     prop5: 'meore obieqti'
// }

// Object.freeze(obj3)

// let obj5 = Object.assign(obj3, obj4);
// let obj6 = {
//     ...obj3,
//     ...obj4
// }

// console.log(obj6)
// console.log(obj5)


let obj7 = {
    prop1: 'ragac',
    prop2: 'kide ragac',
    prop3: 'pirveli obieqti',
    prop4: {
        p1: 'obieqtshi shignit'
    }
}

// let obj9 = obj7;

// let obj8 = {...obj7}

// obj7.prop1 = 'axali ragac'
// obj7.prop4.p1 = 'shyecvlili p1'

// console.log(obj8)
// console.log(obj9)


// let obj10 = structuredClone(obj7);

// obj10.prop4.p1 = 'shecvlili p1'


// console.log(obj7);
// console.log(obj10);

// console.log(Object.keys(obj7))

// console.log(Object.values(obj7))

// console.log(Object.entries(obj7))


// let prop1 = obj7.prop1;
// let prop2 = obj7.prop2;

let {prop1, prop4} = obj7;

// console.log(prop1);
// console.log(prop4);



class Person {
    name = 'ragac'
    age = 'aseve ragac'

    metodi() {
        console.log('priontavs')
    }
}

let klasisObieqti = new Person();

console.log(klasisObieqti)