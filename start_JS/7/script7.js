// 1)Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li , отримати доступ до ціх елементів і змінити там текст за допомогою innerHtml

window.onload = () => {
    let [...li] = document.getElementsByClassName('item');
    console.log(li);
    li.forEach(item => {
        item.innerHTML = `<span>Bye-bye</span>`
    })

    // 2) Знайти батьківський елемент li елемента через методи пошуку батьківського елементу вивести в консоль отримане значення


    const parentObject = document.querySelector('li');
    console.log(parentObject.parentNode);


    // 3) Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)

    // 4) В классі створити метод який визначає рейтинг в залежності від року випуску і кількості переглядів  ( кількість переглядів поділена на різницю між сьогоднішнім роком і роком випуску ) 

    const nowDate = new Date;
    class movieReview {
        constructor(Year, genre, name, views) {
            this.Year = Year;
            this.genre = genre;
            this.name = name;
            this.views = views;
        }

        rating(Year, views) {

            console.log(`${this.views} / (${nowDate} - ${this.Year})`);
        }
    }
    const movieFirst = new movieReview(1990, 'Comedy', 'Home alone', 12000000);
    console.log(movieFirst.rating);

// 5) Створіть массив і розмістіть в ньому створені обєкти фільмів, далі за допомогою синтаксису деструктирізації  переберіть масив  і виведіть значення по року випуску.






}











// Як самостійна робота, попрацюйте з querySelector і перевірте роботу селектора з різними видами розмітки