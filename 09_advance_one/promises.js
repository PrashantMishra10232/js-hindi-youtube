// const promiseOne = new Promise(function(resolve,reject){
//     //Do any async task
//     //DB calls, cryptography,network
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

//
// new Promise (function(resolve,request){
//     setTimeout(function(){
//         resolve({userName:"Prashant", email: "prashantsher@hogyne na dher.com"})
//     },1000)
    
// }).then(function(user){
//     console.log(user);
// })


//
// const promiseThree  = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         let error = false; // true rakho toh error aaega false rakhoge toh nhi aaega
//         if(!error){
//             resolve({userName:"Prashant", email: "prashantsher@hogyne na dher.com"})
//         }
//         else{
//             reject('Error: js went wrong')
//         }
        
//     },1000)
    
// })

// promiseThree
// .then(function(user){
//     console.log(user);
//     return user.userName
// })
// .then((userName)=>{
//     console.log(userName);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("either resolved or rejected");
// })

//
// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error = true; // true rakho toh error aaega false rakhoge toh nhi aaega
//         if(!error){
//             resolve({userName:"javascript", password: "123"})
//         }
//         else{
//             reject('Error: js went wrong')
//         }
        
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()  // awit hr us function m lgegea jisme time consume hoga
//         console.log(data);
//     } catch (error) {
//         console.log("e: ", error);
//     }
// }

// getAllUsers();

///use then catch method
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response .json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{console.log(error);})