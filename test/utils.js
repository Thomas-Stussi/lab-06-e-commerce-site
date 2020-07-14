import { findById, calcLineItem } from '../utils.js';
import { cardList } from '../cards.js';

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