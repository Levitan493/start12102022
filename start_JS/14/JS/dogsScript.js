window.onload = function () {
    let wrapper = document.querySelector('.wrapper');
    let breedList = document.createElement('ul');
    wrapper.appendChild(breedList);

    let loadedBreeds = {}; 

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            for (breed in data.message) {
                let breedItem = document.createElement('li');
                breedItem.textContent = breed;
                breedList.appendChild(breedItem);

                breedItem.addEventListener('click', () => {
                    let breedName = breedItem.textContent;
                    if (loadedBreeds[breedName]) { 
                        return;
                    }
                    fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
                        .then(response => response.json())
                        .then(data => {
                            let breedPhoto = document.createElement('img');
                            breedPhoto.src = data.message;
                            breedItem.appendChild(breedPhoto);
                            loadedBreeds[breedName] = true; 
                        })
                })
            }
        })
        .catch(error => console.error(error));
}
