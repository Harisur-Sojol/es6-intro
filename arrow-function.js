//function declaration
function add(num1, num2) {
    return num1 + num2
}
const sum1 = add(15, 17);
// console.log(sum1);


//variable er modde o function likha jay
//function expression(anonymous)
const add2 = function (num3, num4) {
    return num3 + num4;
}
const sum2 = add(13, 17);
// console.log(sum2);


//Arrow function 
const add3 = (num5, num6) => num5 + num6;
const sum3 = add3(14, 17);
console.log(sum3);