// this script performs a search with the user input and shows/hides elements

//read input from search field

// console.log(cardDivs);
// const namesAll = document.querySelectorAll('.names');

function search() {
  let searchInput = document.querySelector('input[type="search"]');
  let cardDivs = document.querySelectorAll('.card');

  searchInput.addEventListener ('input', function() {
    for (let i = 0; i < cardDivs.length; i += 1) {
      let searchInputValue = searchInput.value.toLowerCase();
      // console.log(searchInputValue);
      let thisCard = cardDivs[i];
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
