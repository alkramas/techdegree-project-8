// this script performs a search with the user input and shows/hides elements

const searchBox = document.querySelector('.search-box');

// create search or filter tool with this helper funciton
function createTool(inputType, type, placeholder, id) {
  let newTool = document.createElement(inputType);
  newTool.setAttribute("type", type);
  newTool.id = id;
  newTool.placeholder = placeholder;
  let firstOption = `<option value="all" selected>${placeholder}</option>`;
  if (inputType === "select") {
      newTool.innerHTML = firstOption;
  }
  searchBox.appendChild(newTool);
}

createTool("select", "select", "Filter by Names", "filter-names");
createTool("select", "select", "Filter by Usernames", "filter-username");


function searchFilter(eventtype, inputVariable) {
  inputVariable.addEventListener (eventtype, function() {
    const cardDivs = document.querySelectorAll('.card');

    for (let i = 0; i < cardDivs.length; i += 1) {
      let searchInputValue = inputVariable.value.toLowerCase();
      console.log(searchInputValue);
      let thisCard = cardDivs[i];
      console.log(thisCard);
      let firstName = thisCard.querySelector('.name').textContent;
      let lastName = thisCard.querySelector('.surname').textContent;
      let email = thisCard.querySelector('.email').textContent;
      let city = thisCard.querySelector('.city').textContent;
      let infoAll = firstName + ' ' + lastName + ' ' + email + ' ' + city;
      infoAll = infoAll.toLowerCase();
      // console.log(infoAll);

      let searchMatch = infoAll.includes(searchInputValue);

      if ( searchMatch == true ) {
          thisCard.style.display = 'flex';
      }
      else {
        thisCard.style.display = 'none';
      }
    }
  })
}

function search() {
  createTool("input", "search", "Search the Employee Directory", "main-search");
  const searchInput = document.querySelector('input[type="search"]');
  searchFilter('input', searchInput);
}



function filter(user) {
  let selectName = document.querySelector('#filter-names');
  let selectUser = document.querySelector('#filter-username');

  let username = user.login.username;
  let firstName = capFirstChar(user.name.first);
  let surName = capFirstChar(user.name.last);
  let name = firstName + ' ' +surName;
  const optionItemName = `<option value="${name}">${name}</option>`;
  const optionItemUser = `<option value="${username}">${username}</option>`;
  selectName.innerHTML += optionItemName;
  selectUser.innerHTML += optionItemUser;

  searchFilter('change', selectName);
  searchFilter('change', selectUser);
}
