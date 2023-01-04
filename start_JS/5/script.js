// 1) Створити функцію конструктор яка створює обєкт юзер (з даними імя, прізвище, вік, також в юзера повинен бути унікальний іd номер від 1 до 10) в функції конструкторі повиний бути метод виводу інформації про юзера. 
// Метод повинен бути винесений в прототип.

function User(name, surname, age, id) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.id = Math.random() * 10;

}
User.prototype.info = function () {
    console.log(`This user ${this.name} ${this.surname} ${this.age}, ID-${this.id}`);
}
let userJedi = new User('Luke', 'Skywalker', 19);
console.log(userJedi.info())
let userSith = new User('Dart', 'Vader', 52);
console.log(userSith.info());

console.log('--<<Next task>>--');


// 2)Створити методи на прототайп для оновлення ключів обєкту юзер наприклад змінити імя, вік користувача.ІD не міняється

User.prototype.changes = function (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}
userJedi.changes('Master', 'Luke', 26);
console.log(userJedi);
userSith.changes('Anakin', 'Skywalker', 56);
console.log(userSith);

console.log('--<<Next task>>--');


// 3) Створити функцію конструктор створення (прямокутника, квадрата ) в прототип винести методи обчислення Площі, переметра, та визначення діагоналі



function figursConstructor(a, b) {
    this.a = a;
    this.b = b;
}
figursConstructor.prototype.area = function () {
    return `${this.a * this.b}`
}
figursConstructor.prototype.perim = function () {
    return `${2 * (this.a + this.b)}`
}
figursConstructor.prototype.diagonal = function () {
    let valueDiagFirst = (a * a) + (b * b);
    return `${Math.sqrt(valueDiagFirst)}`
}
let figur = new figursConstructor(4, 7);
console.log(figur.diagonal);

console.log('--<<Next task>>--');


// 4) Отримати від користувача значення name  вивести в консоль, першу і останню літеру з name в ерхньому регістрі.


function twoLetters(name) {
    const firstLetter = name.slice(0, 1);
    const lastLetter = name.slice(name.length - 1, name.length);
    const toUpper = (firstLetter + lastLetter).toUpperCase();
    return console.log(toUpper);
}
twoLetters('nata');

console.log('--<<Next task>>--');


// 5) Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, якщо стрінг маж довжину більше 10 то відрізає все після 10 і додає 3 крапки


function someText(text) {
    let trimString = text.trim();
    if (trimString.length > 10) {
        let cutText = trimString.slice(0, 10);
        trimString = cutText + "...";
    }
    return console.log(trimString);
}
someText('    xfgjsdfg;jsgh;jfhgs;   ');


console.log('--<<Finish>>--');