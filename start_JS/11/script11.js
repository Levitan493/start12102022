window.onload = function () {
    // =================================================================================================

    // 1) Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість
    // CountLowrercase("abc"); ===> 0

    // CountLowrercase("abcABC123"); ===> 3

    // CountLowrercase("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
    let CountLowrercase = function (str) {
        let matches = str.match(/[A-Z]/g);
        //   return matches ? matches.length : 0;

        if (matches) {
            console.log(matches.length);
        } else {
            console.log(0);
        }
    }

    CountLowrercase("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");
    CountLowrercase("abcABC123");
    CountLowrercase("abc");

    // ===================================================================================================


    // 2) Написати функцію яка видаляє всі тексктові символи з стрінга, а отриманні цифрові значення переводить в тип намбер та повертає його 


    const fclearString = function (s) {
        const num = s.match(/[0-9]/g);
        console.log(num.join(''));
    }

    fclearString("hell5o wor6ld");


    // ======================================================================================================

    // 3) Створити інпут який отримує пін код ( це 4 цифрових значення). За допомогою регулярки перевітити чи валідний пін код ввів користувач
    // "1234"   -->  true
    // "12345"  -->  false
    // "a234"   -->  false

    const form = document.querySelector('.My_form');
    const input = document.querySelector('input');
    const SubmitButton = document.querySelector('.SubmitButton');
    SubmitButton.style.width = '50px';
    SubmitButton.style.margin = '50px auto';
    SubmitButton.style.backgroundColor = 'rgb(19, 173, 144)';
    SubmitButton.style.borderRadius = '10px';
    SubmitButton.value = 'Submit';
    SubmitButton.style.padding = '5px 3px';
    form.style.display = 'flex';
    form.style.border = '1px solid black';
    form.style.flexDirection = 'column';
    form.style.width = '300px';
    form.style.height = '400px';
    form.style.margin = '50px auto';
    form.style.backgroundColor = 'rgba(225, 210, 234, 0.71)';
    input.style.margin = '50px auto';
    input.style.border = '1px solid black'
    input.style.padding = '10px';

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const validPass = input.value;
        const patternPass = /^1234$/;
        if(patternPass.test(validPass)){
            alert('True')
        }
        else{
            alert('False');
            
            
        }
    })
    


    // =======================================================================================================
    // 4) Створити регулярку яка отримує адресс сторінки і повертає тільки адресс  
    // "https://prog.academy/?page=1" -->"https://prog.academy/"

    const returnAdresss = function (linc) {
        const checkAdress = linc.replace(/\?.*/, '');
        console.log(checkAdress);
    }

    returnAdresss("https://prog.academy/?page=1");
    // ===========================================================================================================
    // 5) Створити функцію валідації юзернейма, імя може включати літери цифри, тире і нижьнє тире, довжина імя повина бути від 4 до 10 символів. Приклад: validateUsr('asd43_34') => false,
    // validateUsr('asd43_34') => true, validateUsr('asd43_34') => true

    let validateUsr = (username) => {
        let isValidPatern = /^[\w-]{4,10}$/
        if (isValidPatern.test(username)) {
            console.log(true)
        }
        else {
            console.log(false);
        }

    }
    validateUsr('a');
    validateUsr('p1pp1');
    validateUsr('asd.43_34');


}