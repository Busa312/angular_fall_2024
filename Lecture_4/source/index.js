// const arr = [1, 2, 3, 'stringi', true, false];

// console.log(arr);

// const arr1 = new Array(1, 2, 3, 4);

// console.log(arr1);

// const arr2 = Array.of(1, 'rame', true);

// console.log(arr2);

// const arr3 = Array.from('rame stringi');

// console.log(arr3);

// let str = 'rame, nebismieri, stringi';

// console.log(str.split(', '))

const arr4 = [1, 2, 3];

// console.log(typeof arr4);

// console.log(Array.isArray(arr4));
// console.log(Array.isArray('asdasd'));

// console.log(arr4.length);

// console.log(arr4[2])
// console.log(arr4[1])

// arr4[0] = 'pirveli elementi';

// arr4[5] = 'meotxe';

// console.log(arr4)

// arr4.push('bolo');
// arr4.push('kidev ertxel damatebuli');
// console.log(arr4) // [ 1, 2, 3, 'bolo', 'kidev ertxel damatebuli' ]
// console.log(arr4.pop());
// console.log(arr4.shift());
// arr4.unshift('dasawyisi');
// console.log(arr4.splice(1, 3));
// console.log(arr4.splice(1));

// console.log(arr4)


// const arr5 = [3, 6, 1, 2, 0, 10, 9];
                    
// const compareFunc = (a, b) => a - b; // 2, 3 =>  -1
// // const compareFunc2 = (a, b) => b - a;

// arr5.sort(compareFunc).reverse();

// arr5.fill(0)

// console.log(arr5)

// ASCII
// 
// const arr6 = ['a', 'b', 'c', 'd', 'A', 'D'];

// arr6.sort();
// console.log(arr6)

// let arr7 = [1, 2, 3];
// let arr8 = [4, 5, 6];

// let modifiedArr = arr8.concat(arr7);

// console.log(arr8.concat(arr7));

// console.log([1, 2, 3].join(', '));
// console.log(['ra', 'kargi', 'dgea'].join(''));

// const arr9 = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr9.slice(2, 5));
// console.log(arr9.slice(2));

// const arr10 = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, 15, [16, 17, 18]]]]]];

//console.log(arr10);

// let flattendArr = arr10.flat(Infinity);

// console.log(flattendArr)

// const arr11 = [1, 'rame stringi', '2', true, 'rame stringi'];

// console.log(arr11.findIndex((element) => element === 'rame stringi'));

// console.log(arr11.lastIndexOf('rame stringi', 3));
// console.log(arr11.indexOf('rame stringi'));

const arr12 = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr12.length; i++) {

//     if (arr12[i] % 2 === 0) {
//         console.log(arr12[i]);
//     }

// }

// let j = 0;

// while(j < arr12.length) {
//     console.log(arr12[j]);
//     j++;
// }
const arr13 = ['rame', 'masivis', 'shesaqmnelad', 'viyenebt'];

// arr13.forEach(
//     (element, idx) => {
//         console.log(idx);
//         console.log(element);
//     }
// )


// const filteredArray = arr12.filter(
//     (element) => element % 3 === 0
// );

// console.log(filteredArray);

// const mappedArray = arr12.map(
//     (element) => element * element 
// );

// console.log(mappedArray);


// const reducedArray = arr12.reduce(
//     (element1, element2) => {
//         return element1 * element2
//     }
// )


// const reducedArray2 = arr13.reduceRight(
//     (a, b) => a + ' ' + b
// )

// console.log(reducedArray2);


// const arr14 = [2, 4, 6, 8, 10, 9];


// const checkedValue = arr14.every(
//     (element) => element % 2 === 0
// )

// const checkedValue2 = arr14.some(
//     (element) => element % 2 === 0
// )

// console.log(checkedValue)
// console.log(checkedValue2)
