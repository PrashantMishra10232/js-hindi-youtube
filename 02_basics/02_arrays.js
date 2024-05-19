const marvel_heroes = ["thor","hulk","ironman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes] //merging arrays
// console.log(all_new_heroes);
// console.log(typeof all_heroes);

const another_array = [1,2,3,4,5,[4,5,6],7,8,9,[4,5,6,[1,2,3,4]]]
const real_another_array = another_array.flat(2)  //yeh array ko flat krke likhega jo array m array h unhe or (number) yeh number depth of array jha tk flat krna h dikhaega
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));  //converting any datatype to array
console.log(Array.from({name:"Hitesh"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  