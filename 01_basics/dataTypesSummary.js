// How to store and access data in memory 
// 1) => Premitives
// 2) => Non-Premitives || References

// #PRIMITIVE  => 7 
// these are call by values, 
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt;


// #REFERENCE   => 3
// 3 types : Array, Objects, Functions;




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory in JS
// Stack used in (Primitive)
// Heap used in (Non-Primitive)

// Stack memory provied a copy of orignal value that why changes occures in copied value instead of real;
// Example of Stack Memory
let myYoutubeName = "XR Explained";
let anotherName = myYoutubeName;
anotherName = "Dream Coder"
// console.log(myYoutubeName);
// console.log(anotherName);

// Heap memory provied a reference of orignal value that why changes occures in real value;
// Example of Heap Memory

let user1 = {
    emial: "user1@gmail.com",
    id: 123
}

// console.log(user1.emial);
let user2 = user1;
user2.emial = "userone@google.com";
// console.log(user1.emial);
// console.log(user2.emial);


