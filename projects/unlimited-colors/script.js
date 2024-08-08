const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
// generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let intervalId
const changebackgroundColor = function () {
    if(!intervalId){
        intervalId = setInterval(chnageBgColor, 1000)
    }
    function chnageBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopbackgroundColor = function () {
    clearInterval(intervalId)
    intervalId = null
}


start.addEventListener('click', changebackgroundColor)
stop.addEventListener('click', stopbackgroundColor)