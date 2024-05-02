//const instagram = new Object() // this a single ton object

const instagram = {} // this is mutiple obect 


instagram.id = "123abd"
instagram.name = "krishna"
instagram.isLogginIn = false

console.log(instagram);

const regularUser = {

    email : "dome@gmail.com",
    fullname : {

        username : {

            firstname : "ram",
            lastname :"god"
        }
    }
}

console.log(regularUser.fullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj4 = {5 : "a" , 6 : "b"}
// const obj3 = {obj1 , obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2,...obj4} // most comman use this case
console.log(obj3);

console.log(instagram);

 console.log(Object.keys(instagram));
 console.log(Object.values(instagram));
 console.log(Object.entries(instagram));

console.log(instagram.hasOwnProperty('isLoggedIn'));