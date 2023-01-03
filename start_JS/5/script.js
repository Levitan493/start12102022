// 1) Створити функцію конструктор яка створює обєкт юзер (з даними імя, прізвище, вік, також в юзера повинен бути унікальний іd номер від 1 до 10) в функції конструкторі повиний бути метод виводу інформації про юзера. 
// Метод повинен бути винесений в прототип.

function User(name, surname, age, id){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.id = Math.random() * 10;

}
User.prototype.info = function(){
    console.log(`This user ${this.name} ${this.surname} ${this.age}, ID-${this.id}`);
}
let userJedi = new User('Luke', 'Skywalker', 19);
console.log(userJedi.info())
let userSith = new User('Dart', 'Vader', 52);
console.log(userSith.info());

console.log('--<<Next task>>--');


// 2)Створити методи на прототайп для оновлення ключів обєкту юзер наприклад змінити імя, вік користувача.ІD не міняється

User.prototype.changes = function(name, surname, age){
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

