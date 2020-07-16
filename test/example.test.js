// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCard } from '../renderCard.js'; 

const test = QUnit.test;


test('render card test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const shivanDragon = {
        id: 'shivan',
        name: 'Shivan Dragon',
        image: 'shivan.jpg',
        description: 'Flying, R: +1/+0 until end of turn.',
        category: 'Creature',
        price: 6199.99,
        color: 'red',
        mana: 6
    };

    const expected = `<li class="Creature" title="Flying, R: +1/+0 until end of turn."><h3>Shivan Dragon</h3><img src="../assets/shivan.jpg" alt="Shivan Dragon image"><p class="price">$6199.99<button value="shivan">Add</button></p></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderCard(shivanDragon);
    const actual = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


