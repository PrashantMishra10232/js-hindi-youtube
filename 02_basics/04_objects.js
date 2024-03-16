//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "0124abc"
tinderUser.name = "Harry"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const newUser = {
    email: "some@google.com",
    fullName: {
        userfullname: {
            firstname: "Prashant",
            lastname: "Mishra"
        }
    }
}

//console.log(newUser.fullName.userfullname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'a', 6: 'b'}

//const obj4 = {obj1, obj2} //not doing it properly
//const obj4 = Object.assign({}, obj1, obj2, obj3) //can do it

const obj4 = {...obj1, ...obj2, ...obj3} //best and easy
//console.log(obj4);

const user = [
    {
        email: "sum@gomd.com"
    },
    {

    }
]

// console.log(user[1]);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);
