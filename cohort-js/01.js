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

// function calculateArithmetic(a,b,type){
//     if (type == "sum") {
//         return a+b;
//     }
//     if (type == "sub") {
//         return a-b;
//     }
// }

// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// const value = calculateArithmetic(1,2,"sub");
// console.log(value);

// now lets do it as a call back function and lets understand it

// function calculatesum(a,b,sumOfIt){
//     const ans = sumOfIt(a,b)
//         return ans;
    
// }
// function sum(a,b){
//     return a+b;
// }

// const value = calculatesum(1,2,sum);
// console.log(value);

////////////////////////////////////////////

// function greet(){
//     console.log(" hello world");
// }

// setTimeout(greet,1*1000); //jo isme second argument h woh time decide kr ra h ki kitne time baad first argument ko call krenge its also a call back function
// setInterval(greet,1*1000)


/////////////////////////////////////////////////////////////////////////
// function findIndexOf (str,target){
//     console.log("orignal string:", str);
//     console.log("length:", str.length);
//     console.log("Index:", str.indexOf(target));
//     console.log("Index:", str.lastIndexOf(target));
// }

// findIndexOf("hello world world world", "world")

///////////////////////////////////////////////////////////////////////
// function getSlice(str, start, end){
//     console.log("orignal string:", str);
//     console.log("After slice:",str.slice(start,end));
// }

// getSlice("helloworld",0,5)

// //////////////////
// let ans = "tharkiratsingh".slice(2,6);
// let ans2 = "tharkiratsingh".substr(2,6); //yeh jo second argument h yeh length of substring puchta h index se iska koi lena dena nhi h
// console.log(ans);
// console.log(ans2);

// ////////////////////
// function cutIt(str, startIndex, endIndex){
//     let newStr = "";
//     for (let i = 0; i < str.length; i++) {
//         if(i>=startIndex && i<=endIndex){
//             newStr = newStr +str[i];
//         }
        
//     }
//     return newStr;
// }
// const value = "Prashant Mishra"
// console.log(cutIt(value, 1,5));


////////////////////////////////replace string//////////////////////////////////////////
// function replacString(str,target,replacement){
//     console.log("originalString:",str);
//     console.log(str.replace(target,replacement));
// }

// const str = "hello world"
// console.log(str.replace("world","javaScript"));

// function splitString(str, separator){
//     console.log("originalString:",str);
//     console.log(str.split(separator));
// }
// const str = "hello world"
// const value = "hello world"
// const words = value.split(" ");
// console.log(words);
// console.log(splitString("hello world", " "));

/////////////////////////////////////////////////////////////



