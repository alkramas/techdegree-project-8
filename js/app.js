const url = 'https://randomuser.me/api/?results=12';
const cnt = document.querySelector('#cnt');

// *******************************
// helper functions
// *******************************
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function fetchData(url) {
    return fetch(url)
      .then(checkStatus)
      .then(response => response.json())
      .catch(error => console.log('an error has occured!', error))
}

 function getData(data) {
  const profile = data.results;
  const firstname = profile.name.first;
  const lastname = profile.name.last;
  const email = profile.email;
  const phone = profile.phone;
  console.log(firstname + ' ' + lastname + ',' + email + ',' + phone);
}

function createCard(name, surname, img, id) {
  const card = document.createElement('DIV');
  const cardContent = `
    <img src="${img}" class="profile-image" alt=""/>
    <p class="name">${name}</p>
    <p class="surname">${surname}</p>
  `;
  cnt.appendChild(card).classList.add('card');
  const cards = document.querySelector('.card');
  // const thisCard = cards.lastChild;
  cards.innerHTML = cardContent;
}

// *******************************
// fetch data
// *******************************
fetchData(url)
 // .then(data => console.log(data.results))
 .then(data => forEach( => getData(data.results)))






// createCard();
// createCard('Fabian', 'Kramer', 'images/me.png');
