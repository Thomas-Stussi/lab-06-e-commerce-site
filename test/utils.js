/*import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';
import { cardList } from '../cards.js';
import { cart } from '../shopping-cart/cart.js';

const test = QUnit.test;


test('find product by id', assert => {
    // arrange
    const id = 'shivan';
    const expected = 'Shivan Dragon';

    // act
    const foundCard = findById(cardList, id);

    // assert
    assert.ok(foundCard);
    assert.equal(foundCard.name, expected);
});

test('calculate line total', (assert) => {
    // arrange
    const quantity = 5;
    const price = 2.01;
    const expected = 10.05;

    // act 
    const total = calcLineItem(quantity, price);

    // assert
    assert.equal(total, expected);
});

test('calculate the order total', (assert) => {
    //arrange
    const expected = '$9301.59';

    //act
    const orderTotal = calcOrderTotal(cart, cardList);

    //assert
    assert.equal(orderTotal, expected);
});*/