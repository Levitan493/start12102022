// alert('Hello from file');
const KEY ='password';
let user_name = 'Sam';
let UserName = 'Sam01';
let userName = 'Sam02';

let numberValue = 1200;
let numberFloat = 11.75;
console.log(user_name);
console.log(UserName);
console.log(userName);
console.log(KEY, 1111);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

let resultNumber = numberFloat + numberValue;
console.log("Sum result", resultNumber)

let firstName = "Lokhmaniuk";
let secondName = 'Ivan';
console.log(firstName + "" + secondName, 'String sum');

document.write(firstName);
document.write("<br/>");
document.write(secondName);

let trueValue = true;
let falseValue = false;

console.log("true value");

// let dayInfo = prompt('Як ваш день?','Normal day');
// let userSay = 'User say: ' + dayInfo;
// console.log(userSay);

// let userAge = prompt('How old are you?');
// console.log("User age", userAge);
// let userAgeResult = parseInt(userAge);
// console.log("Convert age", userAgeResult);
// console.log(parseInt(userAge));
let userAge = prompt('How old are you?');
console.log('User age', userAge);
let userAgeRasult = parseInt(userAge);
console.log('Convert age', userAgeRasult);
console.log(parseFloat(userAge));