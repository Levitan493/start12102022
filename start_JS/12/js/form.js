window.onload = function(){
    const myForm = document.querySelector('form');
    const myWidth = document.getElementById('width')
    const myHeight = document.getElementById('height');
    const ellipsCheckBox = document.getElementById('ellips');
    const painterBtn = document.querySelector('.painter');
    
    myWidth.addEventListener('input', checkForm);
    myHeight.addEventListener('input', checkForm);
    ellipsCheckBox.addEventListener('change', function(){
      checkForm(myWidth, myHeight);
    });
    
    function checkForm(){
        if(myWidth.value && myHeight.value && ellipsCheckBox.checked){
            painterBtn.disabled = false;
            painterBtn.removeEventListener('click', drawRect);
            painterBtn.addEventListener('click', drawEllips);
        }
        else if(myWidth.value && myHeight.value){
            painterBtn.disabled = false;
            painterBtn.removeEventListener('click', drawEllips);
            painterBtn.addEventListener('click', drawRect);
            
        }
        else{
            painterBtn.disabled = true;
        }
    }
    
    
    
    const drawRect = function(){
      let svgRect = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgRect.setAttribute('style', 'border: 1px solid black');
      svgRect.setAttribute('width', myWidth.value);
      svgRect.setAttribute('height', myHeight.value);
      myForm.appendChild(svgRect);
    }

    const drawEllips = function(){
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // svg.setAttribute('style', 'border: 1px solid black');
        svg.setAttribute('width', myWidth.value);
        svg.setAttribute('height', myHeight.value);
        let ellips = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        ellips.setAttribute('cx', myWidth.value/2);
        ellips.setAttribute('cy', myHeight.value/2);
        ellips.setAttribute('rx', myWidth.value/2);
        ellips.setAttribute('ry', myHeight.value/2);
        svg.appendChild(ellips);
        myForm.appendChild(svg);
      }
      
    
// painterBtn.addEventListener('click', drawRect);



}