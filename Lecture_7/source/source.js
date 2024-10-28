// let text = 'Javascript';

// console.log(text.length);


// let textToUpper = 'ragac tExti 123';

// console.log(textToUpper.toUpperCase());

// let textToLower = 'RAGAC TeXTI 123';

// console.log(textToLower.toLowerCase());

let txt = 'hello world';

// console.log(txt.indexOf('l'));

// console.log(txt.indexOf('world'));

// console.log(txt.indexOf('rame'));

// console.log(txt.lastIndexOf('l'));

// console.log(txt.includes('world'));

// console.log(txt.includes('javascript'));

//console.log(txt.slice(3, 7));

// console.log(txt.substr(4, 4));

// let txt2 = 'hello, hello, hello';

// console.log(txt2.replace('hello', 'hi'));

// console.log(txt2.replaceAll('hello', 'hi'));

// let txt3 = '        realuri teqsti     ';


// console.log(txt3.trim());
// console.log(txt3.trimEnd());
// console.log(txt3.trimStart());

// let txt4 = '1';
// let txt5 = '24';
// let txt6 = '363';

// console.log(txt4.padStart(5, '0'));
// console.log(txt5.padStart(5, '0'));
// console.log(txt6.padStart(5, '0'));

// console.log(txt4.padEnd(5, '0'));
// console.log(txt5.padEnd(5, '0'));
// console.log(txt6.padEnd(5, '0'));

// console.log('it\'s an apple');

// console.log("it's an apple");

// console.log("quote - \n \" rame \"");

// console.log('\\ asda');

// ``

// let name = 'giorgi';
// let age = 20;

// console.log('hello my name is ' + name + ' i am ' + age + ' old');
// console.log(`hello my name is ${name} i am ${age} old`)

// syntax error:

// for {let i = }

// ReferenceError: 
// console.log(year)


// typeError:
// let x = [1, 2, 3];

// x.padStart(3, '9');


// let x = '[1, 2, 3]';

// try {
//     x.padStart(3, '9');

//     console.log('no errors');
// } catch(e) {
//     // console.log(e);
//     console.log('we catched an error');
// } finally {
//     console.log('finally');
// }


// console.log('yaaaay');

class AdditionError extends Error {

    constructor(message) {
        super(message);
    }

}


function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new AdditionError('araswori tipis parametrebia');
    }

    return a + b;
}


try {
    console.log(add(1, 2));
    console.log(add('1', 'asd'));
} catch(e) {
    console.log(e.message);
}





