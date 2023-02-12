window.onload = function () {

    // 1) Створити массив шляхів до зображень і створити слайдер який переключає кожні 3 секунди картинку, слайдер повинен бути зациклений, коли доходить до кінця массиву починає показувати зображення з початку. Анімації і ефекти до слайдеру по бажанню

    let imgs = [{
        src: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        src: 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        src: 'https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
        // {
        //     src: 'https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        // },
        // {
        //     src: 'https://images.pexels.com/photos/1327786/pexels-photo-1327786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        // },
        // {
        //     src: 'https://images.pexels.com/photos/2531237/pexels-photo-2531237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        // }
    ];

    let container = document.querySelector('.container');
    let imgContainer = document.querySelector('.container>img');
    let count = 0;
    function slider() {
        imgContainer.setAttribute('src', `${imgs[count].src}`);
        count++;
        if (count == imgs.length) {
            count = 0
        }
    }
    slider();
    setInterval(slider, 3000);

    let btnPrev = document.querySelector('prev');
    let btnNext = document.querySelector('next');
    btnPrev.addEventListener('click', function prevImg() {
        imgContainer.setAttribute(imgs.src -1);
        
    });

}
