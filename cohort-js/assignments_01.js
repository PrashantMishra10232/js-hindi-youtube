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



// ////////////////////////////////////////////////////Question 4 Easy (FindLargestElement)///////////////////////////////////////////////////////////
function findLargestElement(numbers) {
    var max = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i]
        }
    }
    return max;
}
// ////////////////////////////////////////////////////Question 5 Medium (CountVowels)///////////////////////////////////////////////////////////
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let temp = 0;
  for(let i = 0; i < vowels.length; i++){
    for(let j = 0; j < str.length; j++){
      if(str[j].toLowerCase() == vowels[i]){
        temp++;
      }
    }
  }
  return temp;
}

