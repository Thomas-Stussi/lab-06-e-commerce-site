export function getCart() {
    const stringyCart = localStorage.getItem('CART');
    const cart = JSON.parse(stringyCart) || [];

    return cart;
}
//export function addToCart()
//export function clearCart()
    //not sure what code these functions are refering to