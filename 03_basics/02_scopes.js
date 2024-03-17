let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30
    //console.log("Inner: ", a);
}

//console.log(a);
//console.log(b);
//console.log(c); //bs var ki value aari h isliye isse use mt kro isse errors aenge

function one(){
    const userName = "Hitesh"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    //console.log(website);

    two()
}

//one()

if (true) {
    const userName = "hitesh"
    if(userName==="hitesh"){
        const website = " youtube"
        console.log(userName + website);
    }
    //console.log(website);
}
//console.log(userName);


//+++++++++++++++interesting+++++++++++++++++++++++
console.log(addOne(5))  // dono tarike se work krega 
function addOne(num){
    return num +1
}
//console.log(addOne(5))


//function ko declare krne ka alg tarika
//console.log(addTwo(5)) // is tarike se yeh work ni krega
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))