const initialArray = [1,2,3];
const secondArray = [4,5,6];

/////////////////////simple functions to manupilate arrays//////////////////////////

// initialArray.push(2);  //to add something in the end of the array
// initialArray.pop();       //to remove something from the end
// initialArray.shift();   //to remove something from the start
// initialArray.unshift(0);  // to add something in the start
console.log(initialArray);

console.log(initialArray.concat(secondArray));  //merge two arrays//


/////////////////////////forEach////////////////////////

function firstThing(str){
    console.log(str + " is the string here");
}

initialArray.forEach(firstThing); //forEach takes a function
