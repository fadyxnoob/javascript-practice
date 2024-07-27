

if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const userName = "yaxir"

    function two() {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}
// one ()

if (true) {
    const userName = " Yaxir"
    if (userName === " Yaxir") {
        const website = "youtube"
        // console.log(website + userName);
    }
    // console.log(website);
}
// console.log(userName);



// +++++++++++++++++++ Intresting ++++++++++++++
// Basic function
plusOne(6) // working hoaisting 
function plusOne(num) {
    return num + 1
}

// expression
plusTwo(6) // not working not hoaisting
const plusTwo = function (num) {
    return num + 2
}