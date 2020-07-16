import { getCart, findById } from './common/utils.js'

export function renderCard(card) {
    const li = document.createElement('li');
    li.className = card.category;
    li.title = card.description;

    const h3 = document.createElement('h3');
    h3.textContent = card.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + card.image;
    img.alt = card.name + ' image';
    li.appendChild(img);

    //const div = document.createElement('div');
    //div.className = 'descriptions';
    //div.textContent = card.description;
    //li.appendChild(div);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + card.price.toFixed(2);
    
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Buy Now!';                                        
    button.value = card.id;
    //add an event listener
    button.addEventListener('click', () => {
        //console.log(card.id);
        //get the cart
        const cart = getCart();
        //console.log(cart);
        //do we have an item like this in cart?
        let cartItem = findById(cart, card.id);
        //if there is no matching item
        if (!cartItem) {
            //create a card in the cart
            const newCartItem = {
                //add the data
                id: card.id,
                quantity: 1
            };
            //add new cart item into the cart
            cart.push(newCartItem);
        }
        //otherwise...
        else {
            //increment the item
            cartItem.quantity++;
        }
        //stringify the cart again
        const stringyCart = JSON.stringify(cart);
        //add the stringyCart to local storage
        localStorage.setItem('CART', stringyCart);
        //console.log(stringyCart);
    });

    p.appendChild(button);

    li.appendChild(p);

    return li;
}
