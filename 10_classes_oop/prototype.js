// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);  // isme hum object pe ek nya function daal re h ab array, string, function yeh tino hi object se hoke hi jaate h ton in tino pe object ki property hoti h 
}

Array.prototype.heyHitesh = function(){  //yha humne array ko property di toh woh object ko nhi milegi  ya function or string ko bhi nhi milegi
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh() // yeh work krega kyuki direct array ki propertry add hui hai
// heroPower.heyHitesh() //yeh work nhi krega kyuki object ko array ki power nhi milegi


// inheritance////

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //yeh prototypal inheritance h different object ki power different object ko dera h pr yeh pura code style hai
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()