const money = 1000;


if(money < 200) {

  console.log("less than 200");

} 
else if(money < 500) {

    console.log("less than 500");
}

else if(money < 800) {

    console.log("less than 800");
}
else {

    console.log("less than 1200");
}

///////////////////////

// and

const username = true;
const password = true;

if(username && password) { // and statement

    console.log("Allow to login in ");
}

/// /////////////////

// or

const userloginemail = true;
const userlogingoogle = false;

if(userloginemail || userloginemail) { // or statement

    console.log("user login in ");
}