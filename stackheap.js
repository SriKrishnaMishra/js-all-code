
// stack (primitive data type) // copy value
// heap (non primitive data type) // refernce value


// stack (primitive datatype)
let myname = "sri krishan mishra"

let anothername  = myname
anothername = "krishna mishra"

console.log(myname);
console.log(anothername);



// heap and non premitive datatype

let userOne = {

    name:"krishna",
    roll: 21,
}

let userTwo = userOne
userTwo.name = "hanuman"
   


console.log(userOne.name);
console.log(userTwo.name);