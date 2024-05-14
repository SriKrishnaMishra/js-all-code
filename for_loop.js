//const name = "krishna"

for (let i = 0; i <= 11; i++) {
    const element = i; {

        if(element == 6) {

        console.log("the best nums")
        }
    }
    console.log(element);
    
}




///////////////////////// 



for (let i = 1; i <= 10; i++) {

    console.log(`outer loop value ${i}`);
   
    for (let j = 1; j <= 10; j++) {
       
       // console.log(`inner loop value ${j} and inner loop value ${i}`)
        
       console.log(i + '*' + j + '=' + i * j );
    }
    
}

////////////////////////////// 


let myArray = ["good", "bad", "empty"]

console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];

    console.log(element);
    
}

///////////

for (let i = 0; i <= 20; i++) {

  if( i == 5)  {

      console.log("the best");
      break;
      // continue
    }
   console.log(`value of index ${i}`)
}