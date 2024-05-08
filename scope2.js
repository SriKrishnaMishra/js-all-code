function first() {

    const username = "krishna"

    function second() {

        const knownis = "god"
        console.log(username);
    }

    // console.log(knownis);
    second()
}

first()


////////////////////////////////////////////////////////

if(true) {

    const username = "hanuman"
    if(username === "hanuman") {

        const knownis = " god "
        console.log(username + knownis);
    }

    // console.log(knownis);
    console.log(username);
}

// console.log(username);


///////           ++++++ vip ++++++++              /////////

addone(5)
console.log(addone(5));


function addone(num) {

    return num + 1
}


//// both are same  //////////// but different 

const addTwo = function(num) {

    return num + 2
}

addTwo(5)