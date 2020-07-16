//import stuff!
import { findById, calcOrderTotal, getCart, calcTotalItems } from '../common/utils.js';
//import { cart } from './cart.js';
import { cardList } from '../cards.js';
import { renderLineItem } from './render-line-items.js';


//dom elements
const tbody = document.getElementById('tbody');
const totalCell = document.getElementById('total');
const totalItemsCell = document.getElementById('items');
const orderButton = document.getElementById('order-button');
//parsed cart using getCart function
const cart = getCart();
//console.log(cart);

//loop through the cart
for (let i = 0; i < cart.length; i++) {
    //each cart item
    const cartCard = cart[i];
    //grab the platonic card from cardList
    const platonicCard = findById(cardList, cartCard.id);
    //make the table row
    const dom = renderLineItem(cartCard, platonicCard);
    //console.log(dom);
    //append the dom tree with the new row
    tbody.append(dom);

}
//then make the order total row
const orderTotal = calcOrderTotal(cart, cardList);
totalCell.append(orderTotal);
//console.log(totalCell, orderTotal);

//calc total items
const totalItems = calcTotalItems(cart);
totalItemsCell.append(totalItems);

//make the order button clear everything 
//if cart is empty disable it
if (cart.length === 0) {
    orderButton.disabled = true;
} //else if something else in cart
else {
    //add event listener
    orderButton.addEventListener('click', () => {
        //clear local storage
        localStorage.removeItem('CART');
        //this step isn't clear but it alerts the user that the order has been placed
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        //redirect to shop
        window.location = '../index.html';
    });
}