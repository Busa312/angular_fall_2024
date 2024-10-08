// dawere funqcia romelsac gadaecema stringi da printavs konsolshi
// dawere meore funqcia romelsac gadaecema stringi da pirveli funqcia 
// da idzaxebs pirvel funqcias stringis gadacemit



// arrow functioni
// gadaecema strinigi da bechdavs konsolshi
// const xFunc = (str) => {
//     console.log(str);
// }

// gadaecema ori parametri
// str - aris nebismieri stringi
// cb - callback funqcia
// function yFunc(str, cb) {
//     // idzaxebs callback funqcias da gadascems strings
//     cb(str);
// }

// vidzaxebt yFunc funqcias da gadavcemt nebismier strings
// da callback ad gadavcemt xFunc funqcias
// yFunc('rame stringi', xFunc);



// sheqmenit funcia romelsac gadaecema ori ricxvi
// aseve gadaecema ra operacia uinda chatardes am ricxvebze callback is saxit
// konsolshi daprintos mnishvneloba

// dajamebis funqcia
const sum = (num1, num2) => num1 + num2;

// namravlis funqcia
const multiply = (num1, num2) => num1 * num2;


// kalkulaciis fuqncia
// gadaecema ori ricxvi: num1, num2
// callback is saxit gadaecema operation argumenti
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

console.log(calculate(2, 3, sum))
console.log(calculate(2, 3, multiply))

