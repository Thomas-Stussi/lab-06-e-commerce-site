// import functions and grab DOM elements
import { renderCard } from './renderCard.js';

import { getCards } from './common/utils.js';

const cardDiv = document.getElementById('cards');
const cardArray = getCards();
// initialize state

// set event listeners to update state and DOM
for (let i = 0; i < cardArray.length; i++) {
    const card = cardArray[i];
    const el = renderCard(card);
    cardDiv.appendChild(el); 
}