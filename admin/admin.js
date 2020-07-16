//import stuff
import { getCards } from '../common/utils.js';

//set variables and get dom elements
const cardForm = document.getElementById('form');

//action!
//add event listener to the form
cardForm.addEventListener('submit', e => {
    //prevent default behavior
    e.preventDefault();

    const newCardData = new FormData(cardForm);

    const newCard = {
        id: newCardData.get('id'),
        name: newCardData.get('name'),
        description: newCardData.get('description'),
        price: Number(newCardData.get('price')),
        image: newCardData.get('image')
    };
    //get the current product list
    const existingCards = getCards();
    //push new card onto the catalog
    existingCards.push(newCard);
    //stringify
    const stringyCards = JSON.stringify(existingCards);
    //set the string to local storage
    localStorage.setItem('CARDS', stringyCards);
    //nav to the product page
    window.location = '../products/index.html';
});