const name = "prashant"
const repoCount = 50

//console.log(name + repoCount + " " + "value");  //do not use it

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('prashant')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,4);
// console.log(newString);

// const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "  prashant  "
console.log(newStringOne);
console.log(newStringOne.trim()); 


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));


const game = "Assassin's Creed Odyssey"
console.log(game.split(' ')); //string to array