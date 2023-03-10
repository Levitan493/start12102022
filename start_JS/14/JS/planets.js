window.onload = function () {
    let wrapper = document.querySelector('.wrapper');

    let cardCreator = function (name, diameter, population) {
        let card = document.createElement('div');
        card.classList.add('card');

        let planetName = document.createElement('p');
        planetName.textContent = 'NAME: ' + name;
        card.appendChild(planetName);

        let planetDiameter = document.createElement('p');
        planetDiameter.textContent = 'DIAMETER: ' + diameter;
        card.appendChild(planetDiameter);

        let planetPopulation = document.createElement('p');
        planetPopulation.textContent = 'POPULATION: ' + population;
        card.appendChild(planetPopulation);

        let diameterBtn = document.createElement('input');
        diameterBtn.type = 'button';
        diameterBtn.value = 'DIAMETER';

        diameterBtn.onclick = () => {
            let cards = Array.from(document.querySelectorAll('.card'));
            let sortedCards = cards.sort((a, b) => {
                let aDiameter = parseInt(a.querySelector('p:nth-child(2)').textContent.split(' ')[1]);
                let bDiameter = parseInt(b.querySelector('p:nth-child(2)').textContent.split(' ')[1]);
                return bDiameter - aDiameter;
            });
            if (diameterBtn.value === 'DIAMETER') {
                sortedCards.forEach(card => wrapper.appendChild(card));
                diameterBtn.value = 'DIAMETER ASC';
            } else {
                sortedCards.reverse().forEach(card => wrapper.appendChild(card));
                diameterBtn.value = 'DIAMETER';
            }
        }

        card.appendChild(diameterBtn);

        let populationBtn = document.createElement('input');
        populationBtn.type = 'button';
        populationBtn.value = 'POPULATION';

        populationBtn.onclick = () => {
            let cards = Array.from(document.querySelectorAll('.card'));
            let sortedCards = cards.sort((a, b) => {
                let aPopulation = parseInt(a.querySelector('p:nth-child(3)').textContent.split(' ')[1]);
                let bPopulation = parseInt(b.querySelector('p:nth-child(3)').textContent.split(' ')[1]);
                return bPopulation - aPopulation;
            });
            if (populationBtn.value === 'POPULATION') {
                sortedCards.forEach(card => wrapper.appendChild(card));
                populationBtn.value = 'POPULATION ASC';
            } else {
                sortedCards.reverse().forEach(card => wrapper.appendChild(card));
                populationBtn.value = 'POPULATION';
            }
        }

        card.appendChild(populationBtn);
        wrapper.appendChild(card);
    }

    fetch('https://swapi.dev/api/planets')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            data.results.forEach(planet => {
                cardCreator(
                    planet.name,
                    planet.diameter,
                    planet.population
                );
            });
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation', error);
        });
}
