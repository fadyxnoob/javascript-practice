function sayMyName() {
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("I");
    console.log("R");
}
// sayMyName()

// function addTwoNumbers(n1, n2){
//     console.log(n1 + n2);
// }

function addTwoNumbers(n1, n2){
    // let result= n1 + n2;
    // return result 

    return n1 + n2
}

const result = addTwoNumbers(3, 9)
// console.log(`The Result is ${result}`);

function userLoginMsg(username = "Yaxir"){
    return `${username} just logged in`
}

// console.log(userLoginMsg("yasir"))

console.log(userLoginMsg("Yasir"))