// for (let index = 30; index >=0; index--) {
//     console.log(index);
// }


//Question two /////////////////////////////////////////////////////
let startTIme = new Date();

setTimeout(()=> {
    let endTime = new Date();
    let timeDifference = endTime-startTIme;
    console.log(timeDifference+"ms");
},1000);

// question 3 ////////////terminal clock///////////////////////////////////////

function padZero(num){
    return num<10?0+num:num;
}

function DisplayClock(){
    setInterval(()=>{
        const now = new Date();
        const hours = padZero(now.getHours());
        const minutes = padZero(now.getMinutes());
        const seconds = padZero(now.getSeconds());
        const timeString = `${hours}:${minutes}:${seconds}`

        console.clear();
        console.log(timeString);

    },1000)
}

DisplayClock();