

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const cardsContainer = document.getElementById('cards-container');


    data.forEach(country => {
      const card = createCountryCard(country);
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error:', error));


function createCountryCard(country) {
  const card = document.createElement('div');
  card.classList.add('card');

  const flagImg = document.createElement('img');
  flagImg.src = country.flags.svg;
  card.appendChild(flagImg);

  const nameElement = document.createElement('h3');
  nameElement.textContent = country.name.common;
  card.appendChild(nameElement);

  const populationElement = document.createElement('p');
  populationElement.textContent = 'Población: ' + country.population.toLocaleString();
  card.appendChild(populationElement);

  const regionElement = document.createElement('p');
  regionElement.textContent = 'Región: ' + country.region;
  card.appendChild(regionElement);

  const capitalElement = document.createElement('p');
  capitalElement.textContent = 'Capital: ' + country.capital;
  card.appendChild(capitalElement);

  const moreButton = document.createElement('button');
  moreButton.classList.add('more-button');
  moreButton.textContent = 'More';
  moreButton.addEventListener('click', () => {
    openCountryDetailsPage(country.name.common);
  });
  card.appendChild(moreButton);

  return card;
}


function openCountryDetailsPage(countryName) {
  window.open('/PRACTICASAPis/countrys.html' + encodeURIComponent(countryName), '_blank');
}