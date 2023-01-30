window.onload = () => {


    // 1) Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
    // Дані виводяться в стилізований список,  можете підключити bootstrap чи написати свої стилі. При введені більше 5 пунктів, перший пункт видаляється. В пункті який добавляється повино бути данні які введено і час створення в форматі день, номер місяця, рік і час години хвилини.






    // 2) створити массив обєктів і на сонові нього вивести на сторінку лінки в яких знаходяться зображення і alt для зображення, стилізувати задовільно, кількість обєктів в массиві більше 3 
    // let images = [
    //     {
    //         imgPath:'img/image.png',
    //         alt:'png image'
    //         href:'https://img.com/60903073638.jpg'
    //     }
    //     ...
    // ]

    class imgParty {
        constructor(imgPath, alt, href) {
            this.imgPath = imgPath;
            this.alt = alt;
            this.href = href;
        }
    }
    const imageArr = [];
    imageArr.push(
        new imgParty('8/img/pexels-matthias-groeneveld-15144988.jpg',
            'nature',
            'https://www.pexels.com/uk-ua/photo/15144988/'

        ),
        new imgParty('8/img/pexels-ömer-çeti̇n-14214692.jpg',
            'Horses',
            'https://www.pexels.com/uk-ua/photo/14214692/'

        ),
        new imgParty('8/img/pexels-pat-whelen-10052857.jpg',
            'Road in forest',
            'https://www.pexels.com/uk-ua/photo/10052857/'

        ),
        new imgParty('pexels-cat.jpg',
            'Cat',
            'https://www.pexels.com/uk-ua/photo/13855925/')

    );

    for (let i = 0; i < imageArr.length; i++) {
        let body = document.querySelector("body");
        let a = document.createElement("a");
        let img = document.createElement("img");
        body.appendChild(a);
        a.appendChild(img);
        img.src = imageArr[i].imgPath;
        img.alt = imageArr[i].alt;
        a.href = imageArr[i].href;
    }
    console.log(imageArr);





    // 3) Створити таблицю за допомогою js з полями імя, місто,  курс і заповнити її даними також за допомогою js.  В таблиці повино бути мінімум 2 рядки


}