function saymyname() {
    
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("n");
    console.log("a");
    }
    
    saymyname()  

    // add 
    function  addTwoNumber(num1 , num2) {

    //    let ans = num1 + num2;
    //    return ans;

    return num1 + num2;
    }

    const ans = addTwoNumber(3, 454)

    console.log(ans);

    ///////////////////////

    function loginUserMessage(userName = "sir krishna") {
         if(userName === undefined) // !unsename 
            {
            console.log("please enter your user name ");
            return 
         }
        return `${userName} just loggin in`

    }

    console.log(loginUserMessage("krishna")); 