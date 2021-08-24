//jodi argument 1 ta pass kintu parameter 2ta thake tokhn jogfol ber kori evhabe...

// option - 1

// function add(num1, num2){
//     if(num2 == undefined){
//         num2 = 0
//     }
//     const total = num1 + num2;
//     return total
// }
// const result = add(15);
// console.log(result);

//option - 2

// function add(num1, num2){
//     num2 = num2 || 0
//     const total = num1 + num2;
//     return total
// }
// const result = add(15);
// console.log(result);

// option - 3----es6 diye

function add(num1, num2 = 0) {
    const total = num1 + num2;
    return total
}
const result = add(15);
// console.log(result);


function fullName(first, last = 'chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const nam = fullName('aminul');
console.log(nam);