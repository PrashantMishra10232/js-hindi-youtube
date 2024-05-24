function findSum(n){
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
console.log("hello world-js");