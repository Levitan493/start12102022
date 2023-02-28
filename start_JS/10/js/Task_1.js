window.onload = function () {
    let container = document.querySelector('.container');
    
    let form = document.querySelector('form');
    let allDiv = document.querySelectorAll('div');
    let [...inputs] = form.elements;

    let h1 = document.querySelector('h1');
    h1.style.margin = '10px auto';
    h1.style.color = 'white';

    let passInput = document.querySelector('.password');
    let confirmPassInput = document.querySelector('.confirm-password');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (passInput.value !== confirmPassInput.value) {
            e.preventDefault();
            alert('Паролі не співпадають');
            // return;
        }
        let inputsFilled = true;
        inputs.forEach(function(input){
            if(input.required && input.value === ''){
                input.classList.remove('in_border-1');
                input.classList.add('input-error');
                input.style.border = '3px solid red';
                inputsFilled = false;
            }
        });
        if(inputsFilled){
            form.style.display = 'none';
            container.style.display = 'none';
            alert('Реєстрація пройшла успішно!')
        }
        
    })





}