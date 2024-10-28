// Write a function capitalizeFirstLetter that takes a 
// string and capitalizes the first letter of each word.

// function capitalizeFirstLetter(str) {
//     if (typeof str !== 'string') {
//         throw new Error('wrong type');
//     }

//     let strArray = str.split(' ');

//     strArray = strArray.map(val => {
//         let firstLetter = val.substr(0, 1).toUpperCase();
//         let otherLetters = val.slice(1).toLowerCase();
//         return firstLetter + otherLetters;
//     });

//     return strArray.join(' ');
// }

// console.log(capitalizeFirstLetter('rame winAdadeba romelsac ramdenime sityva aqvs'));


// try {
//     capitalizeFirstLetter(123123);
// } catch(e) {
//     console.log(e.message);
// }

// Write a function findLongestWord that takes a 
// sentence and returns the longest word in that sentence.

// function findLongestWord(str) {
//     if (typeof str !== 'string') {
//         throw new Error('wrong type');
//     }

//     let strArray = str.split(' ');

//     let result = ''; // length === 0;

//     strArray.forEach(val => {
//         console.log('----------');
//         console.log(result);
//         console.log(val)
//         console.log('----------');
//         if (result.length < val.length) {
//             result = val;
//         }
//     });

//     return result;
// }

// console.log(findLongestWord('am winadadebashi vedzebt yvelaze grdzel sityvas'));


class DivideError extends Error {
    constructor(message) {
        super(message);
    }
}


function divide(a, b) {
    if (b === 0) {
        throw new DivideError('ar sheidzleba 0-ze gayofa')
    }
    return a / b;
}

try {
    console.log(divide(4,2));
    console.log(divide(10, 0));
} catch(e) {
    console.log(e.message)
}
finally {
    console.log(divide(10, 5));
}
