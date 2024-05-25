/*var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo");
    },1000)
    
});

function callback(){
    console.log(d);
}
console.log(d);
d.then(callback)*/

//another normal syntax ////
/*function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        // do some async logic here
        resolve("hi there")
    });
    return p;
}

function main(){
    kiratsAsyncFunction().then(function(value){
        console.log(value);
    });
}

main();*/




///////////////////////////////////////////////////////////////////////////
///////Async/Await syntax////////////////

function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        // do some async logic here
        resolve("hi there")
    });
    return p;
}

async function main(){
    const value = await kiratsAsyncFunction();
    console.log(value);
}

main();