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

function addTwoNumbers(n1, n2) {
    // let result= n1 + n2;
    // return result 

    return n1 + n2
}

const result = addTwoNumbers(3, 9)
// console.log(`The Result is ${result}`);

function userLoginMsg(username = "Yaxir") {
    return `${username} just logged in`
}

// console.log(userLoginMsg("yasir"))

// console.log(userLoginMsg("Yasir"))

// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200, 400, 500, 700));

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 700, 2000));


const user = {
    username: "yasir",
    pass: "123"
}

function handleObj(obj) {
    const { username, pass: password } = obj
    console.log(`Username is ${username} and Password is ${password}`);
}

handleObj(user)
// console.log({
//     username : "yasir",
//     pass : "123"
// })

const myArray = [100, 200, 300]

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myArray));
// console.log(returnSecondValue([100, 200, 300]
// ));

