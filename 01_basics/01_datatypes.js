"use strict"; //treat all JS code as newer version

//alert(3+3) //we are using node.js not browser

console.log(3+3)




/*primitive datatype (call by value)*/

// number => 2 to power 53
let age  = 18
let age2 = 100.4
// bigint
let bigNumber = 34564789452356n
//string => ""
let name = "prashant"
//boolean => ture/false
let isloggedIn = true
// null => standalone value
let state = null
// undefined =>
let userEmail;
let userEmail2 = undefined
// symbol => unique
const id = Symbol('123')
const anotherId = Symbol('123')


/*reference (non primitive datatype)*/

//array, objects, functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "prashant",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myObj); //to check the type of any datatype