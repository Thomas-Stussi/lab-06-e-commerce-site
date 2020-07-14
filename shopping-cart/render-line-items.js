export function renderLineItem(cartItem, card) {
    //create the table row
    const tr = document.createElement('tr');

    //create cell and add name
    const nameTd = document.createElement('td');
    nameTd.textContent = card.name;

    //create quantity cell
    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    //create price cell
    const priceTd = document.createElement('td');
    priceTd.textContent = '$' + card.price;

    //create line total cell
    const lineTd = document.createElement('td');
    const lineTotal = card.price * cartItem.quantity;
    const roundTotal = (lineTotal * 100) / 100;
    lineTd.textContent = '$' + roundTotal;

    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(lineTd);

    return tr;
}