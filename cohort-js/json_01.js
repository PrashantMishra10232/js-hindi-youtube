/*const users = {
    name: "harkirat",
    age: 24,
    gender: "male"
}
console.log(users["gender"]);*/

//pr ami yeh kisi dusre admi ko send nhi kr skta woh nhi smjh paega idk kyu nhi pr nhi
//that's why we use some json functions
//pehle is object ko string m convert krdo
const users = `{"name": "harkirat", "age": 24, "gender": "male"}` //most of the time data string ki form m hi milta h isliye parse ka use krna pdta h
// console.log(users["name"]); //mai ab users ko ese call nhi kr skta 
//pehle isse object m convert krna pdega 

//json.parse (string to object)
//json.stringify (object to string)

const user = JSON.parse(users)
console.log(user["name"]);

//ab agr object mein ho or string m chahiye toh stringify use krna pdega

const users2 = {
    name: "harkirat",
    age: 24,
    gender: "male"
}

const user2 = JSON.stringify(users2);
console.log(user2);