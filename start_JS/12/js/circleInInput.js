window.onload = function(){
    // - створити інпут куди водиться значення і кнопку . Після введення значення ( цифрового ) і натискання на кнопку малються кола за допомогою svg. При натисканні на намальованне коло воно повино видалятись.

let form = document.querySelector('form');
let xData = document.getElementById('X');
let yData = document.getElementById('Y');
let radius = document.getElementById('radius');
let drawBut = document.querySelector('.draw');



let drawCircle = function(){
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('cx', xData.value);
    circle.setAttribute('cy', yData.value);
    circle.setAttribute('r', radius.value);
    circle.setAttribute('stroke', 'black');
    circle.setAttribute('fill', 'green');
    circle.addEventListener('click', removeCircle);
    svg.appendChild(circle);
    form.appendChild(svg);
    

}

let removeCircle = function(e){
    e.target.remove();
}

xData.addEventListener('input',drawCircle);
yData.addEventListener('input',drawCircle);
radius.addEventListener('input',drawCircle);
drawBut.addEventListener('click', drawCircle);



}