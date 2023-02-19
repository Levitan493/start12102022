window.onload = () => {

  //----- Округлення до двох знаків після коми-----

  // function twoDecimalPlaces(n) {
  //     console.log(n.toFixed(2));
  //     return n.toFixed(2);
  // }
  // twoDecimalPlaces(5.5589);
  // twoDecimalPlaces(8.057951883797116);

  // let haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
  // function findNeedle(haystack) {
  //     console.log("found the needle at position " + haystack.indexOf("needle"));
  //     // return "found the needle at position " + haystack.indexOf("needle");
  // }
  // findNeedle(haystack);

  // function noSpace(x) {

  //     console.log(x.replace(/\s/g, ''));
  //     return x.replace(/\s/g, '')
  // }
  // noSpace('8 j 8   mBliB8g  imjB8B8  jl  B to equal 8j8mBliB8gimjB8B8jlB');

  // function greet() {
  //     console.log('Hello world');
  //     return 'hello world';
  // }
  // greet();


  //     function sum(array) {
  //         let midValue = array.length;
  //         let c = 0;
  //         for (i = 0; i < midValue; i++) {
  //             let a = array[i];
  //             c = c + a;

  //         }
  //         let res = c / midValue;
  //         console.log(res);

  //     }
  // sum([1, 4, 0, 34]);

  // function evenOrOdd(number) {
  //     // let number = 0;
  //     if(number % 2 == 0){
  //       return "even"
  //     }
  //     else{
  //       return "Odd"
  //     }

  //   }
  //   evenOrOdd(24);
  // function cutArr(array){
  //     let newArr = array.sort();
  // }



  // function sumArray(newArr) {

  //     for (i = 0; i < newArr.length; i++) {
  //         variableValue += cutLast[i];
  //     }
  //     console.log(variableValue);
  //     // return variableValue;
  // }
  // cutArr([0, 1, 6, 10, 10]);


  // function solution(str){
  //     console.log(str.split("").reverse().join());
  //     return
  //     str.split("").reverse().join();
  // }
  // solution('world');

  // function solution(str){
  //     let splitStr = str.split("");
  //     let reverseArr = splitStr.reverse();
  //     let joinArr = reverseArr.join("");
  //     return joinArr; 
  //   }


  // -----Функція, яка повертає 0, коли х<5, і повертає 1, коли x >=5;-----

  // function fakeBin(x) {
  //   let result = '';
  //   for (let i = 0; i < x.length; i++) {
  //     x[i] < 5 ? result += 0 : result += 1;
  //   }
  //   console.log(result);
  //   return result;
  // }
  // fakeBin('366058562030849490134388085');

  // ---Отримує швидксть в км/год, повертає см/сек---

  // function cockroachSpeed(s) {
  //   let res = (s * 100000) / 3600;
  //   console.log(Math.floor(res));
  //   return Math.floor(res);
  // }
  // cockroachSpeed(0.5353338524250308);

  // -----Сума балів classPoints, yourPoints- ваш бал. Повртає true, коли ваш бал вищий і false, коли ваш бал нижчий-----

  // function betterThanAverage(classPoints, yourPoints) {
  //   let sum = 0;
  //   for (let i = 0; i < classPoints.length; i++) {
  //     sum += classPoints[i];
  //   }
  //   sum = sum / classPoints.length;
  //   console.log(yourPoints > sum);
  //   return yourPoints > sum;
  // }
  // betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)

  // -----Скільки мілісекунд пройшло після 12:00-------

  // function past(h, m, s){
  //   let res = (h*3600000)+(m*60000)+(s*1000);
  //   console.log(res);
  // }
  // past(1,0,1);


  //   function simpleMultiplication(number) {
  //     if(number % 2 == 0){
  //       return number*8;
  //     }
  //   else{
  //    return number*9;
  //   }
  // }

  // ----Отримуємо cap-загальна кк місць, on-суільки зайнято місць, wait-скільки чекає пасажирів на посадку. Повернути -----  


  // function enough(cap, on, wait) {
  //   let allPeople = on + wait;
  //     if(allPeople <= cap){
  //       console.log(wait);
  //       return wait;
  //     }
  //     else{
  //       console.log(0);
  //       return 0;
  //     }

  //   }
  //   enough(20, 5, 5);


  // function sum (numbers) {
  //   let sum = 0;
  //     for(let i=0; i<numbers.lenght; i++){
  //       sum += numbers[i];
  //     }

  //   console.log(sum);


  // };

  // sum([1, 5.2, 4, 0, -1]);

  // function sum(numbers) {

  //   return console.log(numbers.reduce((a, b) => a + b, 0));
  // }
  // sum([1, 5.2, 4, 0, -1]);

  // sum = function (numbers) {
  //   "use strict";
  //   let total = 0;
  //   for(var i = 0; i < numbers.length; i++) {
  //     total += numbers[i];
  //   }
  //   return console.log(total);
  // };

  // -----Отримуємо array і повертаємо суму значень цифр, які більше 0-----

  // function positiveSum(arr) {
  //   let positiveValue = 0;
  //   for (let i = 0; i < arr.length; i++) {

  //     if (arr[i] > 0) {
  //       positiveValue += arr[i];
  //     }

  //   };
  //   console.log(positiveValue);
  // }

  // positiveSum([1, -2, 3, 4, 5]);


  // Обчисліть суму чисел у n -му рядку цього трикутника (починаючи з індексу 1), наприклад: ( Вхід --> Вихід )

  //                               1
  //                            3     5
  //                         7     9    11
  //                     13    15    17    19
  //                  21    23    25    27    29
  //                 ...

  //   function rowSumOddNumbers(n) {
  // 	return Math.pow(n,3);
  // }
  // rowSumOddNumbers(42)

  //   ---------Повернути маив слів в речення----------

  //   function smash (words) {

  //    return console.log(words.join(' '));
  //  };
  //  smash(["this", "is", "a", "really", "long", "sentence"])

  // ======Повернути суму чисел змішаного масиву зі числами і стрінгами======

  // function sumMix(x) {
  //   let numbers = 0;
  //   for (i = 0; i < x.length; i++) {
  //     numbers += parseInt(x[i]);
  //   }
  //   return console.log(numbers);
  // }
  // sumMix([9, 3, '7', '3']);

  // ====Повернути 

  // function grow(x) {
  //   return x.reduce((a, b) => a * b);
  // }
  // grow([4, 1, 1, 1, 4]);

  // function countSheeps(arrayOfSheep) {
  //   let res = 0;
  //   for(i=0; i<arrayOfSheep.length; i++){
  //     if(arrayOfSheep[i]== null || undefined){
  //       return;
  //     }
  //     if(arrayOfSheep[i]== true){
  //       res += 1;
  //     }

  //   }return console.log(res);
  // }
  // countSheeps([true,  true,  true,  false,
  //   true,  true,  true,  true ,
  //   true,  false, true,  false,
  //   true,  false, false, true ,
  //   true,  true,  true,  true ,
  //   false, false, true,  true ]);

  // let num = 20;
  // for(let i=0; i<=20; i++){
  //   if(i%2 == 0){
  //     console.log(i)
  //   }
  // }


  // =====Приклад тернарного оператора=======

  // let a=8;
  // let b=10;
  //  let res = b>a ? a+b : Error;

  //  console.log(res);

  // =====Вивести цифри від більшого до меншого=====


  // for(let i=15; i<=15; i--){
  // console.log(i);
  // if(i==0){
  //   break;
  // }
  // }

  // let a = parseInt(prompt('Enter number', 0));
  // let b = parseInt(prompt('Enter number', 0));
  // for (let i = 0; i < a; i++) {
  //   let starCount = '';
  //   for (let j = 0; j < b; j++) {
  //     starCount += '*';
  //   }
  //   console.log(starCount);
  //   console.log();
  // };

  // let login = prompt('Enter login');
  // let pass = parseInt(prompt('Enter pass'));

  // if(login == 'admin' && pass == 12345){
  //   alert ('Вітаємо в системі');
  // }
  // else{
  //   alert('Логін і(або) пароль не вірні')
  // }

  // let a = parseInt(prompt('Enter 1th value', 0));
  // let b = parseInt(prompt('Enter 2th value', 0));
  // let c = parseInt(prompt('Enter 3th value', 0));
  //  let res = (a+b+c)/3;
  // document.write(res);

  // let userAge = parseInt(prompt('How old are you?'));

  // res = userAge>18 ? true : false;
  // console.log(res);

  // let planet = prompt('Введіть назву планети');
  // switch (planet) {
  //   case 'Меркурій':
  //     console.log('Ця планета знаходиться у Сонячній системі');
  //     break;

  //   case 'Венера':
  //     console.log('Ця планета знаходиться у Сонячній системі');
  //     break;

  //   case 'Марс':
  //     console.log('Ця планета знаходиться у Сонячній системі');
  //     break;

  //     case 'Юпітер':
  //       console.log('Ця планета знаходиться у Сонячній системі');
  //       break;
  //       default:
  //         console.log('Нема')
  // }


  // =====Розрахувати знижку і вивести суму зі знижкою====


  // let sum = parseInt(prompt('Введіть суму'));

  // if(sum>=100 && sum<=3000){
  //   let res = (sum/100)*3;
  //   document.write(sum-res);
  // }
  // if(sum>3000 && sum<=10000){
  //   let res = (sum/100)*5;
  //   document.write(sum-res);
  // }
  // if(sum>10000){
  //   let res = (sum/100)*7;
  //   document.write(sum-res);
  // }
  // if(sum<100){
  //   document.write('У вас немає знижки')
  // };

  // ====Дано число, повернути число + sheep...(1 sheep..., 2 sheep..., 3 sheep...,)=====

  // ==Варіант з масивом==
  // const countSheep = function (num) {
  //   let myCount = [];
  //   for (let i = 0; i < num; i++) {
  //     myCount.push(i+1+' sheep...');
  //   }
  //   console.log(myCount.toString());
  // }
  // countSheep(5);

  // ==Варіант зі стрінгом==
  // const countSheep = function (num){
  //   let str = "";
  //   for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  //   return str;
  // }


  // ====Розвернути кожне слово в стрінгу, пробіли між словами повинні бути збережені====

  // function reverseWords(str) {
  //   return str.split(" ").map(
  //   function(a){
  //     return a.split("").reverse().join("")
  //   }).join(" ");
  // }

  // reverseWords('double  spaced  words');


  // function descendingOrder(n){
  //   return parseInt(String(n).split('').sort().reverse().join(''))
  // }
  // descendingOrder(42145);

  // ===Тернарний запис замість 3-х if===

  // function updateLight(current) {

  //   return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

  // };
  // updateLight('green');

  // ===Те саме приклад через стрілкову функцію===

  // const updateLight = current => ({
  //   green: 'yellow',
  //   yellow: 'red',
  //   red: 'green',
  // })[current]

  // ===Приклад через switch===

  // function updateLight(current) {

  //   switch (current) {
  //     case 'green':
  //       return 'yellow';
  //       break;
  //     case 'yellow':
  //       return 'red';
  //       break;
  //     case 'red':
  //       return 'green';
  //       break;
  //     default:
  //       throw 'Error: wrong input';
  //       break;
  //   } 
  // }
  // ===Повернути кількість дільників даного числа(num)===

  // function countDivisors(num){
  //   let divisors = 0;
  //   for(let i=0; i<=num; i++){
  //     if(num % i == 0){
  // divisors += 1;
  //     }
  //   }
  //   console.log(divisors);
  // }
  // countDivisors(100);

  // ===Вичислити, чи число є квадратним===

  // const isSquare = function(n){
  //   let res = Math.sqrt(n);

  //   return (res %1 ===0);
  // }
  // ----------------------------------------------------------------------------------
  // ===Приклад циклу do while====

  // let doText = 0;
  // let counter = 0;
  // do{
  //   doText+=counter;
  //   console.log(doText);
  //   counter++;
  // }
  // while(counter<5);
  // ---------------------------------------------------------------

  // ======Якзастосовується forEach=======

  // let arr = [1,2,3,4,5,6];

  // arr.forEach((item)=>{document.write(`My number is ${item}, `)});
  // -----------------------------------------------------------------------------------

  // ====Повертаємо тільки числові значення з масиву====
  // Метод Number.isInteger перевіряє, чи є передане значення цілим числом=====

  // function filter_list(l) {

  //   return console.log(l.filter(e => Number.isInteger(e)));
  // }
  // filter_list([1,2,'aasf','1','123',123])
  // --------------------------------------------------------------------------------------
  // =====base і factor=====

  // function checkForFactor (base, factor) {
  //   if(base % factor == 0){
  //     return true;
  //   }
  //   else{
  //     return false
  //   }
  // }
  // =====Спрощений код:

  // function checkForFactor (base, factor) {
  //   return base % factor === 0;
  // }


  // function litres(time) {
  //   return console.log(Math.floor(time * 0.5));
  // }
  // litres(11.8)
// -------------------------------------------------------------
// ======Повернути масив з відсортованими числами=====

  // function solution(nums){
  //   return console.log((nums || []).sort(function(a, b){
  //     return a - b
  //   }));
  // }
  // solution([20, 2, 10])

// -----------------------------------------------------------------

  // function strCount(str, letter){  
  // let res = str.indexOf(strCoun);
  // console.log(res)               -------Неправильний варіант синтаксису

  // }
  // strCount('Hello', 'o')


  // function strCount(str, letter){  
  //   return str.split('').filter(c => c == letter).length;--------------Правильний варіант
  // }

let canvas = document.querySelector('canvas');

}
