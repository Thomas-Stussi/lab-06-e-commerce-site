import { renderLineItem } from '../shopping-cart/render-line-items.js';

const test = QUnit.test;

test('renders a line item', assert => {
    // arrange
    const cartItem = {
        id: 'shivan',
        quantity: 2
    };

    // card
    const card = {
        id: 'shivan',
        name: 'Shivan Dragon',
        image: 'shivan.jpg',
        description: 'Flying, R: +1/+0 until end of turn.',
        category: 'Creature',
        price: 6199.99,
        color: 'red',
        mana: 6
    };
    const expected = '<tr><td>Shivan Dragon</td><td>2</td><td>$6199.99</td><td>$12399.98</td></tr>';

    // act
    const dom = renderLineItem(cartItem, card);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});