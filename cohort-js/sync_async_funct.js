/*function findSum(n){
    let ans =0;
    for (let index = 0; index <= n; index++) {
        ans +=index;
        
    }
    console.log(ans); 
}

function sumTill100(){
    return findSum(100);
}

setTimeout(sumTill100,1000)
console.log("hello world-js");*/ //it is an asynchronus function

//another example and use of asynchronus function
// setTimeout
// readFile


const fs = require("fs");

// fs.readFile("a.txt","utf-8",function(err,data)
// {
//     console.log(err);
//     console.log(data);
// })

// console.log("done");

// function putCopyRightToFile(cb){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         data = data + "copyright 2020 harkirat singh"
//         fs.writeFile("a.txt",function(){
//             cb();
//         })
//     });
// }

// putCopyRightToFile(function(){
//     console.log("copyright has been put");
// })




/////////////////////////////////////////////////////////////////
//////////////Promises/////////////////////////


//wrapping another async fn
/*function myOwnSetTimeout(fn,duration){
    setTimeout(fn,duration);
}

myOwnSetTimeout(function() {
    console.log("hi there");
},1000)*/


//using promise
function myOwnSetTimeout(duration){
    let p = new Promise(function(resolve){
        //after one second call resolve
        setTimeout(resolve,1000)
    });
    return p;
}

const ans = myOwnSetTimeout(1000)
ans.then(function(){
    console.log("log the first thing");
});

  
