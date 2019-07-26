const url = 'https://randomuser.me/api/?results=12';
const cnt = document.querySelector('#cnt');

// *******************************
// helper functions
// *******************************
function createCard(img, name, surname, email, city, id) {
  const card = document.createElement('DIV');
  const cardContent = `
    <img src="${img}" class="profile-image" alt=""/>
    <div class="info">
      <p class="names"><span class="name">${name}</span>&nbsp;<span class="surname">${surname}</span></p>
      <p class="email">${email}</p>
      <p class="city">${city}</p>
    </div>
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

function capFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createProfile(data) {
  // let user = data.;
  let img = data.picture.medium;
  let name = capFirstChar(data.name.first);
  let surname = capFirstChar(data.name.last);
  let email = data.email;
  let city = capFirstChar(data.location.city);
  createCard(img, name, surname, email, city);
}

 function getPrimaryData(data) {
  const primaryData = data.map(user => createProfile(user));
  console.log(data);
}

// *******************************
// fetch data
// *******************************
fetchData(url)
 // .then(data => console.log(data.results))
 .then( data => getPrimaryData(data.results) )


 // *******************************
 // call modal window plugin
 // *******************************
