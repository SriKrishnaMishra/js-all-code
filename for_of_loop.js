// ///////   for_of  //////////

const arr = [1, 3, 4, 5, 6]

for (const num of arr) {
    
    console.log(num);
}

const str = "helloworld"

for (const strring of str) {
    
    console.log(strring);
}



////////////  map /////////////



const map = new Map() 

map.set('in' , "indian")
map.set('np', "nepal")
map.set('ban', "bangaladash")

//console.log(map);


for (const [key, value] of map) {
    
    console.log(key, ':- ', value);
}