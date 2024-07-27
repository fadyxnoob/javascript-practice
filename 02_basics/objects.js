// Singleton
// Object.create
// object literals

// how to use symbol in objects
const mySym = Symbol("key1")
const GhUser = {
    name : "Yasir",
    "full name" : "Yasir Mehboob",
    [mySym] : "myKey1", // there we go
    age : 20,
    location : "Khanewal",
    email : "user@gmial.com",
    isLoggedIn : false,
    lastLoginDays : ["Friday", "Monday"]
}

// console.log(typeof GhUser[mySym]);
// square notations
// console.log(GhUser["isLoggedIn"]);

// if you want to not edit somthing in object use this 
// Object.freeze(GhUser);

GhUser.greeting = function(){
    console.log("Hellow ghUser");
}
GhUser.greetingTwo = function(){
    console.log(`Hellow ghUser, ${this.name}`);
}
console.log(GhUser.greeting());
console.log(GhUser.greetingTwo());

