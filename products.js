// import functions and grab DOM elements
import { renderCard } from './renderCard.js';
import { cardList } from './cards.js';

const cardDiv = document.getElementById('cards');
// initialize state

// set event listeners to update state and DOM
for (let i = 0; i < cardList.length; i++) {
    const card = cardList[i];
    const el = renderCard(card);
    cardDiv.appendChild(el);
    
}