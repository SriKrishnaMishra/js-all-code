// array 

const myArr = [0, 8, 5, 1, 6]
console.log(myArr[4]); // array start with 0 index

const myArr2 = new Array(1, 5 , 6, 7, 2)
console.log(myArr2[3]);

// array method 

myArr2.push(9);
console.log(myArr2);

myArr2.pop();


myArr2.unshift(22);

console.log(myArr2);
myArr2.shift();


//console.log(myArr2.indexOf(6));

const newArr = myArr2.join() 
// console.log(myArr2);
// console.log(newArr);

// slice , splice 

// console.log("A", myArr2);
// const my1 = myArr2.slice(1, 2)

// console.log(my1);
// console.log("B ", myArr2);


const hero1 = ['krishna jii', 'shiv jii', 'ram jii']
const hero2 = ['hanuman jii', 'ganesh jii', 'lakhaman jii']

const hero3 = hero1.concat(hero2);
console.log(hero3);
