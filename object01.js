// singleton  or non-singleton
//Object.create

// object literals

const sym = Symbol("mykey1")

const JsUser = {

    name: "krishna",
    age: 21,
    "full name" : "sri krishna mishra",
    location: "roorkee",
    email: "krihnsa@gmail.com",
    isLoggendIn : true,
    lastLoginDays : ["monday", "sunday"],
   
  // symbol 
  [sym]: "mykey1",
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]);

console.log(typeof JsUser[sym]);

JsUser.email = "krishnamishra@gmail.com"
//Object.freeze(JsUser)

JsUser.email = "mishrakirhna@gmaail.com"
console.log(JsUser);

JsUser.greeting = function () {
    
    console.log("Hello js user");
}


JsUser.greetingTwo= function () {
    
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());