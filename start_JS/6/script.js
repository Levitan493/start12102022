// 1) Створити функцію яка отримує невизначену кількість аргументів, вираховує їх суму і повертає результат обчислень

function sumArg(...argArr){
    let arg = 0;
    for(let i=0; i<argArr.length; i++){
        arg += argArr[i];
    }
    console.log(arg);
}
sumArg(21,12,3,45,91);



// 2)Створити функцію яка отримує від користувача день народження,місяць, рік і повертає вік користувача і якщо сьогодні день народження користувача то вивести привітання.

// 3) Модифікуват завдання 2 добавивши в аргументи функцію вітання яка буде використанна як колбек, і в разі дня народження буде вітати користувача


function greeting() {
    console.log('Вітаємо з днем народження!');
}
const day = parseInt(prompt('Вкажіть ваш день народження'));
const mounth = parseInt(prompt('Вкажіть місяць у числоволму форматі'));
const year = parseInt(prompt('Вкажіть рік'));
const thisDate = new Date;
const dateInfo = new Date(year,mounth -1, day);
function date(info, fn){
    if(info.getMonth() === thisDate.getMonth() && info.getDate() === thisDate.getDate()){
        fn();
    };
    console.log(`Вам : ${thisDate.getFullYear() - info.getFullYear()} років`);
    return `Вам: ${thisDate.getFullYear() - info.getFullYear() } років`;
};
date(dateInfo, greeting);






// 4) Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер сторіччя. 


// const result = 0;
const infoYear = parseInt(prompt('Вкажіть рік'));
function century(years){
    if(arguments[0] % 100 == 0){
        result = arguments[0] / 100;
    }
    else{
        result = Math.floor(arguments[0] / 100) + 1;
    }
     console.log(result);
}
century(infoYear);



// 5) Створити функцію яка повертає інформацію скільки днів в цьому місяці а також в наступному  ( В цьому місяці 30 днів в наступному 31 )


const mounthA = parseInt(prompt('Введіть місяць числом'));
const yearA = parseInt(prompt('Введіть рік у форматі YYYY'));
const mounthInfo = new Date(mounthA, yearA);
function daysInMounth(M,Y){
    return `В цьому місяці : ${new Date(Y, M, 0).getDate()} днів, а в наступному ${new Date(Y, M + 1, 0).getDate()}`;
}
console.log(daysInMounth(mounthA, yearA));