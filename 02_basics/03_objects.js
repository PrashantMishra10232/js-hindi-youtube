//singleton

//object literals

//in case of symbol if you want to declare a symbol in a object you can not do it directly first you have a declare it outside the object
const mySym = Symbol("key1")
const jsUser = {
    name: "Prashant",
    "full name": "Mishra",
    [mySym]: "key1",
    age: 22,
    location: "jaipur",
    email: "prashant@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

console.log(jsUser.name);
console.log(jsUser["full name"]);  //see
console.log(jsUser[mySym]);
console.log(typeof mySym);
console.log(jsUser.email);

jsUser.email = "prashant@chatgpt.com"
console.log(jsUser.email);
//Object.freeze(jsUser)
jsUser.email = "prashant@microsoft.com"
console.log(jsUser.email);


jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greetingTwo());