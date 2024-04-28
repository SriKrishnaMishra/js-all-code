const name = "krishna"

const rollnum = 21

console.log(name + rollnum);


console.log(`hello i am ${name} and my rollnum is ${rollnum}`);


const gameName = new String('krishna')

console.log(gameName[0]);
console.log(gameName.length)

console.log(gameName.toLocaleUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(2, 5);
console.log(newString);

const anotherString = gameName.slice(-2, 6);
console.log(anotherString);


const newStringOne = "   shiv  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://krishna.com/krishna%21mishra"
console.log(url.replace('%21', '-'));

console.log(url.includes('krishna'));