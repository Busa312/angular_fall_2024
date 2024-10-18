// შექმენით ფუნქცია რომელსაც გადაეცემა მასივი (შეამოწმეთ რომ მასივია) 
// თუ არ არის მასივი გადაცემული დააბრუნოს ცარიელი მასივი- [ ],  
// თუ მასივია მაშინ გაფილტრე რომ დარჩეს მხოლოდ კენტი რიცხვები და დააბრუნე გაფილტრული მასივი

function filterOdd(array) {
    if (!Array.isArray(array)) {
        return [];
    }

    let filtered = array.filter((val) => val % 2 === 1);

    return filtered;
}

console.log(filterOdd('stringasdasd'));
console.log(filterOdd([1,2,3,4,5]));
console.log(filterOdd([2,4,6]));