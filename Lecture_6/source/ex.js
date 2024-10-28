// 1
// Given the object below, access and log the name and age properties using both dot notation and bracket notation.

const person = {
    name: "Emma",
    age: 28,
    country: "USA",
  };

// console.log(person.name);

// console.log(person[key]);

// 2
// Change the country property of the person object to "Canada". Print the updated object.

// person['country'] = 'Canada';


person.country = 'Canada'


// console.log(person)

// 3
// Add a gender property with the value "female" to the person object. Print the updated object.

// person['gender'] = 'female';

person.gender = 'female'

// console.log(person)
  
// 4
// Remove the age property from the person object and print the updated object.

delete person.age

// console.log(person)

// 5
//  use Object.keys() to log all the property names.

let keys =  Object.keys(person); // ['name', 'country', 'gender']

// keys.forEach((val) => {
//     console.log(val);
// })

// 6
// Use Object.values() to log all the property values 

let values = Object.values(person);

// values.forEach(val => {
//     console.log(val)
// })

let entries = Object.entries(person);


entries.forEach(pair => {
    console.log('-------------------');
    console.log(`${pair[0]} - ${pair[1]}`)
})