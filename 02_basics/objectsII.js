// single tonn object example
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Yasir"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// non single ton object example
// const anotherTinderUser = {}
// console.log(tinderUser, anotherTinderUser);

 const myFullName = Symbol("name")
// Object Nesting
const regularUser = {
    email : "someone@gmail.com",
    fullName : {
        userFullname : {
            firstNmae : "Yasir",
            lastName : "Mehboob"
        },
        [myFullName]: "Yasir Mehboob"
    }
}

// // console.log(regularUser.fullName[myFullName]);
// console.log(regularUser.fullName[myFullName]);

// // Optional chaining 
// console.log(regularUser.fullName?.userFullname);

// how to merge objects or combine

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id : 1,
        emial : "u@gmail.com"
    },
    {
        id : 2,
        emial : "us@gmail.com"
    }
]
users[1].emial
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));