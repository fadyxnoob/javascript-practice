const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please Give a Valid Height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please Give a Valid Weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // show the result 
        results.innerHTML = `<h3>Your BMI weight is : ${bmi}</h3>`
        let Underweight = document.querySelectorAll('.Underweight')
        let Healthy = document.querySelectorAll('.Healthy')
        let Overweight = document.querySelectorAll('.Overweight')
        let Obesity = document.querySelectorAll('.Obesity')
        let removel = document.querySelectorAll('.bmi-indexs p')
        removel.forEach(function(remove){
            remove.classList.remove('active')
        })
        if(bmi < 18.5){
            Underweight.forEach(function(u){
                u.classList.add('active')
            })
        }else if(bmi >= 18.5 && bmi <= 24.9){
            // Healthy.classList.add('active')
            Healthy.forEach(function(h){
                h.classList.add('active')
            })
        }else if(bmi >= 25 && bmi <= 29.9){
            // Overweight.classList.add('active')
            Overweight.forEach(function(over){
                over.classList.add('active')
            })
        }else{
            // Obesity.classList.add('active')
            Obesity.forEach(function(obe){
                obe.classList.add('active')
            })
        }
    }
})
// assignment to print guide