const promisesOne = new Promise(function(resolve, reject) {
    
// do asyn task 
// db call , cryptograpgh, network

setTimeout(function(){
   
    console.log("Async task is complete");

    resolve();
}, 1000);

});

promisesOne.then(function(){

    console.log('promises completed');
    

})


/////////////////    two  type      //////////////// 



new Promise(function (resolve, reject) {
    
    setTimeout(function () {
        
        console.log('Async task is complet');
        resolve();

        
    }, 1000)

}).then(function() {
    
    console.log('Asyn 2 resloved');
    
})


////////// three    type  /////////////////

const PromiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){

        resolve({username: "chai", email : "krishns@gmail.com"})
    }, 1000)
})


PromiseThree.then(function(user) {

console.log('user');

})


////////////// four /////////////

const PromiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){

        let error = true
        if(!error) {
            resolve({user : "krishna", password : "123"})
    }
    else {

        reject("error : somting worng")
    }

    }, 1000);
})

PromiseFour
.then((user) => {

    console.log('user');
    return user.username
    

})
.then((username) => {

console.log('username');

})
.catch(function(error) {
    
    console.log(error);
    
}).finally(()=> console.log("the promise is either resolve or reject"))


 