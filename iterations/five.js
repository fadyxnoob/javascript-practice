const coding = ["js", "ruuby", "php", "html", "cpp"]

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


const myCoding = [
    {
        language: "javascript",
        file: "js"
    },
    {
        language: "python",
        file: "py"
    },
    {
        language: "c++",
        file: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.file);
})