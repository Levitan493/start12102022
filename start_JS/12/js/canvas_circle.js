window.onload = function(){
    // - Створити функцію яка малює коло в канвасі і розміщує в середині кола текст 

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const centerX = canvas.width/2;
const centerY = canvas.height/2;
canvas.style.margin = '50px auto';
canvas.style.border = '2px solid red';


function drawCircle(x, y, radius, text){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font = ('26px Arial');
    // ctx.strokeText(text, centerX - radius / 2, centerY);
    

    // ctx.strokeText(text, centerX, centerY);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeText(text, centerX, centerY);
}

drawCircle(centerX, centerY, 100, 'This circle');

}