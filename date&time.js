// dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatDate = new Date(2024, 11 , 11)
console.log(myCreatDate.toDateString());
console.log(myCreatDate.toLocaleString());


let myTimeStamp = Date.now();

console.log(myTimeStamp );
console.log(myCreatDate.getTime());
console.log(Math.floor(Date.now() / 1000));


let commanDate = new Date();
console.log(commanDate);
console.log(commanDate.getMonth() + 1);
console.log(commanDate.getDay());

commanDate.toLocaleString('default',  {

    weekday: "long",

})