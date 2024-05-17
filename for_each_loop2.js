const coding= ["js", "python", "sql", "html"]


const value = coding.forEach((item) => {

    console.log(item);

    return item;
})


//////////////     nums /////   

// const nums = [1, 3, 4, 2, 6, 5 , 7, 9] 

// const newnum = nums.filter( (num) =>{return  num > 5})



/////////////////////////

// const newNum = [2, 54, 5 , 1 , 6, 22]
// newNum.forEach( (nums) => {

//     if(nums > 5) {
   
//         newNum.push(nums)

//     }
// })

// console.log(newNum);



//////////////////////// 

const myword = [1, 3, 4, 2, 5, 6]

const newcount = myword.map((num) =>{ return num + 10})
console.log(newcount);

//////////////////////// map    ///////////

const word = [1, 2, 3, 4, 5, 6]

const newWord = word 
                .map((num) => num * 10)
                .map((num) => num + 1)

console.log(newWord);



///////// reduce /////////

const digit = [1, 2, 3]

// const myTotal = digit.reduce(function(acc, currval) {

//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0) 

const myTotal = digit.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);
