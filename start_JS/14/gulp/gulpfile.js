const {src, dest, series, parallel} = require('gulp');
// const fetch = require('node-fetch');

async function getDataAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function getData() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}


exports.default = parallel(getDataAsync, getData);
