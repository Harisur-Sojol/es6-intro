// onek gula parameter hole
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2, 5, 10);
// console.log(result);

//ekta parameter hole...
const tenTimes = (num4) => num4 * 10
const output = tenTimes(5);
// console.log(output)

//parameter na thakle
const getNmae  = () => 'Brandon teylor'
const name = getNmae();
// console.log(name)

// multi tasking
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x-y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(12,5)
console.log(total)