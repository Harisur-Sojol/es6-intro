//ekta string ei(' ') quotation use kore multiline korle error dibe.....

// const multiline = 'this is my first line
//    this is my second line';

// console.log(multiline)


//tokhon ei(` `) quotation use korte hbe.....
const multilineNew = `this is my first line.
this is my second kine`
// console.log(multilineNew)

//Dynamic String
const old = '<h3 class = "friend-name">friend-5</h3>'

const count = 5;
const new1 = `<h3 class = "friend-name">friend-${count}</h3>`
// console.log(new1);


const friends = ['abul', 'babul', 'kabul', 'sabul'];
const new2 = `<h3 class = "friend-name">friend-${friends.length}</h3>`
// console.log(new2)


//eta ager rules onujai
const first = 'Mamun'
const last = 'chowdhury'
const fullOld = first + ' ' + last
console.log(fullOld);

//dynamic vhabe 
const first1 = 'Mamun'
const last1 = 'chowdhury'
const fullNew = `${first1} ${last1}`