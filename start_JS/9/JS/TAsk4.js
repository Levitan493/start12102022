window.onload = () => {
    let body = document.querySelector('body');
    let wrapper = document.createElement('div');

    body.appendChild(wrapper);
    wrapper.className = 'wrapper';


    let btn = document.createElement('button');
    btn.id = 'openModal';
    btn.innerText = 'Open modal';

    wrapper.appendChild(btn);

    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'myModal'; 
    
    wrapper.appendChild(modal);
    let modalContent = document.createElement('div');
    modalContent.style.display = 'flex';
    let p = document.createElement('p');
    p.innerText = 'Modal window';
    p.style.textAlign = 'center';
    p.style.margin = '20px';

    modal.appendChild(modalContent);

    let btnClose = document.createElement('button');
    
    btnClose.className= 'close';
    btnClose.innerText = 'close';
    modalContent.appendChild(btnClose);
    modalContent.appendChild(p);

    btn.onclick = function(){
        modal.style.display = 'block';
    };

    btnClose.onclick = function(){
        modal.style.display = 'none';
    };
    window.onclick = function(e){
        if(e.target == wrapper){
            modal.style.display = 'none';
        }
        
    }



}