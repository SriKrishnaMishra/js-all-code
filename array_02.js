const hero1 = ['krishna jii', 'shiv jii', 'ram jii']
const hero2 = ['hanuman jii', 'ganesh jii', 'lakhaman jii']

const hero3 = hero1.concat(hero2);
console.log(hero3);


const all_new_hero = [...hero1, ...hero2]
console.log(all_new_hero) // spread element


const all_element = [1, 2, 3,[7, 6, 0], 4, [8, 5,9]]

const real_all_element = all_element.flat(Infinity)
console.log(real_all_element);


console.log(Array.isArray("Krishna"));
console.log(Array.from("Krishna")); // change in array

console.log(Array.from({name: "Krishna"})); // inserting method

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));