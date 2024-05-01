const num = 400
console.log(num);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString);// change in string

console.log(balance.toString().length); 
console.log(balance.toFixed(1)); // fixed size


const otherNum = 34.99;
console.log(otherNum.toPrecision(3)); // round off

const thoushand = 100000;
console.log(thoushand.toLocaleString('en-IN')); // change in indian system

////////////////////////  Math  ///////////////////////////

console.log(Math);
console.log(Math.abs(-8)); // only negitive value change into positive
console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.max(4, 5, 2, 6, 7));
console.log(Math.min(2, 5, 9, 1, 6));


// random value

console.log(Math.random());
console.log((Math.random() * 10 ) + 1);
console.log(Math.floor(Math.random() * 10 ) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * ( max - min + 1)) + min)
