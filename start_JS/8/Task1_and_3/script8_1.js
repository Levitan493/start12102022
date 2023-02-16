window.onload = () => {

    // 1) Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
    // Дані виводяться в стилізований список,  можете підключити bootstrap чи написати свої стилі. При введені більше 5 пунктів, перший пункт видаляється. В пункті який добавляється повино бути данні які введено і час створення в форматі день, номер місяця, рік і час години хвилини.


    // let formatTime = function () {

    //     let myDate = new Date();
    //     return (
    //         "  " +
    //         myDate.getDate() +
    //         "." +
    //         (myDate.getMonth() + 1) +
    //         "." +
    //         myDate.getFullYear() +
    //         "  " +
    //         myDate.getHours() +
    //         ":" +
    //         myDate.getMinutes()
    //     );
    // };
    // let container = document.querySelector('.container');

    // function createEl() {
    //     let todoItem = prompt('Enter your data');
    //     let item = document.createElement('div');

    //     item.innerText = `${todoItem} and time:${formatTime()}`;
    //     container.appendChild(item);
    // }
    // for (let i = 0; i < 6; i++) {
    //     createEl();
    // };
    // let allItem = document.getElementsByTagName('div');

    // if (allItem.length > 5) {
    //     container.removeChild(container.firstElementChild);
    // };
    // let div = document.querySelector('div');
    // div.setAttribute('border', 'border-primary');



    // 3) Створити таблицю за допомогою js з полями імя, місто,  курс і заповнити її даними також за допомогою js.  В таблиці повино бути мінімум 2 рядки



    let ourTable = document.querySelector('.our_table');
    createTable(ourTable, 3, 4);
    function createTable(parent, cols, rows) {
        let table = document.createElement('table');

        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');

            tr.style.border = '1px solid #000';


            for (let j = 0; j < cols; j++) {
                let td = document.createElement('td');
                tr.appendChild(td);
                td.style.width = '550px';
                td.style.height = '50px';
                td.style.border = '1px solid #000';
            }

            table.appendChild(tr);

        }
        parent.appendChild(table);
    }
    

    let td = document.querySelectorAll('td');
    console.log(td);
    td.forEach(index => console.log(index));
    

    let studentsObj = [{
        name: 'Name',
        city: 'City',
        cours: 'Cours'
    },
    {
        name: 'Vlad',
        city: 'Kyiv',
        cours: 'JS'
    },
    {
        name: 'Sofy',
        city: 'Lviv',
        cours: 'PHP'
    },
    {
        name: 'Ivan',
        city: 'KrakoW',
        cours: 'FULLSTACK'
    }
    ];
    function addToList(studentsObj){
       let count = 0;
        for(let i=0; i<studentsObj.length; i++){
            td.innerHTML = studentsObj[i]; 
          count ++;         
        } 
    }
    addToList(studentsObj);

    // td[0].innerHTML = 'Name';
    // td[1].innerHTML = "City";
    // td[2].innerHTML = 'Cours';

    // td[3].innerHTML = 'Vlad';
    // td[4].innerHTML = 'Kyiv';
    // td[5].innerHTML = 'JS';

    // td[6].innerHTML = 'Sofy';
    // td[7].innerHTML = 'Lviv';
    // td[8].innerHTML = 'PHP';

    // td[9].innerHTML = 'Ivan';
    // td[10].innerHTML = 'KrakoW';
    // td[11].innerHTML = 'FULLSTACK';















}