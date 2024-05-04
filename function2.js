/// calcualte 


function calculatecartPrice(val1, val2, ...num1) {

    return num1
}

console.log(calculatecartPrice(200, 499, 600, 300));


////////////////

const user = {

    username: "krishna",
    prices:200,


}

function handleobject (anyobject){
    
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleobject(user) // object
handleobject ({

    username: "hanuman jii",
    price:"unlimited",
})


// array 

const myArray = [200, 422, 552,723, 211] 

function returnans(getArray) {

    return getArray[3]
}

console.log(returnans(myArray));