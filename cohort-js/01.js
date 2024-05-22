console.log("Hello world");

// let firstName = "prashant";
// let age = 22;
// let isMarried = true;

// if (isMarried) {
//     console.log(firstName + " is married");
// }
// else(
//     console.log(firstName + " is not married")
// )


//////////////////////////////////////////////////

// let FirstName = "Prashant"
// let LastName = "Mishra"
// console.log("Welcome " + FirstName +" " +  LastName);

//////////////////////////////////////////////////

// let id = "Salman"
// gender = "female"

// if (gender == "male") {
//     console.log("hi boy");
// }
// else{
//     console.log("hi girl")
// }

//////////////////////////////////////////////////

// for(let i = 0;i<=1000;i++){
//     console.log(i);
// }


////////////////////////////////////////////////////
//multiple functions and call back function

function calculateArithmetic(a,b,type){
    if (type == "sum") {
        return a+b;
    }
    if (type == "sub") {
        return a-b;
    }
}

function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
// const value = calculateArithmetic(1,2,"sub");
// console.log(value);

// now lets do it as a call back function and lets understand it

function calculatesum(a,b,sumOfIt){
    const ans = sumOfIt(a,b)
        return ans;
    
}
function sum(a,b){
    return a+b;
}

const value = calculatesum(1,2,sum);
console.log(value);

////////////////////////////////////////////

function greet(){
    console.log(" hello world");
}

setTimeout(greet,1*1000); //jo isme second argument h woh time decide kr ra h ki kitne time baad first argument ko call krenge its also a call back function
// setInterval(greet,1*1000)