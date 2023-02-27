window.onload = () => {

    // 1) Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
    // Дані виводяться в стилізований список,  можете підключити bootstrap чи написати свої стилі. При введені більше 5 пунктів, перший пункт видаляється. В пункті який добавляється повино бути данні які введено і час створення в форматі день, номер місяця, рік і час години хвилини.


    let formatTime = function () {

        let myDate = new Date();
        return (
            "  " +
            myDate.getDate() +
            "." +
            (myDate.getMonth() + 1) +
            "." +
            myDate.getFullYear() +
            "  " +
            myDate.getHours() +
            ":" +
            myDate.getMinutes()
        );
    };
    let container = document.querySelector('.container');

    function createEl() {
        let todoItem = prompt('Enter your data');
        let item = document.createElement('div');

        item.innerText = `${todoItem} and time:${formatTime()}`;
        container.appendChild(item);
    }
    for (let i = 0; i < 6; i++) {
        createEl();
    };
    let allItem = document.getElementsByTagName('div');

    if (allItem.length > 5) {
        container.removeChild(container.firstElementChild);
    };
    let div = document.querySelector('div');
    div.setAttribute('border', 'border-primary');



    // 3) Створити таблицю за допомогою js з полями імя, місто,  курс і заповнити її даними також за допомогою js.  В таблиці повино бути мінімум 2 рядки



    let wrapper = document.querySelector('.our_table');
    let table = document.createElement('table');
    table.style.width = '100%';


    let studentsObj = [
        { name: '<NAME>', city: '<CITY>', cours: '<COURS>' },
        { name: 'Vlad', city: 'Kyiv', cours: 'JS' },
        { name: 'Sofy', city: 'Lviv', cours: 'PHP' },
        { name: 'Ivan', city: 'Krakow', cours: 'FULLSTACK' }];

    for (let i = 0; i < studentsObj.length; i++) {
        let row = document.createElement('tr');
        let colName = document.createElement('td');
        colName.textContent = studentsObj[i].name;
        row.appendChild(colName);

        let colCity = document.createElement('td');
        colCity.textContent = studentsObj[i].city;
        row.appendChild(colCity);

        let colCours = document.createElement('td');
        colCours.textContent = studentsObj[i].cours;
        row.appendChild(colCours);

        table.appendChild(row);
row.style.display = 'flex';
row.style.justifyContent = 'space-between';
    }
    wrapper.appendChild(table);
    
    
    


    // td.style.width = '550px';
    // td.style.height = '50px';
    // td.style.border = '1px solid #000';






}