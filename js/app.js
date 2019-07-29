const url = 'https://randomuser.me/api/?results=12';
const cnt = document.querySelector('#cnt');

// *******************************
// helper functions
// *******************************
function createCard(img, name, surname, email, city, id, phone, address, birthday) {
  // const card = document.createElement('DIV');
  const cardContent = `
  <a href="#${id}" rel="modal:open">
    <div class="card">
      <img src="${img}" class="profile-image" alt=""/>
      <div class="info">
        <p class="names"><span class="name">${name}</span>&nbsp;<span class="surname">${surname}</span></p>
        <p class="email">${email}</p>
        <p class="city">${city}</p>
      </div>
    </div>
  </a>
  <div class="modal" id="${id}">
    <img src="${img}" class="profile-image" alt=""/>
    <div class="m-info">
      <p class="m-names"><span class="name">${name}</span>&nbsp;<span class="surname">${surname}</span></p>
      <p class="m-email">${email}</p>
      <p class="m-city">${city}</p>
    </div>
    <div class="m-details">
      <p class="m-phone">${phone}</p>
      <p class="m-address">${address}</p>
      <p class="m-birthday">${birthday}</p>
    </div>
  </div>
  `;
  // cnt.appendChild(card).classList.add('card');
  // const thisCard = cnt.lastElementChild;
  // console.log(thisCard);
  // thisCard.innerHTML = cardContent;
  cnt.innerHTML += cardContent;
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

function createProfile(user, index) {
  // let user = data.;
  let img = user.picture.medium;
  let name = capFirstChar(user.name.first);
  let surname = capFirstChar(user.name.last);
  let email = user.email;
  let city = capFirstChar(user.location.city);
  let id = index + 1;
  let phone = user.cell;
  let address = capFirstChar(user.location.street);
  let birthday = user.dob.date;
  createCard(img, name, surname, email, city, id, phone, address, birthday);
}

 function getPrimaryData(data) {
  const primaryData = data.map((user, index) => createProfile(user, index));
  console.log(data);
}

// *******************************
// fetch data
// *******************************
fetchData(url)
 // .then(data => console.log(data.results))
 .then( data => getPrimaryData(data.results) )
 .then( data => search() )


 // *******************************
 // call modal window plugin
 // *******************************
