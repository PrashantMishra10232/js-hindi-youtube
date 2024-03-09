// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);

//let myCreatedDate =  new Date(2023, 0, 12)  //month zero se start hongye
//console.log(myCreatedDate.toDateString());

// let myCreatedDate =  new Date(2023, 0, 12, 22, 3, 12) 
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate =  new Date("2023-01-14") 
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()
// console.log(myCreatedDate);
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.getMonth());
// console.log(myCreatedDate.getDay());

let newDate = new Date()

newDate.toLocaleString('default',{
    weekday: "long",
})