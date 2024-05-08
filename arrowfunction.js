const user = {

    username: "grapesh",
    price:60,

    welcomeMessage: function() {
            
        console.log(`${this.username}, welcome to my fruits store`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "banana"
user.welcomeMessage()

 console.log(this);


function copy() {
    //  let username = "rahul"
    // console.log(this.username);
}

// copy()


const letter = () => {
     let username = "rahul"
   console.log(this);
}
copy()





const addTwo = (num1 , num2) => {

    return num1 + num2
}

// console.log(addTwo(3, 5));



const add = (num1 , num2) => (num1 + num2) // no write { } bracket because of ()

console.log(add(3, 9));


const addone = (num1, num2) => ({username: "addition"}) 

console.log(addone(2,44));




