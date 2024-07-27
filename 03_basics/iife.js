// Immediately Invoked Function Expression (IIFE)
// example ()()
// what is iife 
//  we use iife to avoid the polution and distrubence of the global scope 
// and we use  then iife 

// simple function
(function conif() {
    // its named iife
    console.log("DB Connected");
})();

//  arrow function
( (name) => {
    console.log(`db Connected ${name}`);
} )('Yaxir')