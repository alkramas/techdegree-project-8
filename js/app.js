const url = 'https://randomuser.me/api/?results=12';
const cnt = document.querySelector('#cnt');

// *******************************
// helper functions
// *******************************
function createCard(img, name, surname, email, city) {
  const card = document.createElement('DIV');
  const cardContent = `
    <img src="${img}" class="profile-image" alt=""/>
    <p class="name">${name}</p>
    <p class="surname">${surname}</p>
    <p class="email">${email}</p>
    <p class="city">${city}</p>
  `;
  cnt.appendChild(card).classList.add('card');
  const thisCard = cnt.lastElementChild;
  // console.log(thisCard);
  thisCard.innerHTML = cardContent;
}


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

function createProfile(data) {
  let img = data.picture.medium;
  let name = data.name.first;
  let surname = data.name.last;
  let email = data.email;
  let city = data.location.city;
  createCard(img, name, surname, email, city);
}

 function getPrimaryData(data) {
  const primaryData = data.map(user => createProfile(user));
  // console.log(primaryData);
}

// *******************************
// fetch data
// *******************************
fetchData(url)
 // .then(data => console.log(data.results))
 .then( data => getPrimaryData(data.results) )
