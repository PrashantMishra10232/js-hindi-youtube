// for (let index = 30; index >=0; index--) {
//     console.log(index);
// }


//Question two /////////////////////////////////////////////////////
function calculateSum (){
    let a = 0;
    for (let index = 0; index < 1000000000; index++) {
        a = a +index;
    }
    return a;
}
const startTime = new Date();
const startTimeInMs = startTime.getTime();
calculateSum();
const endTime = new Date();
const endTimeInMs = endTime.getTime();

console.log(endTimeInMs - startTimeInMs);


// question 3 ////////////terminal clock///////////////////////////////////////

