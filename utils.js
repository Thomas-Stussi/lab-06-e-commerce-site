export function findById(someArray, someId) {
    let item = {};
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