// let array = [1,2,3,4,5,6,7]
// console.log("A", array);
// console.log(array.slice(1, 3));
// console.log("B", array);
// // console.log(array.splice(1, 3)); /// Minupulate orignal Array 
// console.log("C", array);

const array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const array2 = array.flat(Infinity)
const array3 = array2.flat()
// console.log(array);
// console.log(array2);
// console.log(array3);
console.log(Array.isArray("Yasir"));
console.log(Array.from("Yasir"));
console.log(Array.from({name: "yasir"})); // intresting 

let score = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score, score2, score3));