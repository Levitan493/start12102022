window.onload = () => {

    


    // let btn = document.querySelector('#alertBtn');
    // function displayAlert() {
    //     alert('Click Button');
    // };
    // btn.addEventListener('click', displayAlert);
    // // btn.addEventListener('dblclick', displayAlert);
    // // btn.addEventListener('mouseover', displayAlert);

    // let removeEv = document.querySelector('#remove');
    // removeEv.addEventListener('click', () => {
    //     btn.removeEventListener('click', displayAlert);
    //     alert('Removed');
    // });

    // let h1 = document.querySelector('h1');
    // h1.addEventListener('click', function () {
    //     console.log(this);
    //     this.textContent = 'Кохана Ната';
    // });

    // let [...pArr] = document.querySelectorAll('div p');
    // console.log(pArr);
    // for (let i = 0; i < pArr.length; i++) {
    //     pArr[i].addEventListener('click', function () {
    //         this.style.background = 'blue';
    //         this.textContent = `My index ${i}`;
    //     })
    // };

    // let input = document.querySelector('input');
    // let getData = document.querySelector('#get');

    // getData.onclick = function(){
    //     let inputData = input.value;
    //     console.log(inputData, 'Inputdata');
    // };
    // let isTunnel = false;
    // let e1 = document.querySelector('#first');
    // let e2 = document.querySelector('#second');
    // let e3 = document.querySelector('#third');

    // e1.addEventListener('click', function () {
    //     this.style.backgroundColor = 'yellow';
    //     alert('Div 1 event work');
    //     e.stopPropagation();
    // }, isTunnel);
    // e2.addEventListener('click', function () {
    //     this.style.backgroundColor = 'blue';
    //     alert('Div 2 event work');
    //     e.stopPropagation();
    // }, isTunnel);
    // e3.addEventListener('click', function () {
    //     this.style.backgroundColor = 'green';
    //     alert('Div 3 event work');
    //     e.stopPropagation();
    // }, isTunnel);

    // function showMessage() {
    //     alert('Hello world')
    // };
    // setTimeout(showMessage, 5000);


    // 3) Зробити таймер який відраховує 60секунд і виводить розрахунок на сторінку, а потім відображає alert('Ви дочикались знижок) Стилізування за бажанням

    let counter = 60;
    let h1 = document.querySelector('h1');
    function counterSecond(){
        counter--;
        h1.innerText = counter;
        if(counter === 0){
        alert('Ви дочекались знижок!');
        clearTimeout(counterSecond);
    };
        
    };
    setInterval(counterSecond,1000);
    
    


}