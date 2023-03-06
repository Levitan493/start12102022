window.onload = function () {


  // 1) отриманні данні вивести на сторінку в вигляді стилізованих карток, в картці повина бути кнопка "select"

  // 2)При кліку на кнопку "select" вибрані іd користувачів повині записувати в  localStorage,  також повинно бути записано в localStorage скільки користувачів вибрано.
  const wrapper = document.querySelector('.wrapper');

  const cardCreater = function (id, name, username) {
    let card = document.createElement('div');
    card.classList.add('card');
  
    let idEl = document.createElement('p');
    idEl.textContent = 'ID: ' + id;
    card.appendChild(idEl);
  
    let nameEl = document.createElement('p');
    nameEl.textContent = 'NAME: ' + name;
    card.appendChild(nameEl);
  
    let userNameEl = document.createElement('p');
    userNameEl.textContent = 'USERNAME: ' + username;
    card.appendChild(userNameEl);
  
    let select = document.createElement('input');
    select.type = 'button';
    select.value = 'select';
  
    select.onclick = () => {
      let selectedUsersCount = localStorage.getItem('selectedUsersCount') || 0;
      localStorage.setItem('selectedUsersCount', parseInt(selectedUsersCount) + 1);
      localStorage.setItem('selectedUser', JSON.stringify({ id: id, name: name, username: username }));
      
    };
  
    card.appendChild(select);
    wrapper.appendChild(card);
  };
  
  let xhr = new XMLHttpRequest();
  xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
  xhr.onload = function () {
    if (xhr.status === 200) {
      let responseText = xhr.responseText;
      let users = JSON.parse(responseText);
      console.log(users);
  
      for (let i = 0; i < users.length; i++) {
        let user = users[i];
        cardCreater(user.id, user.name, user.username);
      }
    }
    else {
      console.log('Request failed. Status:', xhr.status);
    }
  };
  xhr.send();
  

  
  // cardCreater(11, 'John', 'Dou');


}