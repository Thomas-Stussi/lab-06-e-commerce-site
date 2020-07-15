export function findById(someArray, someId) {
    let item = null;
    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i].id === someId) {
            item = someArray[i];
        }
    }
    return item;
}

export function calcLineItem(quantity, price) {
    const lineTotal = quantity * price;
    return Math.round(lineTotal * 100) / 100;
}

export function calcOrderTotal(cart, cards) {
    let orderTotal = 0;

    //loop through line items
    for (let i = 0; i < cart.length; i++) {
        const line = cart[i];
        //find by id
        const card = findById(cards, line.id);
        //const the line total
        const lineTotal = calcLineItem(line.quantity, card.price);
        orderTotal += lineTotal;
    }
    return '$' + Math.round(orderTotal * 100) / 100;
}

export function getCart() {
    const stringyCart = localStorage.getItem('CART');
    const cart = JSON.parse(stringyCart) || [];

    return cart;
}

export function calcTotalItems(cart) {
    //initialize
    let totalItems = 0;
    //loop through line items
    for (let i = 0; i < cart.length; i++) {
        //get line item
        const line = cart[i];
        //calculate total number of items
        totalItems += line.quantity;
    }
    return totalItems;
}