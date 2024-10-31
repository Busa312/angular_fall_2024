// setTimeout(() => {
//     console.log('heyy')
// }, 5000);

// console.log('heyy 2222');

// setInterval(() => {
//     console.log('heyy');
// }, 2000);

// console.log('no interval');

// let promise = new Promise( (resolve, reject) => {
//     setTimeout(() => reject('heyy reject'), 3000);
// } );

// promise.then( (value) => {
//     console.log(value);
// }).catch(error => {
//     console.log("from catch: " + error);
// })


// function someAsyncFunction() {
//     let promise1 = new Promise((res, rej) => {
//         setTimeout(() => res('from async'), 2000);
//     });

//     return promise1;
// }

// async function asyncFunction2() {
//     try {
//         let data = await someAsyncFunction();
//         console.log('heyy');
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
// }


// asyncFunction2();

// let promise3 = new Promise((res, rej) => {
//     setTimeout(() => res(['Georgia', 'USA', 'Italy']), 3000);
// });

// let promise4 = new Promise((res, rej) => {
//     setTimeout(() => res(['GEL', 'USD', 'GPB', 'EUR']), 5000);
// });

// Promise.all([promise3, promise4]).then((value) => {
//     console.log(value[0][2]);
//     console.log(value[1])
// })

// Promise.race([promise3, promise4]).then(value => {
//     console.log(value);
// })


