const userEmail = []

// if(userEmail){
//     console.log("got user email");
// }else{
//     console.log("don't have user email");
// }


// ++++++++++++++++++++++++++++ Falsy Values ++++++++++++++++++++++++++++++
// false, 0, -0, BigInt 0n, "", null, undefined, NaN,

// ++++++++++++++++++++++++++++ Truthy Values ++++++++++++++++++++++++++++++
// "0", "false", " ", [], {}, function(){}, 



// if(userEmail.length === 0){
//     console.log("array is empty");
// }

const emptyObj = {}

// if(Object.keys(emptyObj).length){
//     console.log("object is empty");
// }


// Nullish Coalescing Operator (??) : null undefined

let val;
// val = 10 ?? 20
// val = undefined ?? 2
// val = null ?? 2
// val = null ?? 10 ?? 20
// console.log(val);


// Ternairy Operator 

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less then 80") : console.log("more then 80");