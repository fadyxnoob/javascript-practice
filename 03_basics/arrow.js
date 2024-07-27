const user = {

    //  this refer current context
    userName: "Yaxir",
    isLoggedIn: true,

    welcomeMessage: function () {
        // console.log(`${this.userName} , Welcome to website `);
        // console.log(this); // here this refer current context mean user object
    }

}
// user.welcomeMessage()
// user.userName = "Lovely"
// user.welcomeMessage()

// console.log(this); // here this or global obj mean an empty object {}

// in browser the global object or this object mean window object

// function chai(){
//     let userName = "Yaxir"
//     console.log(this.userName);
// }
// chai()

// const  chai = () => {
//     let userName = "Yaxir"
//     console.log(this);
// }
// chai()

// explicient return 
// const addTowNumbers = (num1, num2) => {
//     +return+ num1 + num2
// }


// implicient return  mean i admit it 
// const addTowNumbers = (num1, num2) => num1 + num2

// const addTowNumbers = (num1, num2) => (num1 + num2)

const addTowNumbers = (num1, num2) => ({userName: "Yaxir"})

console.log(addTowNumbers(3, 4));

