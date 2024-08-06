// Select all buttons 
const buttons = document.querySelectorAll('.button');
// Select the body
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        // Remove 'active' class from all buttons
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                body.style.color = 'black';
                button.classList.add('active');
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                body.style.color = 'black';
                button.classList.add('active');
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                body.style.color = 'white';
                button.classList.add('active');
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                body.style.color = 'black';
                button.classList.add('active');
                break;
            case 'black':
                body.style.backgroundColor = e.target.id;
                body.style.color = 'white';
                button.classList.add('active');
                break;
            default:
               
                break;
        }
    });
});
