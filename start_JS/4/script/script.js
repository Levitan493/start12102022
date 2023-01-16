// 1...Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa) які містять числові значення ( збереження юзера)
// Створити массив обєктів bank в якому є обєкети з ключами buy, sell  з числовими значеннями ( продаж і покупка валюти) а також ключ name в який передаємо назву валюти (usa, euro, ua)
// Створити функцію яка отримує данні з обєкту юзер опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки.
// Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження

let userWallet = {
    amountUsa: 1000,
    amountEuro: 1000,
    amountUa: 50000
}
const bank = [
    {
        currency: 'USD',
        buy: 41,
        sell: 40
    },
    {
        currency: 'EUR',
        buy: 40,
        sell: 39
    },
    {
        currency: 'UAH',
        buy: 1.1,
        sell: 0.9
    }
];
function moneyInfo(arr) {
    if (userWallet.amountUa <= 40) {
        alert(
            'Your ballance is too low'
        );
        return;
    }
    let moneyInfoArr = [];
    arr.forEach(value => {
        moneyInfoArr.push(`User can buy ${userWallet.amountUa / value.buy}`)
    });
    console.log(moneyInfoArr);
    return moneyInfoArr;
}
moneyInfo(bank);

function sellAllUah(){
    let sellUsd = userWallet.amountUsa * bank[0].sell;
    let sellEur = userWallet.amountEuro * bank[1].sell;
    let allSum = sellUsd + sellEur + userWallet.amountUa;
    console.log('При продажі усієї влюти ви отримаєте '+ allSum + ' UAH');
    return allSum;
}
sellAllUah();


// 2)Створити функцію move яка повертає текст  на скільки кроків і куди (отримане значення) змістився користувач . Створити функцію moveUser яка отримує напрямок переміщення, кількість кроків і функцію move як колбек. 
// moveUser ('north', move, 10) повина повернути ( Юзер перемістився на північ на 10 кроків)


let direction = prompt('Введіть напрямок (північ, південь, захід, схід)');
let distance = parseInt(prompt('How many steps'));

function move(directionAtribute, distanceAtribute){    
    return `Юзер перемістився на ${directionAtribute} на ${distanceAtribute} кроків` 
}

let userMove = function(anotherAttr, anotherDirectionAtribute){
    console.log(anotherAttr, anotherDirectionAtribute);
}
userMove(direction, distance, move);


// 3) Створіть массив в якому видаляється кожний другий елемент ["Keep", "Remove", "Keep", "Remove", "Keep", ...] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...], Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву


let numberArr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep",];
function removeArr() {
    if (numberArr.length > 0) {
        for (let i = 0; i < numberArr.length; i++) {
            numberArr.splice(i + 1, 1);
        }
    }
    else {
        alert('Array is empty')
    }
    console.log(numberArr);
}
removeArr();


// 4) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті,


let figurs = [
    {
        figure:"Square",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]
function countFn(figurs){
    figurs.forEach(item => {
        console.log(`${item.figure} is ${item.sizeA * item.sizeB}`)
    });
    
}
countFn(figurs);


// 5) Свторити новий массив який використовує массив [2,3,5,4,8,7,9,10] і перемножує парні значення на 4


const firstArr = [2,3,5,4,8,7,9,10];
const newArr = firstArr.map((x) => (x % 2 == 0) ? x *= 4 : x);

console.log(newArr);

    
    




