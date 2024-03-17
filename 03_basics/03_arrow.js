const user = {
    username: "hitesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); 
    }
}

// user.welcomemessage()
// user.username = " sam"
// user.welcomemessage()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai() //nahi work krega kyuki this functions m work nhi krta object m krta hai


//arrow function hai pr usme bhi work ni krega this
const chai = ()=>{
    let username = "hitesh"
    console.log(this.username);
}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//console.log(addTwo(3,4));

//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3,4));