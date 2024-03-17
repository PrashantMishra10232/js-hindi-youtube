// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(3, 4)

// function addTwoNumbers(number1, number2){
//     //    let result = number1 + number2
//     //    return result

//           return number1 + number2
//     }
//     const result = addTwoNumbers(4,5)
//     console.log("result: ", result);


//     function loginUserMessage(userName = "sam"){
//         // if(userName===undefined){
//         //     console.log("Please enter a userName");
//         //     return
//         // }
//         if(!userName){  //same kaam krega as above
//             console.log("Please enter a userName");
//             return
//         }
//         return `${userName} just logged in`
//     }

//     console.log(loginUserMessage("hitesh"));


// function CalculateCartPrice(val1, val2,...num1){
//     return num1
// }
// console.log(CalculateCartPrice(200, 300, 400));

// const user = {
//     userName: "Hitesh",
//     price: 999
// }

// function handleObject (anyObject){
//     console.log(`the user is ${anyObject.userName} and price is ${anyObject.price}`);
// }

// //handleObject(user) //direct bhi object pass kr skte hai
// handleObject({
//     userName: "sam",
//     price: 858
// })


const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400,500]));